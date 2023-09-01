import { Flex } from "@chakra-ui/react";

type SelectContractTypeProp = {
  type: string
  content: string
  onClick: any
}

export const SelectContractType = (args: SelectContractTypeProp) => {
  const { type, content, onClick } = args;
  return (
    <Flex
      w={'102px'}
      h={'100%'}
      border={'1px #e7ebf2'}
      borderRadius={"6px"}
      cursor={'pointer'}
      fontWeight={500}
      fontSize={'13px'}
      bgColor={ 
        type === 'A' && content === 'Type A' ?
        '#2a72e5' : 
        type === 'B' && content === 'Type B' ?
        '#f7981c' :
        '#fff' 
      }
      color={ 
        type === 'A' && content === 'Type A' ?
        '#fff' : 
        type === 'B' && content === 'Type B' ?
        '#fff' :
        '#818992' 
      }
      justifyContent={'center'}
      alignItems={'center'}
      onClick={()=> onClick()}
    >
      { content }
    </Flex>
  )
}