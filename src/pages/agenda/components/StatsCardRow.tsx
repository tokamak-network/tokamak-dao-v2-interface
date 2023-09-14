import { Flex, Text } from "@chakra-ui/react"

type StatsCardRowProps = {
  title: string,
  value: number
}

export const StatsCardRow = (args: StatsCardRowProps) => {
  const { title, value } = args
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
        {value}
      </Text>
    </Flex>
  )
}