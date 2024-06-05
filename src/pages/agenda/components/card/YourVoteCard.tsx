import { Flex, useTheme } from "@chakra-ui/react";
import { StatsCardRow } from "./StatsCardRow";
import BasicButton from "@/common/button/BasicButton";
import { GuageGraph } from "@/pages/election/components/GuageGraph";

export const YourVoteCard = (args: any) => {
  const {
    voteRates
  } = args
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
      <Flex fontSize={'13px'}>
        {`${voteRates}% of Agenda is voted`}
      </Flex>
      <Flex
        w={'338px'}
        h={'15px'}
        bgColor={'#dfe4ee'}
        mt={'10px'}
        mb={'5px'}
        borderRadius={'100px'}
      >
        <Flex
          h={'100%'}
          w={`${voteRates}%`}
          bgColor={'#1f8efa'}
          borderRadius={'100px'}
          color={'#fff'}
          textAlign={'center'}
          fontSize={'10px'}
          alignItems={'center'}
          justifyContent={'center'}
          overflowX={'visible'}
        />
      </Flex>
      
    </Flex>
  )
}