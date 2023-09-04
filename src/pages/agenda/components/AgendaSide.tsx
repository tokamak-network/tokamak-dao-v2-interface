import { Flex } from "@chakra-ui/react"
import { CardTitle } from "common/card/CardTitle"
import { useMemo } from "react"
// import { AgendaSideTable } from "@/common/table/Agenda/AgendaSideTable"
import { useWeb3React } from '@web3-react/core';
import { ResourceCard } from "common/card/ResourceCard";

type AgendaSideProp = {
  agendaList: any
}

export const AgendaSide = (args: AgendaSideProp) => {
  const { agendaList } = args;
  const { account } = useWeb3React();

  return (
    <Flex 
      w={'378px'}
      ml={'30px'}
      flexDir={'column'}
    >
      
      <CardTitle 
        name={'Committee Stats'}
        mb={'35px'}
      />
       <Flex flexDir={'column'}>
        <CardTitle 
          name={'Resources'}
          mb={'12px'}
        />
        <ResourceCard />
       </Flex>
    </Flex>
  )
}