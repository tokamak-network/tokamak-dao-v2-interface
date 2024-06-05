import useCallContract from '@/hooks/useCallContract';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';

export function useVotingResult (agendaid: number, voters: any) {
  const { AgendaManager_Contract } = useCallContract()
  const [votingResult, setVotingResult] = useState()

  const { account } = useWeb3React();

  useEffect(() => {
    async function fetch () {
      if (AgendaManager_Contract && account) {
        const voter = voters.find((voter: any) => voter.toLowerCase() === account.toLowerCase())
        if (voter) {
          const result = await AgendaManager_Contract.getVoteStatus(agendaid, voter)
          setVotingResult(result[1].toString())
        }
      }  
    }

    fetch()

  }, [voters, account])
  return votingResult
}