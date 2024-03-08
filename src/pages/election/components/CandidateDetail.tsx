
import { Flex } from "@chakra-ui/react"
import { CandidateInfo } from "./Info"
import { useState } from 'react';
import { VoteBreakDown } from './VoteBreakdown';
import BasicButton from "@/common/button/BasicButton";
import { useWeb3React } from '@web3-react/core';
import { timeConverter } from "@/components/getDate";

type CandidateDetailTypeProps = {
  candidate: any
}

export const CandidateDetail = (args: CandidateDetailTypeProps) => {
  const { candidate } = args
  const [ tab, setTab ] = useState('detail')
  const { account } = useWeb3React();
  
  const {
    name,
    kind,
    operator,
    candidateContract,
    elected
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
        {
          elected ?
          <Flex
            fontSize={'10px'}
          >
            {`Become a DAO committee member on ${timeConverter(elected)}`}
          </Flex> : ''
        }
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
        </Flex>
        <Flex
          flexDir={'row'}
          justifyContent={'space-between'}
          fontSize={'14px'}
          fontWeight={500}
        >
          <Flex>
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
              Stakers
            </Flex>
          </Flex>
          <Flex>
            {
              account ?
              <Flex mr={'10px'}>
                <BasicButton
                  name={'Update Reward'}
                  type={'inactive'}
                  w={'100px'}
                  h={'25px'}
                  fontSize={'12px'}
                /> 
              </Flex> :
              ''
            }
            <BasicButton
              name={'Stake'}
              type={'normal'}
              w={'100px'}
              h={'25px'}
              fontSize={'12px'}
            />
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