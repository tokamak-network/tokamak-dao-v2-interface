import { Flex, useTheme, Text } from '@chakra-ui/react';
import { CardTitle } from 'common/card/CardTitle';
import { AgendaCard } from './AgendaCard';

type AgendaListProp = {
  agendaList: any
}

export const AgendaList = (args: AgendaListProp) => {
  const { agendaList } = args
  const { CARD_STYLE } = useTheme()

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
            />
          )
        }) : ''
      }
    </Flex>
  )
}