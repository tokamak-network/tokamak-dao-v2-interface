import { convertNumber } from "@/components/number";
import { Flex } from "@chakra-ui/react"
// import ElectionDetailRow from './components/ElectionDetailRow'
import { ElectionDetailRow } from './components/ElectionDetailRow';
import { commify } from 'ethers/lib/utils';

type ElectionDetailProp = {
  data: any;
}

export const ElectionDetail = (args: ElectionDetailProp) => {
  const { data } = args;
  const {
    name,
    candidateContract,
    operator,
    updateCoinageTotalString
  } = data

  const voted = convertNumber({
    amount: updateCoinageTotalString,
    type: 'ray'
  })
  const comma = voted ? commify(voted) : '0.00'
  return (
    <Flex
      w={'726px'}
      fontSize={'14px'}
      flexDir={'column'}
    >
      {/* {
        data ? 
        <Flex> */}
          <ElectionDetailRow
            title={'Name'}
            content={name}
            type={'string'}
          />
          <ElectionDetailRow
            title={'Description'}
            content={''}
            type={'string'}
          />
          <ElectionDetailRow
            title={'Candidate Address'}
            content={operator}
            type={'address'}
          />
          <ElectionDetailRow
            title={'Candidate Contract'}
            content={candidateContract}
            type={'address'}
          />
          <ElectionDetailRow
            title={'Total Vote'}
            content={comma}
            type={'TON'}
          />
          <ElectionDetailRow
            title={'Last Reward Update'}
            content={''}
            type={'time'}
          />
          <Flex h={'40px'}/>
          <ElectionDetailRow
            title={'My Vote'}
            content={''}
            type={'TON'}
          />
          <ElectionDetailRow
            title={'Revotable'}
            content={''}
            type={'TON'}
          />
          <ElectionDetailRow
            title={'Withdrawable'}
            content={''}
            type={'TON'}
          />
          <ElectionDetailRow
            title={'Not Withdrawable'}
            content={''}
            type={'TON'}
          />
        {/* </Flex> */}
      {/* //   :''
      // } */}
    </Flex>
  )
}