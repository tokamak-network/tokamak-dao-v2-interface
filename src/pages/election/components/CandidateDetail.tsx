
import { Flex } from "@chakra-ui/react"
import { CandidateInfo } from "./Info"
import { useState } from 'react';
import { VoteBreakDown } from './VoteBreakdown';

type CandidateDetailTypeProps = {
  candidate: any
}

export const CandidateDetail = (args: CandidateDetailTypeProps) => {
  const { candidate } = args
  const [ tab, setTab ] = useState('detail')
  
  const {
    name,
    kind,
    operator,
    candidateContract
  } = candidate

  return (
    <Flex>
      <Flex
        w={'786px'}
        // h={'869px'}
        p={'25px 29px 30px 30px'}
        borderRadius={'10px'}
        boxShadow={'0 1px 1px 0 rbga(96, 97, 112, 0.16)'}
        bgColor={'#fff'}
        flexDir={'column'}
      >
        <Flex
          fontSize={'20px'}
          mt={'20px'}
          mb={'30px'}
          flexDir={'row'}
          alignItems={'end'}
        >
          <Flex
            fontWeight={500}
          >
            {name}
          </Flex>
          <Flex
            mb={'4px'}
            ml={'3px'}
            fontSize={'12px'}
          >
            - {kind}
          </Flex>
        </Flex>
        <Flex
          flexDir={'row'}
          justifyContent={'start'}
          fontSize={'14px'}
          fontWeight={500}
        >
          <Flex 
            mr={'35px'}
            color = {tab === 'detail' ? '#2a72e5' : '#86929d' }
            cursor={'pointer'}
            onClick={() => { setTab('detail')}}
          >
            Details
          </Flex>
          <Flex 
            mr={'35px'}
            color = {tab === 'breakdown' ? '#2a72e5' : '#86929d' }
            cursor={'pointer'}
            onClick={() => { setTab('breakdown')}}
          >
            Vote Breakdown
          </Flex>
          <Flex
            color = {tab === 'vote' ? '#2a72e5' : '#86929d' }
            cursor={'pointer'}
            onClick={() => { setTab('vote')}}
          >
            Vote/Unvote
          </Flex>
        </Flex>
        <Flex w={'726px'} h={'1px'} bgColor={'#dfe4ee'} my={'10px'} />
        {
          tab === 'detail' ?
          <>
            <CandidateInfo 
              candidate={candidate}
            />
          </> :
          tab === 'breakdown' ?
          <>
            <VoteBreakDown 
              candidate={candidate}
            />
          </> :
          <>
          </>
        } 
        
      </Flex>
    </Flex>
  )
}