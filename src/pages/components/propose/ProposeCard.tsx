import { Flex } from "@chakra-ui/react"
import Image from "next/image"

type ProposeCardTypeProp = {
  content: any
  selected: string
  contractType: string
  onClick: any
}

export const ProposeCard = (args: ProposeCardTypeProp) => {
  const { content, selected, contractType, onClick } = args
  const { 
    contractName,
    functions,
    imageInactive,
    imageActive,
  } = content
  // console.log(contractName,functions)
  return (
    <Flex
      mx={'15px'}
      cursor={'pointer'}
    >
      <Flex 
        flexDir={'column'} 
        w={'276px'}
        h={'320px'}
        alignItems={'space-between'}
        justifyContent={'space-between'}  
        cursor={'pointer'}
        bgColor={ 
          selected === contractName && contractType === 'A' ?
          '#2a72e5' :
          selected === contractName && contractType === 'B' ?
          '#f7981c' :
          '#fff'
        }
        p={'15px 25px 30px'}
        borderRadius={'15px'}
        boxShadow={'0 10px 15px 0 rbga(42, 114, 229, 0.25'}
        onClick={() => onClick()}
      >
        <Flex
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          h={'84px'}
          w={'100%'}
        >
          <Flex
            fontSize={'64px'}
            fontWeight={100}
            color={'#f4f6f9'}
          >
            {functions.length}
          </Flex>
          <Image src={imageInactive} alt=""/>
        </Flex>
        <Flex
          flexDir={'column'}
          width={'185px'}
          fontSize={'24px'}
          textAlign={'left'}
          color={ selected === contractName ? '#fff' : '#3e495c'}
          fontWeight={300}
        >
          {contractName}
        </Flex>

      </Flex>
    </Flex>
  )
}