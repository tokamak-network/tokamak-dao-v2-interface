import { Tooltip, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

export const FunctionCard = (args: any) => {
  const { disabled, name, contractType } = args
  const [isLabelOpen, setIsLabelOpen] = useState(false)
  
  return (
    <Tooltip 
      display={"flex"}
      placement={"bottom"}
      pointerEvents={"all"}
      label={'This function will become available after the DAO contract is upgraded.'}
      borderRadius={"3px"}
      color={'#fff'}
      fontSize="12px"
      maxW={'230px'}
      px={'10px'}
      py={'6px'}
      bgColor={'#353c48'}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
      hasArrow
      isOpen={disabled && isLabelOpen ? true : false}
      border={'0px'}
    >
      <Flex
        w={'174px'}
        h={'67px'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'5px'}
        boxShadow={'0 0 10px 0 rgba(223, 228, 238, 0.35);'}
        bgColor={'#fff'}
        fontSize={'14px'}
        cursor={'pointer'}
        color={disabled ? '#bdc0c2' : ''}
        _hover={
          disabled ? {} : 
          {
            color: contractType === 'A' ? '#2a72e5' : '#f7981c',
            border:'1px',
            borderColor: contractType === 'A' ? '#2a72e5' : '#f7981c'
          }
        }
        _disabled={disabled}
        onMouseLeave={() => setIsLabelOpen(false)}
        onMouseEnter={() =>  setIsLabelOpen(true)}
      >
        <Text
          w={'150px'}
          textAlign={'center'}
        >
          {name}
        </Text>
      </Flex>
    </Tooltip>
  )
}