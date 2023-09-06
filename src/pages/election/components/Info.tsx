import { Flex } from "@chakra-ui/react"
import { InfoRow } from './InfoRow';

export const CandidateInfo = (args: any) => {
  console.log(args)
  const {
    name,
    candidate,
    layer2,
    updateCoinageTotalString,
    updateCoinageTime
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
        value={layer2}
        type={'address'}
      />
      <InfoRow 
        title={'Total Vote'}
        description={''}
        value={updateCoinageTotalString}
        type={'TON'}
      />
      <InfoRow 
        title={'Last Reward Update'}
        description={''}
        value={updateCoinageTime}
        type={'date'}
      />
      <Flex h={'20px'} />
      <InfoRow 
        title={'My Vote'}
        description={''}
        value={'0.00'}
        type={'TON'}
      />
      <InfoRow 
        title={'Revotable'}
        description={''}
        value={'0.00'}
        type={'TON'}
      />
      <InfoRow 
        title={'Withdrawable'}
        description={''}
        value={'0.00'}
        type={'TON'}
      />
      <InfoRow 
        title={'Not Withdrawable'}
        description={''}
        value={'0.00'}
        type={'TON'}
      />
    </Flex>
  )
}