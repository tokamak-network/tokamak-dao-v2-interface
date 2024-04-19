import { Flex } from "@chakra-ui/react"
import { convertNumber } from '../../../utils/number';
import { trimAddress } from '../../../utils/trimAddress';

type GuageGraphProps = {
  voter: string,
  votingAmount: string,
  totalVote: string,
}

export const GuageGraph = (args: GuageGraphProps) => {
  const {
    voter,
    votingAmount,
    totalVote
  } = args
  const total = convertNumber({
    amount: totalVote,
    type: 'ray'
  })
  const voting = convertNumber({
    amount: votingAmount,
    type: 'ray'
  })
  const percentage = Number(voting) / Number(total) * 100
  return (
    <Flex
      flexDir={'column'}
      w={'726px'}
    >
      <Flex
        flexDir={'row'}
        w={'100%'}
        justifyContent={'space-between'}
        fontSize={'13px'}
        fontWeight={500}
        color={'#818992'}
      >
        <Flex
          color={'#2a72e5'}
        >
          {trimAddress({
            address: voter,
            firstChar: 7,
            lastChar: 4,
            dots:'...'
          })}
        </Flex>
        <Flex>
          {`${percentage.toLocaleString(undefined, {maximumFractionDigits: 2})} % (${Number(voting).toLocaleString(undefined, { maximumFractionDigits: 2 })} TON)`}
        </Flex>
      </Flex>
      <Flex
        w={'726px'}
        h={'15px'}
        bgColor={'#dfe4ee'}
        mt={'7px'}
        mb={'15px'}
        borderRadius={'100px'}
      >
        <Flex
          h={'100%'}
          w={`${percentage}%`}
          bgColor={'#1f8efa'}
          borderRadius={'100px'}
          color={'#fff'}
          textAlign={'center'}
          fontSize={'10px'}
          alignItems={'center'}
          justifyContent={'center'}
          overflowX={'visible'}
        >
          {/* {`${percentage.toLocaleString(undefined, {maximumFractionDigits: 2})} %`} */}
        </Flex>
      </Flex>
    </Flex>
  )
}