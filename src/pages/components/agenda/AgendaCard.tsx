import { Flex, useTheme, Text } from '@chakra-ui/react';
import { trimAddress } from '@/components/trimAddress';
import { convertNumber } from '../../../utils/number';
import { timeConverter, fromNow } from '@/components/getDate';
import CLOCK from '@/assets/images/poll-time-active-icon.png'
import BasicButton from '@/common/button/BasicButton';
import Image from 'next/image';
import { AgendaCardHeader } from './AgendaCardHeader';
import { useEffect } from 'react';

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
  console.log(type)
  const numChainEffects = onChainEffects.length
  
  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.memberCard()}
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
        <Image src={CLOCK} alt='' />
        <Text
          fontSize={'10px'}
          color={'#86929d'}
          ml={'7px'}
        >
          {data === 'Empty' ? '-' : fromNow(result)}
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