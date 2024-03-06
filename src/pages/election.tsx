import { Box, Flex, Text } from "@chakra-ui/react"
import { CandidateList } from "./election/components/CandidateList"
import { ElectionSide } from "./election/components/ElectionSide";
import { useCandidate } from "@/hooks/election/useCandidate"
import { useRecoilState } from 'recoil';
import { candidateState } from "@/atom/election/candidate";
import {useEffect} from 'react';

function Election () {
  const { candidate, nonMemberList, memberList } = useCandidate()
  console.log(memberList)
  // const [value, setValue] = useRecoilState(candidateState)

  // useEffect(() => {
  //   setValue({ candidate, nonMemberList, memberList })
  // },[])
  // console.log(value)
  return (
    <Flex
      minW={'1200px'}
      w={'100%'}
      minH={'89vh'}
      flexDir={'row'}
      justifyContent={'center'}
      alignItems={'start'}
      my={'35px'}
    >
      <CandidateList 
        nonMemberList={nonMemberList}
        memberList={memberList}
      />
      <ElectionSide
        candidates={candidate}
      />
    </Flex>
  )
}

export default Election