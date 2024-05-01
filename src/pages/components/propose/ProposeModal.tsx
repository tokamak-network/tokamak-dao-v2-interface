import { Flex, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import useModal from '@/hooks/useModal';
import { TextInput } from "@/common/input/CustomInput";
import { ProposeModalProps } from '../../../types/modal';
import { useCallback, useEffect, useState } from "react";
import BasicButton from "@/common/button/BasicButton";
import { useRecoilState } from "recoil";
import { propose_description_input, propose_param1_input, propose_param2_input, propose_param3_input } from "@/atom/propose/input";
import { useWeb3React } from '@web3-react/core';
import useUserBalance from "@/hooks/useUserBalance";
import useCallContract from "@/hooks/useCallContract";
import { convertNumber } from '../../../utils/number';
import BasicTooltip from "@/common/tooltip";
import { getFunctionSelector, encoded, encodeParameters, getContractAddress } from "@/components/getContractInfo";
import { unmarshalString } from "@/components/marshalString";
import CONTRACT_ADDRESS from '@/services/addresses/contract';
import { txState } from "@/atom/global/transaction";
import { createAgenda } from "@/api";

export function ProposeModal () {
  const { selectedModalData, selectedModal, closeModal, isModalLoading } = useModal<ProposeModalProps>();
  const [param1Value, setParam1Value] = useRecoilState(propose_param1_input);
  const [param2Value, setParam2Value] = useRecoilState(propose_param2_input);
  const [param3Value, setParam3Value] = useRecoilState(propose_param3_input);
  const [descriptionValue, setDescriptionValue] = useRecoilState(propose_description_input);
  const [, setTx] = useState();
  const [txPending, setTxPending] = useRecoilState(txState);

  const [createAgendaFee, setCreateAgendaFee] = useState<string | undefined>('')

  const { account } = useWeb3React();
  const { userTonBalance } = useUserBalance(account)
  const { AgendaManager_Contract, DAOCommitteeProxy_Contract, TON_CONTRACT } = useCallContract()

  useEffect(() => {
    async function fetch () {
      if (account && AgendaManager_Contract) {
        const fee = await AgendaManager_Contract.createAgendaFees()
        const convertedFee = fee ? convertNumber({
          amount: fee.toString(),
          localeString: true
        }) : '0.00'
        setCreateAgendaFee(convertedFee)
      }
    }
    fetch()
  }, [account, AgendaManager_Contract])

  const closeThisModal = useCallback(() => {
    // setResetValue();
    // setInput('0')
    setParam1Value('');
    setParam2Value('');
    setParam3Value('')
    setDescriptionValue('');
    closeModal();
  }, [closeModal]);

  const propose = useCallback(async () => {
    if (account && AgendaManager_Contract && DAOCommitteeProxy_Contract && TON_CONTRACT) {
      if (Number(createAgendaFee) > Number(userTonBalance)) alert('Please check your TON amount.');
      
      const {
        inputs,
        contract,
        name,
        type
      } = selectedModalData

      const { DAOCommitteeProxy_ADDRESS } = CONTRACT_ADDRESS

      const numOfInputs = inputs.length

      let setParams = true
      const types = [];
      const values = [];

      for (let i = 0; i < numOfInputs; i ++) {
        const type = inputs[i].type;
        const value = i === 0 ? param1Value : i === 1 ? param2Value : param3Value
        const encodedValue = encoded(type, value);

        if (encodedValue === -1) {
          console.log('bug', 'failed to encode value'); // eslint-disable-line
          alert('Please check the input value.');
          return;
        }
        if (!value) {
          setParams = false;
        }
        types.push(type);
        values.push(encodedValue);
      }
      if (!setParams) alert('The parameter value must be set.');

      if (name == 'setSeigRates') proposeSetSeigRates()

      const [
        noticePeriod,
        votingPeriod,
        fee,
      ] = await Promise.all([
        AgendaManager_Contract.minimumNoticePeriodSeconds(),
        AgendaManager_Contract.minimumVotingPeriodSeconds(),
        AgendaManager_Contract.createAgendaFees(),
      ]);

      const selector = getFunctionSelector(contract, name, type);

      const params = encodeParameters(types, values);
      const data = unmarshalString(params);

      const bytecode = selector ? selector.concat(data) : ''
      const target = getContractAddress(contract);
      
      const param = encodeParameters(
        ['address[]', 'uint256', 'uint256', 'bool', 'bytes[]'],
        [[target], noticePeriod.toString(), votingPeriod.toString(), true, [bytecode]],
      );

      const tx = await TON_CONTRACT.approveAndCall(DAOCommitteeProxy_ADDRESS, fee, param)

      setTx(tx);
      setTxPending(true);
      closeThisModal();

      
      if (tx) {
        await createAgenda(account, tx.hash, type, descriptionValue);
        await tx.wait().then((receipt: any) => {
          if (receipt.status) {
            setTxPending(false);
            setTx(undefined);
          }
        });
      }
    }
  }, [selectedModalData, param1Value, param2Value, param3Value, descriptionValue])

  const proposeSetSeigRates = useCallback(async () => {

  }, [])
  

  return (
    <Modal
      isOpen={
        selectedModal === 'propose'
      }
      isCentered
      onClose={closeThisModal}
    >
      <ModalOverlay>
        <ModalContent 
          bg={'#fff'} 
          minW={'780px'} 
          borderRadius={'10px'} 
          boxShadow={'0 1px 1px 0 rgba((96, 97, 112, 0.16)'}
          
        >
          <ModalBody>
            {/* <Image src={CLOSE_ICON} alt={''} /> */}
            {
              selectedModalData ?
              <Flex flexDir={'column'} w={'780px'} my={'10px'}>
                <Flex fontSize={'24px'} fontWeight={500} color={'#3e495c'} mb={'5px'}>
                  {selectedModalData.name}
                </Flex>
                <Flex 
                  whiteSpace={'pre-wrap'}
                  fontSize={'14px'}
                  fontWeight={'roboto'}
                  maxW={'680px'}
                  color={'#818992'}
                  mb={'20px'}
                >
                  {selectedModalData.explanation}
                </Flex>
                {
                  selectedModalData.inputs?.map((input: any, index: number) => {
                    let tooltip
                    let hint
                    if (input.name === 'setSeigRates') {
                      if (index === 0) {
                        tooltip = 'uint256 powerTONSeigRate_: PowerTON distribution ratio (decimal: 27) 100000000000000000000000000: 10%';
                        hint = '100000000000000000000000000';
                      }
                      if (index === 1) {
                        tooltip = 'uint256 daoSeigRate_: DAO distribution ratio (decimal: 27) 200000000000000000000000000: 20%';
                        hint = '200000000000000000000000000';
                      }
                      if (index === 2) {
                        tooltip = 'uint256 PseigRate_: Additional seigniorage distribution ratio 300000000000000000000000000: 30%';
                        hint = '300000000000000000000000000';
                      }
                    } else {
                      tooltip = selectedModalData.params[`aboutParam${index}`]
                      hint = selectedModalData.params[`exampleParam${index}`]
                    }

                    return (
                      <Flex
                        fontSize={'13px'}
                        color={'#2d3136'}
                        mb={'15px'}
                        flexDir={'column'}
                      >
                        <Flex mb={'5px'} flexDir={'row'} alignItems={'center'}>
                          {`${input.name} (${input.type})`}
                          {
                            tooltip ?
                            <BasicTooltip 
                              label={'propose'}
                              label2={`${tooltip} \n\nex) ${hint}`}
                              placement={'right'}
                            /> : ''
                          }
                        </Flex>
                        <TextInput 
                          index={index}
                          atomKey={'propose_param'}
                          placeHolder={hint}
                        />
                      </Flex>
                    )
                  })
                }
                <Flex>
                  <Flex
                    fontSize={'13px'}
                    color={'#2d3136'}
                    mb={'15px'}
                    flexDir={'column'}
                  >
                    <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
                      <Text mb={'5px'}>
                        Description
                      </Text>
                      {
                        account ?
                        <Flex 
                          whiteSpace={'pre-wrap'}
                          fontSize={'10px'}
                          fontWeight={'normal'}
                          textAlign={'right'}
                          color={'#c9d1d8'}
                        >
                          <Text>
                            Available Amount:
                          </Text>
                          <Text color={'#434b52'} mx={'3px'}>
                            {userTonBalance}
                          </Text>
                          <Text mr={'3px'}>
                            TON / 
                          </Text>
                          <Text>
                            Required Amount: 
                          </Text>
                          <Text color={'#434b52'} mx={'3px'}>
                            {createAgendaFee}
                          </Text>
                          <Text>
                             TON
                          </Text>
                        </Flex> : ''
                      }
                    </Flex>
                    <TextInput 
                      type={'description'}
                      index={'description'}
                      atomKey={'propose_description'}
                    />
                  </Flex>
                </Flex>
                <Flex
                  flexDir={'row'}
                  justifyContent={'center'}
                >
                  {
                    account ?
                    <BasicButton
                      name={'Propose'}
                      type={'a'}
                      w={'160px'}
                      onClick={()=> propose()}
                    /> :
                    <BasicButton 
                      name={"Please Connect Wallet"} 
                      type={"disable"}
                      isDisabled={true}
                      w={'160px'}
                    />

                  }
                  <Flex w={'15px'}/>
                  <BasicButton 
                    name={"Close"} 
                    type={"inactive"}  
                    w={'160px'}      
                    onClick={() => closeThisModal()}            
                  />
                </Flex>
              </Flex>
              : <></>
            }
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )

}