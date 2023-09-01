import { Flex, Text } from '@chakra-ui/react';

type SubTextProp = {
  value: number | string | undefined,
  title: string,
  type?: string,
}

export const SubText = (args: SubTextProp) => {
  const { type, title, value } = args;
  return (
    <Flex
      flexDir={'row'}
      fontSize={'12px'}
      justifyContent={'center'}
      alignItems={'center'}
      fontWeight={'500'}
    >
      <Text
        color={'#3e495c'}
        mr={'5px'}
      >
        {title}
      </Text>
      <Text
        color={type ? '#2a72e5' : '#f7981c'}
        // mr={type ? '5px' : ''}
      >
        {value}
      </Text>

    </Flex>
  )
}