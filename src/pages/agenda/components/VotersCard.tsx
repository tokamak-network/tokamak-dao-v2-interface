import { Flex, useTheme } from "@chakra-ui/react";
import { StatsCardRow } from "./StatsCardRow";

export const VotersCard = ({
  currentAgenda,
  voteResult
}: any) => {
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE;
  
  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.resourceCard()}
      flexDir={'column'}
      h={'140px'}
      justifyContent={'space-between'}
    >
      {
        typeof voteResult === 'string' ?
          <Flex 
            justifyContent={'center'}
            alignItems={'center'}
            h={'100%'}
            fontSize={'30px'}
            fontWeight={'600'}
          >
            {voteResult}
          </Flex>
        : voteResult.map((voteRes: any, index: number) => {
          return (
            <StatsCardRow 
              title={voteRes.result}
              value={voteRes.voter}
              type={'address'}
              key={index}
            />

          )
        })
      }
      
    </Flex>
  )
}