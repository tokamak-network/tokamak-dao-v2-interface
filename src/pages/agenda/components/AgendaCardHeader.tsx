import { Flex } from "@chakra-ui/react"
import { SubText } from "./SubText"

type CardHeaderProp = {
  index: number | string
  type?: string
}

export const AgendaCardHeader = (args: CardHeaderProp) => {
  const { type, index } = args;
  const color = type === 'A' ? 'A' : ''
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
        type={color}
      />
      <SubText 
        title={'TYPE'}
        value={type}
        type={color}
      />
    </Flex>
  )
}