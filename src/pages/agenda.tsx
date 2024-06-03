import { Flex, Text } from "@chakra-ui/react"
import { useAgenda } from "@/hooks/agenda/useAgendas"
import { AgendaList } from './agenda/components/AgendaList';
import { AgendaSide } from "./agenda/components/AgendaSide";
import { AgendaFilter } from "./agenda/components/AgendaFilter";
import { useState, useEffect } from 'react';
import { agendaStatus, agendaResult } from '@/utils/agendaFilter';
import { useWeb3React } from '@web3-react/core';
import { CardTitle } from "@/common/card/CardTitle";
import { useCandidate } from "@/hooks/election/useCandidate";

function Agenda () {
  const agendas = useAgenda()
  const [status, setStatus] = useState('Status')
  const [result, setResult] = useState('Result')
  const [execution, setExecution] = useState('Execution')
  const [vote, setVote] = useState('Vote')
  const [proposal, setProposal] = useState('Proposal')
  const [isMember, setIsMember] = useState()
  const [filteredAgenda, setFilteredAgenda] = useState(agendas)
  const { memberList } = useCandidate()
  const { account } = useWeb3React();
  
  useEffect(() => {
    const filter = agendas.filter((agenda: any) => 
      status === 'All' || 'Status' ? true : agendaStatus(agenda.status) === status.toUpperCase()
    )
    setFilteredAgenda(filter)
  },[status])

  
  useEffect(() => {
    const filter = agendas.filter((agenda: any) => 
      result === 'All' || 'Result' ? true : agendaResult(agenda.result) === result.toUpperCase()
    )
    setFilteredAgenda(filter)
  },[result])

  useEffect(() => {
    const filter = agendas.filter((agenda: any) => 
      execution === 'All' || 'Execution' ? true : execution === 'Executed' ? agenda.executed : !agenda.executed
    )
    setFilteredAgenda(filter)
  },[execution])

  useEffect(() => {
    const isMember = memberList.find((member: any) => member.member === account?.toLowerCase())
    setIsMember(isMember)
  }, [account, memberList])

  // useEffect(() => {
  //   const filter = agendas.filter((agenda: any) => {
  //     let found, notVoted;
  //     if (vote !== 'All') {
  //       found = this.voteResult.find((result: any) => result.id === agenda.agendaid);

  //       function notVoted (agenda: any) {
  //         if (agendaStatus(agenda.status) === 'NOTICE' && this.blockTime >= agenda.tNoticeEndTime) {
  //           if (this.isMember) {
  //             return true;
  //           }
  //         }
  //         if (!found) {
  //           return false;
  //         }
  //         if (!found.result[0]) {
  //           return true;
  //         }
  //         return false;
  //       };
  //     }

  //     if (vote === 'All') {
  //       return true;
  //     } else if (vote === 'Not Voted') {
  //       return notVoted(agenda);
  //     } else if (vote === 'Abstain') {
  //       if (!found) {
  //         return false;
  //       }
  //       return found.result[1] === '0' && !notVoted(agenda);
  //     } else if (vote === 'Yes') {
  //       if (!found) {
  //         return false;
  //       }
  //       return found.result[1] === '1';
  //     } else if (vote === 'No') {
  //       if (!found) {
  //         return false;
  //       }
  //       return found.result[1] === '2';
  //     } else {
  //       console.log('bug'); // eslint-disable-line
  //       return true;
  //     }
  //   })
  //   setFilteredAgenda(filter)
  // },[vote])
  // console.log(filteredAgenda)
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
      <Flex>
        <Flex
          flexDir={'column'}
        >
          <Flex
            fontSize={'20px'}
            mb={'18px'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <CardTitle 
              name={'Agenda'}
              mb={'15px'}
            />
            <Flex
              flexDir={'row'}
              alignItems={'start'}
              w={'100%'}
            >
              <AgendaFilter 
                placeholder={status}
                options={['All', 'Notice', 'Voting', 'Waiting Exec', 'Executed', 'Ended']}
                width={'120px'}
                selectOptions={setStatus}
              />
              <AgendaFilter 
                placeholder={result}
                options={['All', 'Pending', 'Accept', 'Reject', 'Dismiss']}
                width={'120px'}
                selectOptions={setResult}
              />
              <AgendaFilter 
                placeholder={execution}
                options={['All', 'Executed', 'Not Executed']}
                width={'120px'}
                selectOptions={setExecution}
              />
              {
                account ?
                <>
                  <AgendaFilter 
                    placeholder={vote}
                    options={['All', 'Yes', 'No', 'Abstain', 'Not Voted']}
                    width={'120px'}
                    selectOptions={setVote}
                  />
                  <AgendaFilter 
                    placeholder={proposal}
                    options={['All', 'Mine']}
                    width={'120px'}
                    selectOptions={setProposal}
                  />
                </> : ''
              }
            </Flex>
          </Flex>
          <AgendaList 
            agendaList={agendas}
            isMember={isMember}
          />
        </Flex>
      </Flex>
      <AgendaSide
        agendaList={agendas}
        isMember={isMember}
      />
    </Flex>
  )
}

export default Agenda