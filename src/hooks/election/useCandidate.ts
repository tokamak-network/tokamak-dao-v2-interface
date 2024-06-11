import { getEvent, getCandidates, getMembers } from "@/api";
import { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_CANDIDATE } from "@/graphql/getCandidates";
import { useWeb3React } from "@web3-react/core";
import { useChangedMembers } from "./useChangedMembers";
import { ZERO_ADDRESS } from '../../constants/index';
import { useRecoilState } from "recoil";
import { candidateState, memberState, nonMemberState } from "@/atom/election/candidate";

export function useCandidate() {
  const [candidate, setCandidate] = useRecoilState(candidateState);
  const [memberList, setMemberList] = useRecoilState(memberState);
  const [nonMemberList, setNonMemberList] = useRecoilState(nonMemberState);
  const [isCandidate, setIsCandidate] = useState<boolean>(false);
  const { library, account } = useWeb3React();
  const { memberAddresses } = useChangedMembers();

  const { data } = useQuery(GET_CANDIDATE, {
    pollInterval: 10000
  });

  useEffect(() => {
    async function fetchEvent () {
      let members: any[] = []
      let nonMembers: any[] = []
      let candi: any[] = []

      const events = await getEvent('ChangedSlotMaximum')

      const checkSlot = events.filter((event: any) => event.eventName === 'ChangedSlotMaximum')
      const slotNumber = checkSlot[0] ? checkSlot[0].data.slotMax : 3
      
      if (data && memberAddresses) {
        const candidates = await Promise.all(
          data.candidates.map(async (obj: any, index: number) => {
            const member = memberAddresses.find((member: any) => 
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
        if (memberAddresses.find((member: any) => member.member === ZERO_ADDRESS)) {
          const zero = memberAddresses.find((member: any) => member.member === ZERO_ADDRESS)
          members.push({
            candidateContract: zero.member,
            slot: zero.slot,
          })
        }

        if (slotNumber > members.length) {
          for (let i = 0 ; i< slotNumber - members.length ; i++ ) {
            members.push('Empty')
          }
        }
        //@ts-ignore
        setNonMemberList(nonMembers)
        //@ts-ignore
        setMemberList(members)
        //@ts-ignore
        setCandidate(candi)
      }
    }

    fetchEvent()
    
  }, [data, account, memberAddresses])
  return { candidate, memberList, nonMemberList, isCandidate };
}