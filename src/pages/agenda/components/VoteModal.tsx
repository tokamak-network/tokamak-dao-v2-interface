import { Flex, Modal, ModalBody, ModalContent, Text, ModalHeader, ModalOverlay, Image, Textarea, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import useModal from '@/hooks/useModal';
import { useCallback, useEffect, useState } from "react";
import BasicButton from "@/common/button/BasicButton";
import { useWeb3React } from '@web3-react/core';
import { useRecoilState } from "recoil";
import { txState } from "@/atom/global/transaction";
import { VoteModalProps } from '../../../types/modal';
import { TextInput, TextInputVote } from "@/common/input/CustomInput";

import { AgendaFilter } from "./AgendaFilter";
import { getCandidates } from "@/api";
import Candidate from "services/abi/Candidate.json"
import { getContract } from "@/components/getContract";
import { vote_description_input, vote_param1_input } from "@/atom/agenda/input";

export function VoteModal () {
  const { selectedModalData, selectedModal, closeModal, isModalLoading } = useModal<VoteModalProps>();
  const { account, library } = useWeb3React()
  const [, setTx] = useState();
  const [, setTxPending] = useRecoilState(txState);
  const [option, setOption] = useState('Yes')
  const [param1Value, setParam1Value] = useRecoilState(vote_param1_input);
  const [descriptionValue, setDescriptionValue] = useRecoilState(vote_description_input);

  const [menuState, setMenuState] = useState(false);
  const handleMenuButtonhover = (event: any) => {
    event.preventDefault();
    setMenuState(true);
  };
  useEffect(() => {
    setMenuState(false);
  }, [])

  const handleMenuButtonClick = (event: any) => {
    event.preventDefault();

    !menuState && setMenuState(!menuState);
  };

  const vote = useCallback(async () => {
    console.log('aaaa')
    if (account && library) {
      console.log('aaaaa')
      try {
        const candidates = await getCandidates()
        const mycandidate = candidates.find((candidate: any) => candidate.candidate.toLowerCase() === account.toLowerCase())
        const Candidate_CONTRACT = getContract(mycandidate.candidateContract, Candidate.abi, library, account)
        const tx = await Candidate_CONTRACT.castVote(selectedModalData.agendaid, option, descriptionValue)
        console.log('aaaa')
        setTx(tx);
        setTxPending(true);
        
        if (tx) {
          await tx.wait().then((receipt: any) => {
            if (receipt.status) {
              setTxPending(false);
              setTx(undefined);
            }
          });
        }
      } catch (e) {
        setTxPending(false);
        setTx(undefined);
      }
      
    }
  }, [])

  return (
    <Modal
      isOpen={selectedModal === 'vote'}
      isCentered
      onClose={closeModal}
    >
      <ModalOverlay 
        // bg={'rgba(0, 0, 0, 0.48)'}  
        
      />
        <ModalContent bg={'#fff'} minW={'786px'} borderRadius={'10px'} boxShadow={'0 1px 1px 0 rgba((96, 97, 112, 0.16)'}>
          <ModalBody>
            {
              selectedModalData ?
              <Flex w="100%" flexDir={'column'} alignItems={'center'} py={'30px'}>
                <Flex fontSize={'24px'} fontWeight={500} pb={'10px'}>
                  {`Agenda #${selectedModalData.agendaid} Confirm Vote`}
                </Flex>
              
                {/* select box */}
                <Flex
                  w={'726px'}
                  h={'72px'}
                  my={'15px'}
                  borderRadius={'6px'}
                  border={'solid 1px #dfe4ee'}
                  justifyContent={'center'}
                  alignItems={'center'}
                > 
                  <Flex
                    fontSize={'10px'}
                    fontWeight={'normal'}
                    color={'#3e495c'}
                    mr={'15px'}
                  >
                    Yes / No / Abstain
                  </Flex>
                  <AgendaFilter 
                    placeholder={option}
                    options={['Yes', 'No', 'Abstain']}
                    width={'180px'}
                    selectOptions={setOption}
                    type={'vote'}
                  />
                </Flex>
                {/* text message */}
                  <Flex
                    fontSize={'14px'}
                    fontWeight={500}
                    my={'10px'}
                    w={'100%'}
                    alignItems={'start'}
                    
                  >
                    Why are you voting for this poll?
                  </Flex>
                  <TextInputVote
                    index={'description'}
                    atomKey={'vote_param'}
                  />
                <Flex>

                </Flex>
                {/* voting button */}
                <Flex pt={'20px'} w={'100%'}>
                  <BasicButton
                    name={'Vote'}
                    w={'100%'}
                    type={'normal'}
                    onClick={()=> vote()}
                  />
                </Flex>
              </Flex> : ''
            }
          </ModalBody>
        </ModalContent>
      {/* </ModalOverlay>   */}
    </Modal>
  )
}