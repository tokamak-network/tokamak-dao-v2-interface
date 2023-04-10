import { Flex, useTheme } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ElectionDetailHeader } from '../components/election/details/ElectionDetailHeader';
import { CardTitle } from '@/common/card/CardTitle';
import { ResourceCard } from '@/common/card/ResourceCard';
import NextButton from '../../common/button/NextButton';
import { useState } from 'react';
import { ElectionDetail } from '../components/election/details/ElectionDetail';
import { useCandidate } from '../../hooks/election/useCandidate';
import { DetailTab } from '@/common/detail/DetailTab';
import { VoteBreakdown } from '../components/election/details/VoteBreakdown copy';
import { Voting } from '../components/election/details/Voting';

type ElectionDetailsProp = {

}

function ElectionDetails (args: ElectionDetailsProp) {
  const {} = args;
  const { CARD_STYLE } = useTheme()
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const { candidate, memberList } = useCandidate();
  const [tab, setTab] = useState('Detail')

  
  const operatorIndex = candidate.findIndex((candidate: any) => candidate.candidateContract === router.query.candidateContract)
  const currentCandidate = candidate[operatorIndex]
  const memberSlot = memberList.findIndex((member: any) => member.candidateContract === currentCandidate.candidateContract)
  console.log(currentCandidate)
  // const { name, kind, updateCoinageTotalString, memberJoinedTime } = currentCandidate
  const onClick = (title: string) => {
    setTab(title)
  }
  
  return (
    <Flex minH={'88vh'}>
      {currentCandidate ?
        <Flex 
        flexDir={'row'}
        minW={'1200px'}
        w={'100%'}
        mt={'50px'}
        justifyContent={'center'}
        alignItems={'start'}
      >
        <Flex
          flexDir={'column'}
        >
          <Flex flexDir={'row'} mb={'12px'} justifyContent={'space-between'}>
            <NextButton 
              // setCurrentPage={setCurrentPage(1)}
              // currentPage={1}
              // pageSize={3}
              title={'BACK TO ALL CANDIDATES'}
            />
            <Flex>
              <NextButton 
                title={'PREVIOUS CANDIDATE'}
              />
              <NextButton 
                title={'NEXT CANDIDATE'}
              />
            </Flex>
          </Flex>
          <Flex
            {...CARD_STYLE.mainTheme()}
            {...CARD_STYLE.detailCard()}
            flexDir={'column'}
          >
            <ElectionDetailHeader
              memberSlot={memberSlot}
              name={currentCandidate.name}
              memberJoinedTime={currentCandidate.memberJoinedTime}
              kind={currentCandidate.kind}
            />
            <Flex
              fontSize={'14px'}
              flexDir={'row'}
              mb={'10px'}
            >
              <DetailTab 
                onClick={onClick}
                tab={tab}
                title={'Detail'}
              />
              <DetailTab 
                onClick={onClick}
                tab={tab}
                title={'Vote Breakdown'}
              />
              <DetailTab 
                onClick={onClick}
                tab={tab}
                title={'Vote/Unvote'}
              />
            </Flex>
            <Flex 
              w={'726px'}
              h={'1px'}
              mb={'15px'}
              backgroundColor={'#dfe4ee'}
            />
            {tab === 'Detail' 
              ? <ElectionDetail 
                  data={currentCandidate}
                />
              : tab === 'Vote Breakdown'
              ? <VoteBreakdown />
              : <Voting />
            }
            
          </Flex>
        </Flex>
          <Flex 
            w={'378px'}
            ml={'30px'}
            flexDir={'column'}
          >
          <Flex flexDir={'column'}>
            <CardTitle 
              name={'Resources'}
              mb={'12px'}
            />
            <ResourceCard />
          </Flex>
        </Flex>
      </Flex>
        : ''}
    </Flex>
  )
}

export default ElectionDetails