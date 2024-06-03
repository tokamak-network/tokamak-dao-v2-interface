import { Flex, Text } from "@chakra-ui/react"
import { trimAddress } from '../../../../utils/trimAddress';

type StatsCardRowProps = {
  title: string,
  value: number | string,
  type?: string
}

export const StatsCardRow = (args: StatsCardRowProps) => {
  const { title, value, type } = args

  const val = type === 'address' 
    ? trimAddress({
      address: value.toString(),
      firstChar: 7,
      lastChar: 4,
      dots: '...'
    }) : value 
  return (
    <Flex 
      flexDir={'row'}
      fontSize={'15px'}
      fontWeight={'normal'}
      w={'100%'}
      justifyContent={'space-between'}
      // mb={'15px'}
    >
      <Text color={'#86929d'}>
        {title}
      </Text>
      <Text color={'#2a72e5'}>
        {val}
      </Text>
    </Flex>
  )
}