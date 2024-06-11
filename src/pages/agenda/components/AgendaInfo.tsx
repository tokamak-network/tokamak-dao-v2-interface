import { AGENDA_INFOS } from "@/constants"
import { Flex, Link } from "@chakra-ui/react"

import { useEffect, useState } from 'react';
import { date2, checkVotingTime } from '../../../utils/getDate';
import { hexSlicer } from '../../../utils/trimAddress';
import { agendaStatus, agendaResult } from '../../../utils/agendaFilter';


export const AgendaInfo = (args: any) => {
  const { infos } = args
  // const [infos, setInfos] = useState<any[]>([])

  // useEffect(() => {
  //   if (agenda) setInfos(AGENDA_INFOS(agenda))
  // }, [agenda])

  return (
    <Flex
      flexDir={'column'}
      mt={'20px'}
    >
      {
        infos ? infos.map((info: any) => {
          return (
            <Flex
              fontFamily={'Roboto'}
              flexDir={'row'}
              justifyContent={'space-between'}
              mb={'12px'}
            >
              <Flex
                fontSize={'14px'}
                color={'#3e495c'}
              >
                {info.title}
              </Flex>
              <Flex
                fontSize={'13px'}
                color={'#818992'}
              >
                { 
                  info.type === 'time' 
                  ? date2(info.content)
                  : info.type === 'address'
                  ? (
                    <Link
                      href={`https://etherscan.io/address/${info.content}`}
                      isExternal
                      textDecor={'underline'}
                    >
                      {info.content}
                    </Link>
                  )
                  : info.type === 'status'
                  ? agendaStatus(info.content)
                  : info.type === 'result' 
                  ? agendaResult(info.content)
                  : checkVotingTime(info)
                  
                }
              </Flex>
            </Flex>
          )
        }) : ''
      }
    </Flex>
  )
}