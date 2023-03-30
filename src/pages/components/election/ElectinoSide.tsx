import { Flex } from "@chakra-ui/react"
import { CardTitle } from "./CardTitle"

export const ElectionSide = () => {
  return (
    <Flex 
      w={'378px'}
      ml={'30px'}
    >
      <CardTitle 
        name={'Rank'}
      />
    </Flex>
  )
}