import { Box, Flex, Text } from "@chakra-ui/react"
import { CandidateList } from "./components/election/CandidateList"
import { ElectionSide } from "./components/election/ElectionSide";
import { useCandidate } from "@/hooks/election/useCandidate"

function Election () {
  const { nonMemberList, memberList, candidate } = useCandidate()

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