import { useCandidate } from "@/hooks/election/useCandidate"
import { Flex } from "@chakra-ui/react"
import { ElectionSide } from "./components/ElectionSide"
import { CandidateDetail } from './components/CandidateDetail';


function CandidateDetails () {
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
      <CandidateDetail
        
      />
      <ElectionSide
        candidates={candidate}
      />
    </Flex>
  )
}

export default CandidateDetails