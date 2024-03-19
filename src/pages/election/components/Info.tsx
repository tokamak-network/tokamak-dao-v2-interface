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
  const infoContents = [
    {
      title: 'Name',
      description: '',
      value: name,
      type: 'text'
    },
    {
      title: 'Description',
      description: '',
      value: '',
      type: 'text'
    },
    {
      title: 'Candidate Address',
      description: '',
      value: candidate,
      type: 'address'
    },
    {
      title: 'Candidate Contract',
      description: '',
      value: candidateContract,
      type: 'address'
    },
    {
      title: 'Total Staked',
      description: '',
      value: stakedAmount,
      type: 'TON'
    },
    {
      title: 'Last Reward Update',
      description: '',
      value: asCommit && asCommit[0] ? (+asCommit[0].timestamp) * 1000 : '',
      type: 'date'
    },
  ]
  return (
    <Flex
      flexDir={'column'}
    >
      {
        infoContents.map((infoContent: any) => {
          const {
            title,
            description,
            value,
            type
          } = infoContent
          return (
            <InfoRow 
              title={title}
              description={description}
              value={value}
              type={type}
            />      
          )
        })
      }
      
      

      <Flex mt={'20px'} fontFamily={'Roboto'} fontSize={'14px'}>
        The three DAO candidates with the highest amount of staked TON are eligible to become DAO committee members and can vote on DAO agendas. Users can delegate their staking power by staking their TON (or WTON) to any DAO candidates. In return, they can earn TON staking rewards.
      </Flex>
      
    </Flex>
  )
}