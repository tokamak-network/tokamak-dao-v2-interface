import { Flex } from "@chakra-ui/react"
import { CardTitle } from "common/card/CardTitle"
import { useMemo } from "react"
// import { AgendaSideTable } from "@/common/table/Agenda/AgendaSideTable"
import { useWeb3React } from '@web3-react/core';
import { ResourceCard } from "common/card/ResourceCard";
import { CommitteeStatsCard } from './card/CommitteeStatsCard';
import { YourVoteCard } from "./card/YourVoteCard";
import { useActivityReward } from "@/hooks/agenda/useActivityReward";
import { YourStatCard } from "./card/YourStatCard";
import { useCountVotedAgenda } from "@/hooks/agenda/useCountVotedAgenda";

type AgendaSideProp = {
  agendaList: any
  isMember: any
}

export const AgendaSide = (args: AgendaSideProp) => {
  const { agendaList, isMember } = args;
  const { account } = useWeb3React();
  const { activityReward } = useActivityReward()
  const {
    voteRates,
    countCanVoteAgendas,
    canVoteAgendas
  } = useCountVotedAgenda(agendaList, isMember)
  
  return (
    <Flex 
      w={'378px'}
      ml={'30px'}
      flexDir={'column'}
      mt={'50px'}
    >
      {
        isMember ?
        <Flex flexDir={'column'}>
          <CardTitle 
            name={'Your Vote'}
            mb={'12px'}
          />
          <YourVoteCard 
            voteRates={voteRates}
          />
          <CardTitle 
            name={'Your Stats'}
            mb={'12px'}
          />
          <YourStatCard 
            activityReward={activityReward}
            numAgendas={canVoteAgendas}
          />
        </Flex> : ''
      }
      <CardTitle 
        name={'Statistics'}
        mb={'12px'}
      />
      <CommitteeStatsCard 
        agendaList={agendaList}
      />
      <Flex flexDir={'column'}>
        <CardTitle 
          name={'Resources'}
          mt={'35px'}
          mb={'12px'}
        />
        <ResourceCard />
      </Flex>
    </Flex>
  )
}