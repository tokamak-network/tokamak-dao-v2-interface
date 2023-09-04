import { Flex } from "@chakra-ui/react"
import { useAgenda } from "@/hooks/agenda/useAgendas"
import { AgendaList } from './agenda/components/AgendaList';
import { AgendaSide } from "./agenda/components/AgendaSide";

function Agenda () {
  const agendas = useAgenda()
  // console.log(agendas)
  return (
    <Flex
      minW={'1200px'}
      w={'100%'}
      minH={'89vh'}
      flexDir={'row'}
      justifyContent={'center'}
      alignItems={'start'}
      my={'35px'}
    >
      <AgendaList 
        agendaList={agendas}
      />
      <AgendaSide
        agendaList={agendas}
      />
    </Flex>
  )
}

export default Agenda