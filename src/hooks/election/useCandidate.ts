import { getEvent, getCandidates, getMembers } from "@/api";
import { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_CANDIDATE } from "@/graphql/getCandidates";
import { useWeb3React } from "@web3-react/core";
import {BigNumber} from "ethers";

export function useCandidate() {
  const [candidate, setCandidate] = useState<any[]>([]);
  const [memberList, setMemberList] = useState<any[]>([]);
  const [nonMemberList, setNonMemberList] = useState<any[]>([]);
  const [isCandidate, setIsCandidate] = useState<boolean>(false);
  const { library, account } = useWeb3React();

  const { data } = useQuery(GET_CANDIDATE, {
    pollInterval: 10000
  });

  useEffect(() => {
    async function fetchEvent () {
      let membersAddress: any[] = []
      let members: any[] = []
      let nonMembers: any[] = []
      let candi: any[] = []

      const events = await getEvent('ChangedSlotMaximum')
      
      const checkSlot = events.filter((event: any) => event.eventName === 'ChangedSlotMaximum')
      const slotNumber = checkSlot[0] ? checkSlot[0].data.slotMax : 3
      const fliterChangeMembers = events.filter((event: any) => event.eventName === 'ChangedMember')
      
      for (let i = fliterChangeMembers.length ; i-- ; i > 0) {
        const arrIndex = membersAddress.findIndex((address: any) => {
          return address.member.toLowerCase() === fliterChangeMembers[i].data.prevMember.toLowerCase()
        })
        
        if (arrIndex !== -1) (membersAddress.splice(arrIndex, 1))
        
        membersAddress.push({
          member: fliterChangeMembers[i].data.newMember,
          elected: fliterChangeMembers[i].blockTimestamp,
          slot: fliterChangeMembers[i].data.slotIndex
        }) 
      }
      if (data) {
        const candidates = await Promise.all(
          data.candidates.map(async (obj: any, index: number) => {
            const member = membersAddress.find((member: any) => 
              member.member.toLowerCase() === obj.candidate.toLowerCase()
            )
            obj = {
              ...obj,
              ...member
            }
            
            const selfStake = obj.staked.filter((stake: any) => stake.sender === obj.candidate)
            // TODO: Calculate as BigNumber
            let selfStakeAmount = 0
            selfStake.map((stake: any) => {
              selfStakeAmount += stake.amount
            })

            if (selfStakeAmount > 100000000000000000000000000000) {
              member ? members.push(obj) : nonMembers.push(obj)
              candi.push(obj)
            }
            if (account) {
              obj.candidate.toLowerCase() === account.toLowerCase() ? setIsCandidate(true) : ''
              
            }
          })
        )
        
        if (slotNumber > members.length) {
          for (let i = 0 ; i< slotNumber - members.length ; i++ ) {
            members.push('Empty')
          }
        }
        
        setNonMemberList(nonMembers)
        setMemberList(members)
        setCandidate(candi)
      }
    }

    fetchEvent()
  }, [data, account])
  return { candidate, memberList, nonMemberList, isCandidate };
}