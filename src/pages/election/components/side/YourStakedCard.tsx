import { Flex } from "@chakra-ui/react"
import { Link, useTheme } from '@chakra-ui/react';
import { trimAddress } from '../../../../utils/trimAddress';

export const YourStakedCard = (args: any) => {
  const { account, stakedAmount } = args
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE;

  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.resourceCard()}
      h={'65px'}
      justifyContent={'space-between'}
    >
      <Flex
        fontSize={'15px'}
        color={'#2a72e5'}
      >
        {trimAddress({
          address: account,
          firstChar: 7,
          lastChar: 4,
          dots:'...'
        })}
      </Flex>
      <Flex
        fontSize={'16px'}
      >
        {stakedAmount} TON
      </Flex>
    </Flex>
  )
}