import { useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { getAgendaVotesByVoter } from '@/api';

export function useCountVotedAgenda (agendaList: any, isMember: any) {
  const [voteRates, setVoteRates] = useState('0.00')
  const [canVoteAgendas, setCanVoteAgendas] = useState(0)
  const [countCanVoteAgendas, setCountCanVoteAgendas] = useState<any[]>([])

  const { account } = useWeb3React();
  useEffect(() => {
    let canVoteAgendas: any[] = []
    let countCanVoteAgendas = 0

    async function fetch () {
      if (agendaList && account && isMember) {
        agendaList.forEach((agenda: any) => {
          agenda.voters.forEach((voter: any) =>{
          if (voter != null && voter.toLowerCase() === account.toLowerCase()) {
            canVoteAgendas.push(agenda.agendaid);
            countCanVoteAgendas ++;
          }
        });
      })
        const agendaVote = await getAgendaVotesByVoter(isMember.candidateContract);
        const countAgendaVote = agendaVote.length

        if (countAgendaVote > 0 && countCanVoteAgendas > 0) {
          const voteRates = ((countAgendaVote / countCanVoteAgendas) * 100).toFixed(2)
          setVoteRates(voteRates)
        }
        setCanVoteAgendas(countCanVoteAgendas)
        setCountCanVoteAgendas(canVoteAgendas)
      }
    }
    fetch()
  },[agendaList, account, isMember])

  return {
    voteRates,
    countCanVoteAgendas,
    canVoteAgendas
  }
}