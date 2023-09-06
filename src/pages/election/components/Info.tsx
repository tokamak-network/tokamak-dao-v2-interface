import { Flex } from "@chakra-ui/react"
import { InfoRow } from './InfoRow';

export const CandidateInfo = () => {

  return (
    <Flex
      flexDir={'column'}
    >
      <InfoRow 
        title={'Name'}
        description={''}
        value={'0xabcd'}
        type={'address'}
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
        value={'0xabcd'}
        type={'address'}
      />
      <InfoRow 
        title={'Candidate Contract'}
        description={''}
        value={'0xabcd'}
        type={'address'}
      />
      <InfoRow 
        title={'Total Vote'}
        description={''}
        value={'0.00'}
        type={'TON'}
      />
      <InfoRow 
        title={'Last Reward Update'}
        description={''}
        value={'0000000'}
        type={'date'}
      />
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