import { Flex, useTheme, Text } from '@chakra-ui/react';
import { MemberCard } from "./MemberCard"
import { useEvent } from "@/hooks/election/useEvent"
import { SubText } from './SubText';
import { convertNumber } from '@/components/number';
import { commify } from 'ethers/lib/utils';
import { CardTitle } from './CardTitle';

export const CandidateList = () => {
  const { slot, memberList, nonMemberList } = useEvent()
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE;

  return (
    <Flex
      w={'786px'}
      mt={'35px'}
      flexDir={'column'}
    >
      {
        memberList ? 
        memberList.map((member: any, i) => {
          return (
            <MemberCard 
              data={member}
              index={i}
            />  
          )
        }) : ''
      }
      <Flex
        flexDir={'column'}
      >
        <CardTitle 
          name={'Candidates'}
          mb={'35px'}
          mt={'10px'}
        />
        {
          nonMemberList ?
          nonMemberList.map((nonMember: any, i) => {
            const { candidate, memberJoinedTime, name, candidateContract, updateCoinageTotalString } = nonMember;
            const voted = convertNumber({
              amount: updateCoinageTotalString,
              type: 'ray'
            })
            const comma = voted ? commify(voted) : '0.00'
            return (
              <Flex
                {...CARD_STYLE.mainTheme()}
                {...CARD_STYLE.nonMemberCard()}
                flexDir={'row'}
                alignItems={'center'}
              >
                <Flex w={'160px'}>
                  <SubText 
                    blue={'# of Votes'}
                    black={`${comma} TON`}
                  />
                </Flex>
                <Flex
                  w={'495px'}
                  fontSize={'16px'}
                  color={'#3e495c'}
                >
                  {name}
                </Flex>
                <Flex
                  fontSize={'13px'}
                  color={'#2a72e5'}
                >
                  View Details
                </Flex>
              </Flex>
            )
          }) : ''
        }
      </Flex>
    </Flex>
  )
}