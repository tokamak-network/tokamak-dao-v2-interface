import { Flex, useTheme, Text } from '@chakra-ui/react';
import { trimAddress } from '@/components/trimAddress';
import { convertNumber } from '../../../utils/number';
import { timeConverter, fromNow } from '@/components/getDate';
import CLOCKA from '@/assets/images/poll-time-active-icon.svg'
import INACTIVE_CLOCK from '@/assets/images/poll-time-inactive-icon.svg';
import CLOCKB from '@/assets/images/poll-time-active-icon-typeB.svg'
import BasicButton from '@/common/button/BasicButton';
import Image from 'next/image';
import { AgendaCardHeader } from './AgendaCardHeader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { votingTime } from '../../../utils/getDate';

type AgendaCardProp = {
  data: any;
  index: number;
}

export const AgendaCard = (args: AgendaCardProp) => {
  const { data, index } = args
  const { 
    blockNumber,
    agendaid, 
    countAbstainVotes, 
    countNoVotes, 
    countYesVotes,
    creator,
    executed,
    noticePeriodSeconds,
    result,
    status,
    tCreationDate,
    voters,
    tx,
    type,
    onChainEffects
  } = data;
  
  const { CARD_STYLE } = useTheme()
  const numChainEffects = onChainEffects.length
  const router = useRouter()

  const [isActive, setIsActive] = useState<boolean>()

  useEffect(() => {
    const active = votingTime(data) != 'POLL ENDED'
    setIsActive(active)
  }, [])

  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.agendaCard()}
      flexDir={'column'}
      mb={'20px'}
    >
      <AgendaCardHeader 
        index={`#${agendaid}`}
        type={type}
      />
      <Text
        fontSize={'20px'}
        mt={'5px'}
        mb={'5px'}
      >
        {onChainEffects[0].title}  
      </Text>
      <Text
        color={'#86929d'}
        fontSize={'14px'}
      >
        {`This agenda was made by ${trimAddress({
          address: creator,
          firstChar: 6,
          lastChar: 4,
          dots: '...'
        })} on ${timeConverter(tCreationDate)}`}
      </Text>
      <Flex
        flexDir={'row'}
        my={'25px'}
        h={'13px'}
      >
        <Image src={!isActive ? INACTIVE_CLOCK : type === 'A' ? CLOCKA : CLOCKB} alt='' />
        <Text
          fontSize={'10px'}
          color={'#86929d'}
          ml={'7px'}
        >
          {data === 'Empty' ? '-' : votingTime(data)}
        </Text>
      </Flex>
      <Flex
        flexDir={'row'}
        justifyContent={'space-between'}
      >
        <Flex>
          {data === 'Empty' ? '' : 
            <BasicButton 
              type={type.toLowerCase()}
              name={'View Details'}
              onClick={() => {
                router.push({
                  pathname: '/agenda/[agendaid]',
                  query: { 
                    agendaid: agendaid,
                  }
                })
              }}
            />
          }
        </Flex>
      </Flex>
    </Flex>
  )
}