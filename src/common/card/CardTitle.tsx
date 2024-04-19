import { Text, Flex } from '@chakra-ui/react';
import BasicTooltip from "../tooltip"

type CardTitleProp = {
  name: string
  mt?: number | string
  mb?: number | string
  w?: string
}


export const CardTitle = (args: CardTitleProp) => {
  const { name, mt, mb } = args

  return (
    <Flex
      h={'32px'}
      fontSize={'24px'}
      color={'#3e495c'}
      mb={mb || 0}
      textAlign={'left'}
      mt={mt || 0}
      w={'780px'}
      alignItems='center'
    >
      <Text mr={'6px'}>
        {name}
      </Text>
      <BasicTooltip 
        label={name === 'DAO Committee Members' ? 'members' : 'others'}
        placement={'right'}
      />
    </Flex>
  )
}