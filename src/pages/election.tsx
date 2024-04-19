import { Box, Flex, Text } from "@chakra-ui/react"
import { CandidateList } from "./election/components/CandidateList"
import { useCandidate } from "@/hooks/election/useCandidate"
import { useState, useEffect } from 'react';
import { ResourceCard } from "@/common/card/ResourceCard";
import { CardTitle } from "@/common/card/CardTitle";

function Election () {
  const { candidate, nonMemberList, memberList, isCandidate } = useCandidate()
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
            isCandidate={isCandidate}
          />
        </Flex>
      }
      <Flex 
        ml={'30px'}
        mt={'22px'}
        w={'378px'}
        flexDir={'column'}
      >
        <CardTitle 
          name={'Resources'}
          mb={'12px'}
        />
        <ResourceCard />
      </Flex>
    </Flex>
  )
}

export default Election