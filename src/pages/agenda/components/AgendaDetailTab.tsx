import { AGENDA_DETAIL_TAB } from "@/constants"
import { Flex } from "@chakra-ui/react"

type AgendaDetailTabProps = {
  color: string,
  setTab: any,
  tab: string,
}

export const AgendaDetailTab = (args: AgendaDetailTabProps) => {
  const {
    color,
    setTab,
    tab
  } = args
 
  return (
    <Flex
      flexDir={'row'}
      justifyContent={'start'}
      fontSize={'14px'}
      fontWeight={500}
    >
      {
        AGENDA_DETAIL_TAB.map((tabContent: any) => {
          return (
            <Flex 
              mr={'35px'}
              color = {tab === tabContent.id ? `${color}` : '#86929d' }
              cursor={'pointer'}
              onClick={() => { setTab(tabContent.id)}}
            >
              {tabContent.name}
            </Flex>
          )
        })
      }
    </Flex>
  )
}