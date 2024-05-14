import { Flex, useTheme, Text } from '@chakra-ui/react';
import { CardTitle } from 'common/card/CardTitle';
import { AgendaCard } from './AgendaCard';
import { useCandidate } from '../../../hooks/election/useCandidate';
import { useWeb3React } from '@web3-react/core';

type AgendaListProp = {
  agendaList: any
}

export const AgendaList = (args: AgendaListProp) => {
  const { agendaList } = args
  const { CARD_STYLE } = useTheme()
  // const functions = useAgendaWithABI(agendaList.add)
  const { account } = useWeb3React()
  const { memberList } = useCandidate()
  
  const isMember = memberList.find((member: any) => member.member === account?.toLowerCase())
  

  return (
    <Flex
      w={'786px'}
      flexDir={'column'}
    >
      <CardTitle 
        name={'Agendas'}
        mb={'35px'}
      />
      {
        agendaList ?
        agendaList.map((agenda: any, i: any) => {
          return (
            <AgendaCard 
              data={agenda}
              index={i}
              member={isMember}
            />
          )
        }) : ''
      }
    </Flex>
  )
}