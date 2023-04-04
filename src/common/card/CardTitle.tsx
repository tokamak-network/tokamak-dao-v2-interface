import { Text } from "@chakra-ui/react"

type CardTitleProp = {
  name: string
  mt?: number | string
  mb?: number | string
  w?: string
}


export const CardTitle = (args: CardTitleProp) => {
  const { name, mt, mb } = args

  return (
    <Text
      h={'32px'}
      fontSize={'24px'}
      color={'#3e495c'}
      mb={mb || 0}
      textAlign={'left'}
      mt={mt || 0}
      w={'780px'}
    >
      {name}
    </Text>
  )
}