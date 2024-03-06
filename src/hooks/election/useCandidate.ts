import { getEvent, getCandidates, getMembers } from "@/api";
import { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_CANDIDATE } from "@/graphql/getCandidates";
import { useWeb3React } from "@web3-react/core";

export function useCandidate() {
  const [candidate, setCandidate] = useState<any[]>([]);
  const [memberList, setMemberList] = useState<any[]>([]);
  const [nonMemberList, setNonMemberList] = useState<any[]>([]);

  const { library, account } = useWeb3React();

  const { data } = useQuery(GET_CANDIDATE, {
    pollInterval: 10000
  });

  useEffect(() => {
    async function fetchEvent () {
      let membersAddress: any[] = []
      let members: any[] = []
      let nonMembers: any[] = []

      const events = await getEvent('ChangedSlotMaximum')
      
      const checkSlot = events.filter((event: any) => event.eventName === 'ChangedSlotMaximum')
      const slotNumber = checkSlot[0] ? checkSlot[0].data.slotMax : 3
      const fliterChangeMembers = events.filter((event: any) => event.eventName === 'ChangedMember')
      
      for (let i = fliterChangeMembers.length ; i-- ; i > 0) {
        const arrIndex = membersAddress.findIndex((address: any) => address === fliterChangeMembers[i].data.prevMember)
        if (arrIndex !== -1) (membersAddress.splice(arrIndex, 1))
        membersAddress.push(fliterChangeMembers[i].data.newMember) 
      }

      if (data) {
        const candidates = await Promise.all(
          data.candidates.map(async (obj: any, index: number) => {
            const member = membersAddress.find((member: any) => 
              member.toLowerCase() === obj.candidate.toLowerCase()
            )
            member ? members.push(obj) : nonMembers.push(obj)
          })
        )
        
        if (slotNumber > members.length) {
          for (let i = 0 ; i< slotNumber - members.length ; i++ ) {
            members.push('Empty')
          }
        }
        
        setNonMemberList(nonMembers)
        setMemberList(members)
        setCandidate(data.candidates)
      }
    }

    fetchEvent()
  }, [data])
  return { candidate, memberList, nonMemberList };
}