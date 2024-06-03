import { Flex, useTheme, Text } from '@chakra-ui/react';
import { CardTitle } from 'common/card/CardTitle';
import { AgendaCard } from './AgendaCard';
import { useCandidate } from '../../../hooks/election/useCandidate';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { INFURA_API } from '@/constants';
import Web3 from 'web3';

type AgendaListProp = {
  agendaList: any
  isMember: any
}

export const AgendaList = (args: AgendaListProp) => {
  const { agendaList, isMember } = args
  const { CARD_STYLE } = useTheme()
  // const functions = useAgendaWithABI(agendaList.add)
  const { account } = useWeb3React()
  // const { memberList } = useCandidate()
  const [blockTime, setBlockTime] = useState(0)

  useEffect(() => {
    async function fetch () {
      let web3
      if (INFURA_API) {
        web3 = new Web3(new Web3.providers.HttpProvider(INFURA_API));
      }
  
      if (web3) {
        const block = await web3?.eth.getBlock('latest')
        setBlockTime(Number(block.timestamp.toString()))
      }
    }
    fetch()
  }, [])
  
  
  

  return (
    <Flex
      w={'786px'}
      flexDir={'column'}
    >
      {
        agendaList ?
        agendaList.map((agenda: any, i: any) => {
          return (
            <AgendaCard 
              data={agenda}
              index={i}
              member={isMember}
              blockTime={blockTime}
            />
          )
        }) : ''
      }
    </Flex>
  )
}