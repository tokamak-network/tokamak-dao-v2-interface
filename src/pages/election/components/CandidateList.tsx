import { Flex, useTheme, Text, Button } from '@chakra-ui/react';
import { MemberCard } from "./MemberCard"
import { SubText } from './SubText';
import { convertNumber } from '@/components/number';
import { commify } from 'ethers/lib/utils';
import { CardTitle } from 'common/card/CardTitle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

type CandidateListProp = {
  memberList: any
  nonMemberList: any
  isCandidate: boolean
}

export const CandidateList = (args: CandidateListProp) => {
  const { memberList, nonMemberList, isCandidate } = args
  const { CARD_STYLE } = useTheme()
  const router = useRouter()
  const { account, library } = useWeb3React();
  const [ myCandidate, setMyCandidate ] = useState();

  useEffect(() => {
    if (account) {
      const myCandi = nonMemberList.find((member: any) => member.candidate.toLowerCase() === account.toLowerCase())
      myCandi ? setMyCandidate(myCandi) : setMyCandidate(undefined)
    }
  }, [account, myCandidate])

  return (
    <Flex
      w={'786px'}
      flexDir={'column'}
    >
      <CardTitle 
        name={'DAO Committee Members'}
        mb={'35px'}
      />
      {
        memberList && memberList.length > 0 ? 
        memberList.map((member: any, i: any) => {
          return (
            <MemberCard 
              data={member}
              isCandidate={isCandidate}
              myCandidate={myCandidate}
              index={i}
            />  
          )
        }) : ''
      }
      <Flex
        flexDir={'column'}
      >
        <CardTitle 
          name={'Other DAO Candidates'}
          mb={'35px'}
          mt={'10px'}
        />
        {
          nonMemberList ?
          nonMemberList.map((nonMember: any, i: any) => {
            const { name, candidateContract, stakedAmount } = nonMember;
            const voted = convertNumber({
              amount: stakedAmount,
              type: 'ray',
              localeString: true
            })
            const comma = voted ? voted : '0.00'
            return (
              <Flex
                {...CARD_STYLE.mainTheme()}
                {...CARD_STYLE.nonMemberCard()}
                flexDir={'row'}
                alignItems={'center'}
              >
                <Flex w={'160px'}>
                  <SubText 
                    blue={'Total Staked'}
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
                  cursor={'pointer'}
                  onClick={() => {
                    router.push({
                      pathname: '/election/[l2address]',
                      query: { 
                        l2address: candidateContract,
                      }
                    })
                  }}
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
