import { Flex, useTheme } from "@chakra-ui/react";
import { StatsCardRow } from "./StatsCardRow";

export const CommitteeStatsCard = ({agendaList}: any) => {
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE;
  const executed = agendaList.filter((agenda:any) => agenda.executed === true)
  const denied = agendaList.filter((agenda:any) => agenda.result === 2)
  
  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.resourceCard()}
      flexDir={'column'}
      h={'140px'}
      justifyContent={'space-between'}
    >
      <StatsCardRow 
        title={'Total Agendas'}
        value={agendaList.length}
      />
      <StatsCardRow 
        title={'Total Executed Agendas'}
        value={executed.length}
      />
      <StatsCardRow 
        title={'Total Denied Agendas'}
        value={denied.length}
      />
    </Flex>
  )
}