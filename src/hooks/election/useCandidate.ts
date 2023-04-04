import { getEvent, getCandidates, getMembers } from "@/api";
import { useEffect, useState } from 'react';

export function useCandidate() {
  const [candidate, setCandidate] = useState(0);
  const [memberList, setMemberList] = useState<any[]>([]);
  const [nonMemberList, setNonMemberList] = useState<any[]>([]);

  useEffect(() => {
    async function fetchEvent () {
      let membersAddress: any[] = []
      let members: any[] = []
      let nonMembers: any[] = []

      // const mem = await getMembers()
      // console.log(mem)
      const events = await getEvent('ChangedSlotMaximum')
      const candidates = await getCandidates()

      if (candidates) {
        candidates.sort(function (a: any, b: any) {
          return b.updateCoinageTotalString - a.updateCoinageTotalString
        })
      }
      
      const checkSlot = events.filter((event: any) => event.eventName === 'ChangedSlotMaximum')
      const fliterChangeMembers = events.filter((event: any) => event.eventName === 'ChangedMember')
      
      for (let i = fliterChangeMembers.length ; i-- ; i > 0) {
        const arrIndex = membersAddress.findIndex((address: any) => address === fliterChangeMembers[i].data.prevMember)
        if (arrIndex !== -1) (membersAddress.splice(arrIndex, 1))
        membersAddress.push(fliterChangeMembers[i].data.newMember) 
      }
      candidates.map((candidate: any) => {
        const arrIndex = membersAddress.findIndex(
          (address: any) => address.toLowerCase() === candidate.candidate.toLowerCase()
        )
        arrIndex === -1 ? nonMembers.push(candidate) : members.push(candidate) 
      })
      
      const slotNumber = checkSlot[0] ? checkSlot[0].data.slotMax : 3
      if (slotNumber > members.length) {
        console.log(slotNumber - members.length)
        for (let i = 0 ; i< slotNumber - members.length ; i++ ) {
          members.push('Empty')
        }
      }
      console.log(members)
      setNonMemberList(nonMembers)
      setMemberList(members)
      setCandidate(candidates)
    }
    fetchEvent()
  }, [])
  return { candidate, memberList, nonMemberList };
}