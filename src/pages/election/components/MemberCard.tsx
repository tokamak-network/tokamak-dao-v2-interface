import { Flex, useTheme, Text } from '@chakra-ui/react';
import { MemberCardHeader } from './MemberCardHeader';
import { trimAddress } from '@/components/trimAddress';
import { convertNumber } from '../../../utils/number';
import { timeConverter, fromNow } from '@/components/getDate';
import Image from 'next/image';
import CLOCK from '@/assets/images/poll-time-active-icon.png'
import BasicButton from '@/common/button/BasicButton';
import { useRouter } from 'next/router';

type Member = {
  data: any;
  index: number;
}

export const MemberCard = (args: Member) => {
  const { data, index } = args
  // console.log(data)
  const { candidate, elected, name, candidateContract, stakedAmount, asCommit } = data;
  const { CARD_STYLE } = useTheme()
  const router = useRouter()
  const voted = convertNumber({
    amount: stakedAmount,
    type: 'ray'
  })

  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.memberCard()}
      flexDir={'column'}
      mb={'20px'}
    >
      <MemberCardHeader 
        elected={candidateContract}
        voted={voted}
        index={index}
      />
      <Text
        fontSize={'20px'}
        mt={'5px'}
        mb={'5px'}
      >
        {data === 'Empty' ? '-' : `${name}`}  
      </Text>
      <Text
        color={'#86929d'}
        fontSize={'14px'}
      >
        {data === 'Empty' ? '-' : 
        `${trimAddress({
          address: candidateContract,
          firstChar: 6,
          lastChar: 4,
          dots: '...'
        })} is elected to Committee member since ${timeConverter(elected)}`}
      </Text>
      <Flex
        flexDir={'row'}
        my={'25px'}
        h={'13px'}
      >
        <Image src={CLOCK} alt='' />
        <Text
          fontSize={'10px'}
          color={'#86929d'}
          ml={'7px'}
        >
          {data === 'Empty' ? '-' : `Staking reward last updated ${fromNow(asCommit[0].timestamp)}`}
        </Text>
      </Flex>
      <Flex
        flexDir={'row'}
        justifyContent={'space-between'}
      >
        <Flex>
          {data === 'Empty' ? '' : 
            <BasicButton 
              type={'a'}
              name={'View Details'}
              onClick={() => {
                router.push({
                  pathname: '/election/[l2address]',
                  query: { 
                    l2address: candidateContract,
                  }
                })
              }}
            />
          }
        </Flex>
        <Flex>
          <BasicButton 
          type={'normal'}
          name={'Challenge'}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}