import { AGENDA_INFOS } from "@/constants";
import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from 'react';
import { date3 } from '../../../utils/getDate';
import { AgendaDetailTab } from "./AgendaDetailTab";
import { AgendaInfo } from "./AgendaInfo";

type AgendaDetailTypeProps = {
  agenda: any
}

export const AgendaDetail = (args: AgendaDetailTypeProps) => {
  const { agenda } = args;
  const {
    type,
    agendaid,
    onChainEffects,
    tCreationDate
  } = agenda

  const [ tab, setTab ] = useState('info')
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(type === 'A' ? '#2a72e5' : '#ff7800')
  }, [type])

  return (
    <Flex>
      {
        agenda ?
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
            // mt={'20px'}
            mb={'30px'}
            flexDir={'column'}
            alignItems={'start'} 
          >
            <Flex
              fontSize={'10px'}
              mb={'5px'}
            >
              <span
                style={{
                  marginRight: '3px',
                  color:`${color}`
                }}
              >
                #{agendaid}
              </span>
              Type 
              <span 
                style={{
                  marginRight:'3px',
                  marginLeft:'3px',
                  color:`${color}`
                }}
              >
                {type}
              </span> Posted {date3(tCreationDate)}
            </Flex>
            <Flex
              fontWeight={500}
            >
              { onChainEffects ? onChainEffects[0].title : '' }
            </Flex>
            
          </Flex>
          <AgendaDetailTab 
            color={color}
            setTab={setTab}
            tab={tab}
          />
          <Flex w={'726px'} h={'1px'} bgColor={'#dfe4ee'} my={'10px'} />
          {
            tab === 'info' ?
            <>
              <AgendaInfo 
                infos={AGENDA_INFOS(agenda)}
              />
            </> :
            tab === 'description' ?
            <>
              
            </> :
            tab === 'effect' ?
            <>
              
            </> :
            tab === 'comment' ?
            <>
              
            </> :
            <>
            </>
          } 
          
        </Flex> : ''
      }
    </Flex>
  )
}