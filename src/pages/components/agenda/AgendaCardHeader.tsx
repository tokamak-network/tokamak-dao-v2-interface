import { Flex } from "@chakra-ui/react"
import { SubText } from "./SubText"

type CardHeaderProp = {
  index: number | string
  type?: string
}

export const AgendaCardHeader = (args: CardHeaderProp) => {
  const { type, index } = args;

  return (
    <Flex
      flexDir={'row'}
      h={'11px'}
      alignItems={'center'}
      w={'100%'}
      justifyContent={'space-between'}
    >
      <SubText 
        title={'Agenda'}
        value={index}
      />
      <SubText 
        title={'TYPE'}
        value={'A'}
      />
    </Flex>
  )
}