import { Flex, Text } from '@chakra-ui/react';

type SubTextProp = {
  blue: string,
  black: string,
  size?: string,
}

export const SubText = (args: SubTextProp) => {
  const { blue, black, size } = args;
  return (
    <Flex
      flexDir={size ? 'row-reverse' : 'row'}
      fontSize={size ? size : '9px'}
      justifyContent={'center'}
      alignItems={'center'}
      fontWeight={size ? 500 : 'normal'}
    >
      <Text
        color={'#2a72e5'}
        mr={'5px'}
      >
        {blue}
      </Text>
      <Text
        color={'#3e495c'}
        mr={size ? '5px' : ''}
      >
        {black}
      </Text>

    </Flex>
  )
}