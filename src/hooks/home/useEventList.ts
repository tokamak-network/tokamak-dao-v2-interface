import { getCandidates, getRecentEvents } from "@/api";
import { useEffect, useState, useMemo } from 'react';

export function useEventList() {
  const [eventList, setEventList] = useState([]);
  const [candidateList, setCandidateList] = useState([]);

  useEffect(() => {
    async function fetchEvent () {
      const candidates = await getCandidates()
      const events = await getRecentEvents()
      console.log(candidates)
      
      const filteredEvents = events.filter((event: any) => {
        const eventName = event.eventName;

        if (eventName === 'Deposited' ||
            eventName === 'WithdrawalRequested' ||
            eventName === 'WithdrawalProcessed' ||
            eventName === 'Comitted') {
          const found = candidates.find((candidate: any) => 
            candidate.candidate.toLowerCase() === event.data.layer2.toLowerCase() ||
            candidate.candidateContract.toLowerCase() === event.data.layer2.toLowerCase());

          return found ? true : false;
        } 
        else {
          return true;
        }
      });
      setCandidateList(candidates)
      setEventList(filteredEvents)
    }
    fetchEvent()
  }, [])
  return {candidateList, eventList};
}