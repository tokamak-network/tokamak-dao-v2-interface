import { Flex, Link, Text } from "@chakra-ui/react"

type ElectionDetailRowProp = {
  title: string,
  content: string | number
  type: string
}

export const ElectionDetailRow = (args: ElectionDetailRowProp) => {
  const { title, content, type } = args;
  return (
    <Flex
      flexDir={'row'}
      justifyContent={'space-between'}
      w={'100%'}
      h={'32px'}
      mb={'5px'}
    >
      <Text
        fontSize={'14px'}
        color={'#3e495c'}
        textAlign={'left'}
      >
        {title}
      </Text>
      <Flex
        fontSize={'13px'}
        color={'#818992'}
      >
        {
          type === 'string'
          ? <Text>
              {content}
            </Text>
          : type === 'TON'
          ? <Text>
              {content ? content : '0.00'} TON
            </Text>
          : type === 'address'
          ? <Link
              href={`https://etherscan.io/address/${content}`}
            >
              {content}
            </Link>
          : ''
        }
        
      </Flex>
    </Flex>
  )
}