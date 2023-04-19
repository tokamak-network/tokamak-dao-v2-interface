import { getAgendas, getAgendaVotes } from "@/api";
import { useEffect, useState } from 'react';

export function useAgenda() {
  const [agendas, setAgendas] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAgenda () {
      const agenda = await getAgendas()
      console.log(agenda)
      setAgendas(agenda)
    }
    fetchAgenda()
  }, [])

  return agendas
}