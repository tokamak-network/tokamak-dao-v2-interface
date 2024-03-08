import { parseAgendaBytecode } from '@/components/parseAgendaBytecode';
import { getAgendas, getAgendaVotes, getAgendaContents } from "@/api";
import { useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import Web3 from 'web3'
import { INFURA_API } from '../../constants/index';

export function useAgenda() {
  const [agendas, setAgendas] = useState<any[]>([]);
  // const [agendaTxs, setAgendaTxs] = useState<any[]>([]);
  const { library } = useWeb3React();

  useEffect(() => {
    async function fetchAgenda () {
      let web3
      if (library) {
        web3 = library
      } else if (INFURA_API) {
        web3 = new Web3(new Web3.providers.HttpProvider(INFURA_API));
      }
      const agendas = await getAgendas()
      console.log(agendas[0].agendaid)
      const promAgendaTx = [];
      const promAgendaContents = [];
      for (let i = 0; i < agendas.length; i++) {
        const txHash = agendas[i].transactionHash;
        promAgendaTx.push(web3.eth.getTransaction(txHash));
        promAgendaContents.push(getAgendaContents(agendas[i].agendaid));
      }
      const agendaTxs = await Promise.all(promAgendaTx);
      const agendaContents = await Promise.all(promAgendaContents);
      for (let i = 0; i < agendas.length; i++) {
        if (agendaContents[i] != null) {
          agendas[i].contents = agendaContents[i].contents;
          agendas[i].creator = agendaContents[i].creator;
          agendas[i].type = agendaContents[i].type ? agendaContents[i].type : 'B';
          agendas[i].tx = agendaTxs[i]
          agendas[i].onChainEffects = await parseAgendaBytecode(agendaTxs[i], agendas[i].type);
        }
      }
      setAgendas(agendas)
    }
    fetchAgenda()
  }, [])

  return agendas
}