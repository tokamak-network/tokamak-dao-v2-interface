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
  
  const numFunc = functions.length.toString()

  return (
    <Flex
      mx={'15px'}
      cursor={'pointer'}
      mb={'30px'}
    >
      <Flex 
        flexDir={selected ? 'row-reverse' : 'column'} 
        w={'276px'}
        h={ selected ? '124px' : '320px'}
        alignItems={'space-between'}
        justifyContent={'space-between'}  
        cursor={'pointer'}
        color={ selected === contractName ? '#fff' :'#3e495c' }
        bgColor={ 
          selected === contractName && contractType === 'A' ?
          '#2a72e5' :
          selected === contractName && contractType === 'B' ?
          '#f7981c' :
          '#fff'
        }
        _hover={
          contractType === 'A' ? { 
            bgColor: '#2a72e5',
            color: '#fff'
            
          } : { 
            bgColor: '#f7981c',
            color: '#fff'
          }
        }
        pb={'20px'}
        borderRadius={'15px'}
        boxShadow={'0 10px 15px 0 rbga(42, 114, 229, 0.25'}
        onClick={() => onClick()}
      >
        <Flex
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          h={'84px'}
          // w={'100%'}
          mr={'20px'}
          mt={'15px'}
        >
          
          {
            selected ? 
            <></> :
            <Flex
              fontSize={'64px'}
              fontWeight={100}
              color={'#f4f6f9'}
              height={'70px'}
              ml={'20px'}
              mb={'20px'}
            >
              {numFunc.length === 1 ? `0${numFunc}` : numFunc}
            </Flex>
          }
          <Image src={imageInactive} alt="" />
        </Flex>
        <Flex
          flexDir={'column'}
          width={'200px'}
          fontSize={'24px'}
          textAlign={'left'}
          fontWeight={300}
          mt={selected ? '20px' : ''}
          justifyContent={'center'}
          ml={'20px'}
          mb={'5px'}
        >
          {contractName}
        </Flex>
      </Flex>
    </Flex>
  )
}