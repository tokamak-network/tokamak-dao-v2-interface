import { Flex, Text } from "@chakra-ui/react"
import { SubText } from "./SubText"
import { trimAddress } from "@/components/trimAddress";
import { ethers } from "ethers";

type CardHeaderProp = {
  elected: string;
  voted: string | undefined;
  index: number | string
}

export const MemberCardHeader = (args: CardHeaderProp) => {
  const { elected, voted, index } = args;
  const commify = ethers.utils.commify
  const trimElected = trimAddress({
    address: elected,
    firstChar: 6,
    lastChar: 4,
    dots: '...'
  })
  const comma = voted ? commify(voted) : '0.00'

  return (
    <Flex
      flexDir={'row'}
      h={'11px'}
      alignItems={'center'}
      w={'100%'}
      justifyContent={'space-between'}
    >
      <Flex>
        <SubText 
          blue={'Status'}
          black={voted === '0.00' ? 'Empty' :'Occupied'}
        />
        <Text fontSize={'9px'} mx={'5px'} color={'#c9d1d8'}>
          |
        </Text>
        <SubText 
          blue={'Elected'}
          black={trimElected}
        />
        <Text fontSize={'9px'} mx={'5px'} color={'#c9d1d8'}>
          |
        </Text>
        <SubText 
          blue={'# of Votes'}
          black={comma}
        />
      </Flex>
      <Flex>
        <SubText 
          blue={`#${index}`}
          black={'Slot'}
          size={'12px'}
        />
      </Flex>
    </Flex>
  )
}