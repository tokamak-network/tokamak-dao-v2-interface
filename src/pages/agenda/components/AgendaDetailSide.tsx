import { Flex } from "@chakra-ui/react"
import { CardTitle } from "common/card/CardTitle"
import { useMemo,useEffect, useState } from "react"
// import { AgendaSideTable } from "@/common/table/Agenda/AgendaSideTable"
import { useWeb3React } from '@web3-react/core';
import { ResourceCard } from "common/card/ResourceCard";
import { CommitteeStatsCard } from './card/CommitteeStatsCard';
import { VotersCard } from "./card/VotersCard";
import { INFURA_API } from "@/constants";
import Web3 from "web3";
import useCallContract from 'hooks/useCallContract';
import { YourVoteCardDetail } from "./card/YourVoteCardDetail";

type AgendaSideProp = {
  currentAgenda: any
  comment: any
}

export const AgendaDetailSide = (args: AgendaSideProp) => {
  const { currentAgenda, comment } = args;
  const { account, library } = useWeb3React();
  const [voters, setVoters] = useState<any[] | string>([]);
  const { AgendaManager_Contract } = useCallContract()

  useEffect(() => {
    let voteObj: any[] = []
    
    async function fetch () {
      if (currentAgenda && AgendaManager_Contract) {
        if (currentAgenda.voters.length > 0) {
          try {
            for (let v of currentAgenda.voters) {
              const result = await AgendaManager_Contract.getVoteStatus(currentAgenda.agendaid, v)
              let voter = {
                voter: v,
                result: result[0] ? result[1].toString() === '1' ? 'Yes' : 'NO' : 'Not Voted'
              }
              voteObj.push(voter)
            }
            setVoters(voteObj)
          } catch (e) {
            console.log(e)
          }
        } else {
          setVoters('Not Decided Yet')
        }
      }
    }
    fetch()
  }, [currentAgenda])
  
  return (
    <Flex 
      w={'378px'}
      ml={'30px'}
      flexDir={'column'}
      mt={'10px'}
    >
      {
        account ?
        <>
          <CardTitle 
            name={'Your Vote'}
            mb={'12px'}
          />
          <YourVoteCardDetail 
            agenda={currentAgenda}
          />
        </> : ''
      }
      <CardTitle 
        name={'Voters'}
        mb={'12px'}
      />
      <VotersCard 
        currentAgenda={currentAgenda}
        voteResult={voters}
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