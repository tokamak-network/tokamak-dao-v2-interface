import { Flex } from "@chakra-ui/react"
import { useState } from 'react';

export const AgendaDetail = () => {
  const [ tab, setTab ] = useState('info')

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
            {/* {name} */}
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
            color = {tab === 'info' ? '#2a72e5' : '#86929d' }
            cursor={'pointer'}
            onClick={() => { setTab('info')}}
          >
            Info
          </Flex>
          <Flex 
            mr={'35px'}
            color = {tab === 'description' ? '#2a72e5' : '#86929d' }
            cursor={'pointer'}
            onClick={() => { setTab('description')}}
          >
            Description
          </Flex>
          <Flex
            color = {tab === 'effects' ? '#2a72e5' : '#86929d' }
            cursor={'pointer'}
            onClick={() => { setTab('effects')}}
          >
            On-Chain Effects
          </Flex>
          <Flex
            color = {tab === 'comments' ? '#2a72e5' : '#86929d' }
            cursor={'pointer'}
            onClick={() => { setTab('comments')}}
          >
            {`Comments`}
          </Flex>
        </Flex>
        <Flex w={'726px'} h={'1px'} bgColor={'#dfe4ee'} my={'10px'} />
        {
          tab === 'detail' ?
          <>
            {/* <CandidateInfo 
              candidate={candidate}
            /> */}
          </> :
          tab === 'breakdown' ?
          <>
            {/* <VoteBreakDown 
              candidate={candidate}
            /> */}
          </> :
          <>
          </>
        } 
        
      </Flex>
    </Flex>
  )
}