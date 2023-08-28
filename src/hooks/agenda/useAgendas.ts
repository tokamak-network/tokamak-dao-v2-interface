import { getAgendas, getAgendaVotes, getAgendaContents } from "@/api";
import { useEffect, useState } from 'react';

export function useAgenda() {
  const [agendas, setAgendas] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAgenda () {
      const agenda = await getAgendas()
      // const agendaContents = await getAgendaContents(1)
      // console.log(agendaContents)
      // console.log(agenda)
      setAgendas(agenda)
    }
    fetchAgenda()
  }, [])

  return agendas
}