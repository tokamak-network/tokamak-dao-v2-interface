import { getVotersByCandidate } from "@/api"
import { Flex } from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { useMemo } from "react";
import { useVoters } from '../../../hooks/election/useVoters';
import { VoterGraphSection } from "./VoteGraphSection";
import { convertNumber } from '../../../utils/number';

type VoteBreakDownTypeProps = {
  candidate: any
}

export const VoteBreakDown = (args: VoteBreakDownTypeProps) => {
  const { candidate } = args
  const {
    stakedUserList,
    stakedAmount
  } = candidate
  const voters = useVoters(candidate.candidateContract)

  const columns = useMemo(
    () => [
      {
        Header: 'voter',
        accessor: 'voter',
      }
    ], [],
  );

  return (
    <Flex
      flexDir={'column'}
    >
      <VoterGraphSection 
        columns={columns}
        data={stakedUserList}
        totalVote={stakedAmount}
      />
      <Flex
        flexDir={'column'}
      >
        <Flex
          fontSize={'16px'}
          fontWeight={500}
          mb={'15px'}
        >
          Summary
        </Flex>
        <Flex
          flexDir={'row'}
          w={'100%'}
          justifyContent={'space-between'}
          fontSize={'14px'}
          fontWeight={'normal'}
          mb={'15px'}
        >
          <Flex
            color={'#818992'}
          >
            Total Staked
          </Flex>
          <Flex
            color={'#3e495c'}
          >
            {`${convertNumber({
              amount: candidate.stakedAmount,
              type: 'ray',
              localeString: true
            })} TON`}
          </Flex>
        </Flex>
        <Flex
          flexDir={'row'}
          w={'100%'}
          justifyContent={'space-between'}
          fontSize={'14px'}
          fontWeight={'normal'}
          mb={'15px'}
        >
          <Flex
            color={'#818992'}
          >
            Number of Stakers
          </Flex>
          <Flex
            color={'#3e495c'}
          >
            {stakedUserList.length}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}