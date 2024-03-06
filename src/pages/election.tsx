import { Box, Flex, Text } from "@chakra-ui/react"
import { CandidateList } from "./election/components/CandidateList"
import { ElectionSide } from "./election/components/ElectionSide";
import { useCandidate } from "@/hooks/election/useCandidate"
import { useRecoilState } from 'recoil';
import { candidateState } from "@/atom/election/candidate";
import { useState, useEffect } from 'react';

function Election () {
  const { candidate, nonMemberList, memberList } = useCandidate()
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    candidate.length > 0 ? setIsLoading(false) : setIsLoading(true)
  }, [candidate, isLoading])
  
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
      {
        isLoading ? '' :
        <Flex>
          <CandidateList 
            nonMemberList={nonMemberList}
            memberList={memberList}
          />
          <ElectionSide
            candidates={candidate}
          />

        </Flex>
      }
    </Flex>
  )
}

export default Election