import { Flex, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import useModal from '@/hooks/useModal';
import { TextInput } from "@/common/input/CustomInput";
import { ProposeModalProps } from '../../../types/modal';
import { useCallback, useEffect } from "react";
import BasicButton from "@/common/button/BasicButton";
import { useRecoilState } from "recoil";
import { propose_description_input, propose_description_state, propose_param1_input, propose_param1_state, propose_param2_input, propose_param2_state, propose_param3_input, propose_param3_state } from "@/atom/propose/input";

export function ProposeModal () {
  const { selectedModalData, selectedModal, closeModal, isModalLoading } = useModal<ProposeModalProps>();
  const [param1Value, setParam1Value] = useRecoilState(propose_param1_input);
  const [param2Value, setParam2Value] = useRecoilState(propose_param2_input);
  const [param3Value, setParam3Value] = useRecoilState(propose_param3_input);
  const [descriptionValue, setDescriptionValue] = useRecoilState(propose_description_input);
  console.log(selectedModalData)
  const closeThisModal = useCallback(() => {
    // setResetValue();
    // setInput('0')
    setParam1Value('');
    setParam2Value('');
    setParam3Value('')
    setDescriptionValue('');
    closeModal();
  }, [closeModal]);
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
                    const hint = selectedModalData.params[`exampleParam${index}`]
                    // console.log(hint)
                    return (
                      <Flex
                        fontSize={'13px'}
                        color={'#2d3136'}
                        mb={'15px'}
                        flexDir={'column'}
                      >
                        <Text mb={'5px'}>
                          {`${input.name} (${input.type})`}
                        </Text>
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
                    <Text mb={'5px'}>
                      Description
                    </Text>
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
                  <BasicButton 
                    name={"Please Connect Wallet"} 
                    type={"disable"}
                    w={'160px'}
                  />
                  <Flex w={'10px'}/>
                  <BasicButton 
                    name={"Close"} 
                    type={"inactive"}  
                    w={'160px'}                  
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