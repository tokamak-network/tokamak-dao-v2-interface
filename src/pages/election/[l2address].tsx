import { useCandidate } from "@/hooks/election/useCandidate"
import { Flex } from "@chakra-ui/react"
import { ElectionSide } from "./components/ElectionSide"
import { CandidateDetail } from './components/CandidateDetail';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import NextButton from "@/common/button/NextButton";


export const CandidateDetails = (props: any) => {
  const { nonMemberList, memberList, candidate } = useCandidate()
  const [ currentCandidate, setCurrentCandidate ] = useState({})
  const [ index, setIndex ] = useState<number>(0)
  const { query } = useRouter()
  const router = useRouter()

  useEffect(() => {
    // console.log(memberList)
    async function fetch() {
      const currentIndex = candidate.findIndex((candi: any) => candi.layer2 === query.l2address)
      setCurrentCandidate(candidate[currentIndex])
      setIndex(currentIndex)
    }
    fetch()
  }, [currentCandidate, index, query])

  const next = () => {
    if (index !== candidate.length - 1) {
      router.push({
        pathname: '/election/[l2address]',
        query: { 
          l2address: candidate[index + 1].layer2,
        }
      })
    }
  }

  const prev = () => {
    if (index !== 0) {
      router.push({
        pathname: '/election/[l2address]',
        query: { 
          l2address: candidate[index - 1].layer2,
        }
      })
    }
  }

  const back = () => {
    router.push({
      pathname:'/election'
    })
  }
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
      <Flex
        flexDir={'column'}
      >
        <Flex
          flexDir={'row'}
          justifyContent={'space-between'}
          mb={'20px'}
        >
          <NextButton 
            setCurrentPage={() => {back()}}
            currentPage={index}
            pageSize={candidate.length}
            name={'BACK TO ALL CANDIDATES'}
            type={'prev'}
          />
          <Flex>
            <NextButton 
              setCurrentPage={() => prev()}
              currentPage={index}
              pageSize={candidate.length}
              name={'PREVIOUS CANDIDATE'}
              type={'prev'}
            />
            <Flex w={'10px'}/>
            <NextButton 
              setCurrentPage={() => next()}
              currentPage={index}
              pageSize={candidate.length}
              name={'NEXT CANDIDATE'}
              type={'next'}
            />
          </Flex>
        </Flex>
        {
          currentCandidate ? 
          <CandidateDetail
            candidate={currentCandidate}
          />
          : 
          <></>
        }
      </Flex>
      <ElectionSide
        candidates={candidate}
      />
    </Flex>
  )
}

export default CandidateDetails