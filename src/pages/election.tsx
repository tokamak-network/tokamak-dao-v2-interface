import { Box, Flex, Text } from "@chakra-ui/react"
import { CandidateList } from "./components/election/CandidateList"
import { CardTitle } from './components/election/CardTitle';
import { ElectionSide } from "./components/election/ElectinoSide";

function Election () {
  return (
    <Flex
      minW={'1200px'}
      w={'100%'}
      minH={'89vh'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      my={'35px'}
    >
      <CardTitle 
        name={'Elected Candidates'}
        w={'1200px'}
      />
      <Flex
        flexDir={'row'}
        justifyContent={'space-between'}
      >
        <CandidateList />
        <ElectionSide />
      </Flex>
    </Flex>
  )
}

export default Election