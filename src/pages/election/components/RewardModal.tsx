import { Flex, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Image } from "@chakra-ui/react";
import useModal from '@/hooks/useModal';
import { useCallback, useEffect, useState } from "react";
import CLOSE_ICON from '@/assets/images/popup-close-icon.svg'
import { convertNumber } from '../../../utils/number';
import BasicButton from "@/common/button/BasicButton";
import { useWeb3React } from '@web3-react/core';
import { getContract } from "@/components/getContract";
import { useRecoilState } from "recoil";
import { txState } from "@/atom/global/transaction";
import Candidate from "services/abi/Candidate.json"


export function RewardModal() {
  const { selectedModalData, selectedModal, closeModal, isModalLoading } = useModal();
  const [modalComponent, setModalComponent] = useState()
  const { account, library } = useWeb3React()
  const [, setTx] = useState();
  const [, setTxPending] = useRecoilState(txState);

  const updateSeig = useCallback(async () => {
    if (account && library) {
      //@ts-ignore
      const Candidate_CONTRACT = getContract(selectedModalData.contractInfo, Candidate.abi, library, account)
      const tx = await Candidate_CONTRACT.updateSeigniorage()
      setTx(tx);
      setTxPending(true);
      closeModal()
    }
  }, [])
  
  const expReward = selectedModalData ? convertNumber({
    //@ts-ignore
    amount: selectedModalData.expectedSeig,
    type: 'ray',
    localeString: true
  }) : '0.00'

  return (
    <Modal
      isOpen={
        selectedModal === 'reward'
      }
      isCentered
      onClose={closeModal}
    >
      <ModalOverlay>
        <ModalContent bg={'#fff'} w={'500px'} borderRadius={'10px'} boxShadow={'0 1px 1px 0 rgba((96, 97, 112, 0.16)'}>
          {/* {modalComponent ? ( */}
            <ModalBody>
              {/* <Image src={CLOSE_ICON} alt={''} /> */}
              <Flex w="100%" flexDir={'column'} alignItems={'center'} py={'30px'}>
                <Flex
                  fontSize={'24px'}
                  fontWeight={500}

                >
                  You can get {expReward} TON reward
                </Flex>
                <Flex
                  fontSize={'14px'}
                  fontWeight={'normal'}
                  color={'#818992'}
                  my={'15px'}
                >
                  Do you want to continue?
                </Flex>
                <Flex
                  mt={'10px'}
                  flexDir={'row'}
                  justifyContent={'space-between'}
                  alignItems={'space-between'}
                  w={'230px'}
                >
                  <BasicButton 
                    name={'Update'}
                    type={'a'}
                    onClick={() => updateSeig()}
                  />
                  <BasicButton 
                    name={'Close'}
                    type={'inactive'}
                    onClick={() => closeModal()}
                  />
                </Flex>
              </Flex>
            </ModalBody> 
            {/* ) : '' */}
          {/* } */}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}