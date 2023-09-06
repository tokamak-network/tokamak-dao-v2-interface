import { Flex } from "@chakra-ui/react"


type InfoRowTypeProps = {
  title: string,
  description: string,
  value: string,
  type: string
}

export const InfoRow = (args: InfoRowTypeProps) => {
  const {
    description,
    title,
    value,
    type
  } = args
  return (
    <Flex
      flexDir={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'726px'}
      h={'32px'}
      mb={'7px'}
    >
      <Flex
        flexDir={'row'}
        fontSize={'14px'}
        fontWeight={'normal'}
        color={'#3e495c'}
      >
        {title}
      </Flex>
      <Flex
        fontSize={'13px'}
        fontWeight={'normal'}
        color={'#818992'}
      >
        {value}
      </Flex>

    </Flex>
  )
}