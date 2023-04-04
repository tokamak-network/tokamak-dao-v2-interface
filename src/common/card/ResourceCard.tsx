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
      flexDir={'column'}
    >
      <ResourceCardLink 
        title={'DAO User Guide'}
        link={'https://docs.google.com/presentation/d/1d1YrughbLXeQafNmWrjjz2dl9IjREe_bNIckQIMFLo8/edit?usp=sharing'}
      />
      <ResourceCardLink 
        title={'DAO Discussion (Discrod)'}
        link={'https://discord.gg/SZw2WSR'}
      />
      <ResourceCardLink 
        title={'Tokamak Network'}
        link={'https://tokamak.network'}
      />
      <ResourceCardLink 
        title={'Candidate Registration'}
        link={'https://docs.tokamak.network/docs/en/guides/ton-staking/how-to-set-candidate'}
      />
      <ResourceCardLink 
        title={'Governance FAQs'}
        link={'https://www.notion.so/onther/FAQ-27a7fcfaed5047b895169930b5912cab'}
      />

    </Flex>
  )
}