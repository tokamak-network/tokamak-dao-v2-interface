import { getVotersByCandidate } from '@/api';
import { useState, useEffect } from 'react';


export function useVoters (address: string) {
  const [voters, setVoters] = useState<any[]>([])

  useEffect(() => {
    async function fetch () {
      const voterToCandidate = await getVotersByCandidate(address)

      setVoters(voterToCandidate)
    }
    fetch()
  }, [])
  return voters
}