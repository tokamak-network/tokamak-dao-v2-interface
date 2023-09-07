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
  console.log(candidate)
  const voters = useVoters(candidate.layer2)

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
      <Flex
        color={'#3e495c'}
        fontSize={'16px'}
        fontWeight={500}
        mt={'25px'}
        mb={'7px'}
      >
        Review
      </Flex>
      <VoterGraphSection 
        columns={columns}
        data={voters}
        totalVote={candidate.updateCoinageTotalString}
      />
      <Flex
        flexDir={'column'}
      >
        <Flex
          fontSize={'16px'}
          fontWeight={500}
          mb={'15px'}
        >
          Voting Stats
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
            Total Vote
          </Flex>
          <Flex
            color={'#3e495c'}
          >
            {`${convertNumber({
              amount: candidate.updateCoinageTotalString,
              type: 'ray'
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
            Unique Voters
          </Flex>
          <Flex
            color={'#3e495c'}
          >
            {voters.length}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}