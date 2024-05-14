import { Link, useTheme } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import ICON from 'assets/images/resources-icon.svg'
// import resource from 'assets/images/resource-ic'
import Image from 'next/image';
import { ResourceCardLink } from './ResourceCardLink';

export const ResourceCard = () => {
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE;

  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.resourceCard()}
      h={'100px'}
      flexDir={'column'}
    >
      <ResourceCardLink 
        title={'DAO User Guide'}
        link={'https://docs.tokamak.network/home/service-guide/staking-and-dao/tokamak-network-dao'}
      />
      <ResourceCardLink 
        title={'FAQs'}
        link={'https://www.notion.so/onther/FAQ-27a7fcfaed5047b895169930b5912cab'}
      />

    </Flex>
  )
}