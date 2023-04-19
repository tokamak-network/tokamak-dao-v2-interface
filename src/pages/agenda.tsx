import { Flex } from "@chakra-ui/react"
import { useAgenda } from "@/hooks/agenda/useAgendas"

function Agenda () {
  const agendas = useAgenda()
  console.log(agendas)
  return (
    <Flex>
      Agenda
    </Flex>
  )
}

export default Agenda