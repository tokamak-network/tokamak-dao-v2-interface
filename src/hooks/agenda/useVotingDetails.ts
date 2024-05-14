import {  getAgendaVotes } from "@/api";
import { useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import Web3 from 'web3'
import { INFURA_API } from '../../constants/index';

export function useVotingDetails() {
  const [votingDetail, setVotingDetail] = useState<any[]>([]);
  const { library } = useWeb3React();

  useEffect(() => {
    const votingDetails: any[] = [];

    async function fetch () {
      const web3 = library ? library : INFURA_API ? new Web3(new Web3.providers.HttpProvider(INFURA_API)) : ''

      const votes = await getAgendaVotes();
      try {
        votes.forEach(async function (vote: any) {
          const block = await web3.getBlock(vote.blockNumber);
          votingDetails.push({
            agendaid: vote.agendaid,
            timestamp: block.timestamp,
            chainId: vote.chainId,
            comment: vote.comment,
            hasVoted: vote.hasVoted,
            transactionHash: vote.transactionHash,
            vote: vote.vote,
            voter: vote.voter,
          });
        });
       setVotingDetail(votingDetails)

      } catch (e) {
        console.log(e)
      }
    }
    fetch()
  }, [])

  return votingDetail
}