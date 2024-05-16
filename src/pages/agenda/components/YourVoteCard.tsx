import { Flex, useTheme } from "@chakra-ui/react";
import { StatsCardRow } from "./StatsCardRow";
import { onChainEffect } from '../../../types/index';
import BasicButton from "@/common/button/BasicButton";

export const YourVoteCard = ({
  agenda
}: any) => {
  console.log(agenda)
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE;
  
  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.resourceCard()}
      flexDir={'column'}
      h={'150px'}
      justifyContent={'space-between'}
      fontWeight={'500'}
      fontSize={'20px'}
      mb={'30px'}
    >
      {
        agenda && agenda.onChainEffects ?
        <Flex flexDir={'column'}>
          <Flex mb={'10px'}>
            {agenda.onChainEffects[0].title} 
          </Flex>
          <BasicButton 
            type={'vote'}
            name={'Vote for this agenda'}
            w={'100%'}
            h={'45px'}
          />
        </Flex> : ''
      }
      
    </Flex>
  )
}