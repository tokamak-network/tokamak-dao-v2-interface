import { Flex, useTheme } from "@chakra-ui/react";
import { StatsCardRow } from "./StatsCardRow";


export const YourStatCard = (args: any) => {
  const { activityReward, numAgendas } = args
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE;
  
  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.resourceCard()}
      flexDir={'column'}
      h={'99px'}
      justifyContent={'space-between'}
      fontWeight={'500'}
      fontSize={'20px'}
      mb={'30px'}
    >
      <StatsCardRow 
        title={'Claimable TON'}
        value={`${activityReward} TON`}
      />
      <StatsCardRow 
        title={'# of Agendas'}
        value={numAgendas}
      />
      
    </Flex>
  )
}