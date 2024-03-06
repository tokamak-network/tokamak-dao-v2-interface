import { Flex } from "@chakra-ui/react"
import { InfoRow } from './InfoRow';

export const CandidateInfo = (args: any) => {
  const {
    name,
    candidate,
    candidateContract,
    stakedAmount,
    asCommit
  } = args.candidate
  return (
    <Flex
      flexDir={'column'}
    >
      <InfoRow 
        title={'Name'}
        description={''}
        value={name}
        type={'text'}
      />
      <InfoRow 
        title={'Description'}
        description={''}
        value={''}
        type={'text'}
      />
      <InfoRow 
        title={'Candidate Address'}
        description={''}
        value={candidate}
        type={'address'}
      />
      <InfoRow 
        title={'Candidate Contract'}
        description={''}
        value={candidateContract}
        type={'address'}
      />
      <InfoRow 
        title={'Total Staked'}
        description={''}
        value={stakedAmount}
        type={'TON'}
      />
      <InfoRow 
        title={'Last Reward Update'}
        description={''}
        value={asCommit ? (+asCommit[0].timestamp) * 1000 : ''}
        type={'date'}
      />

      <Flex mt={'20px'} fontFamily={'Roboto'} fontSize={'14px'}>
        The three DAO candidates with the highest amount of staked TON are eligible to become DAO committee members and can vote on DAO agendas. Users can delegate their staking power by staking their TON (or WTON) to any DAO candidates. In return, they can earn TON staking rewards.
      </Flex>
      
    </Flex>
  )
}