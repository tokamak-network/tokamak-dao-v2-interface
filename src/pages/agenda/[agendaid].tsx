import NextButton from "@/common/button/NextButton";
import { useAgenda } from "@/hooks/agenda/useAgendas";
import { Flex } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { AgendaDetail } from "./components/AgendaDetail";
import { AgendaSide } from "./components/AgendaSide";

function AgendaDetails () {
  const agendas = useAgenda()
  const router = useRouter()
  const [ index, setIndex ] = useState<number>(0)
  const [ currentAgenda, setCurrentAgenda ] = useState({})
  const { query } = useRouter()

  useEffect(() => {
    async function fetch() {
      const currentIndex = agendas.findIndex((agenda: any) => agenda.agendaid.toString() === query.agendaid)
      console.log(currentIndex, agendas[currentIndex])
      setCurrentAgenda(agendas[currentIndex])
      setIndex(currentIndex)
    }
    fetch()
  }, [agendas, query])
  console.log(currentAgenda)

  const next = () => {
    if (index !== agendas.length - 1) {
      router.push({
        pathname: '/agenda/[agendaid]',
        query: { 
          agendaid: agendas[index + 1].agendaid,
        }
      })
    }
  }

  const prev = () => {
    if (index !== 0) {
      router.push({
        pathname: '/agenda/[agendaid]',
        query: { 
          agendaid: agendas[index - 1].agendaid,
        }
      })
    }
  }

  const back = () => {
    router.push({
      pathname:'/agenda'
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
            pageSize={agendas.length}
            name={'BACK TO ALL AGENDAS'}
            type={'prev'}
          />
          <Flex>
            <NextButton 
              setCurrentPage={() => prev()}
              currentPage={index}
              pageSize={agendas.length}
              name={'PREVIOUS AGENDA'}
              type={'prev'}
            />
            <Flex w={'10px'}/>
            <NextButton 
              setCurrentPage={() => next()}
              currentPage={index}
              pageSize={agendas.length}
              name={'NEXT AGENDA'}
              type={'next'}
            />
          </Flex>
        </Flex>
        {
          currentAgenda ? 
          <AgendaDetail
            agenda={currentAgenda}
          />
          : 
          ''
        }
      </Flex>
      <AgendaSide 
        agendaList={agendas}
      />

    </Flex>
  )
}

export default AgendaDetails