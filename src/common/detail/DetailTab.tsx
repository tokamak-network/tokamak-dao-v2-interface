import { Flex } from "@chakra-ui/react"

type DetailTabProp = {
  onClick: any
  tab: string
  title: string
}

export const DetailTab = (args: DetailTabProp) => {
  const { onClick, tab, title } = args;
  return (
    <Flex
      color={tab === title ? '#2a72e5' : '#86929d' }
      cursor={'pointer'}
      mr={'35px'}
      onClick={()=>onClick(title)}
    >
      {title}
    </Flex>
  )
}