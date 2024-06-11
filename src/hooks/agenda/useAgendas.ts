import { parseAgendaBytecode } from '@/components/parseAgendaBytecode';
import { getAgendas, getAgendaContents } from "@/api";
import { useEffect } from 'react';
import { useWeb3React } from "@web3-react/core";
import Web3 from 'web3'
import { INFURA_API } from '../../constants/index';
import { useRecoilState } from 'recoil';
import { agendaState } from '@/atom/agenda/agendas';

export function useAgenda() {
  const [agendas, setAgendas] = useRecoilState(agendaState);
  // const [agendaTxs, setAgendaTxs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAgenda () {
      let web3
      
      if (INFURA_API) {
        web3 = new Web3(new Web3.providers.HttpProvider(INFURA_API));
      }

      const agendas = await getAgendas()
      const promAgendaTx = [];
      const promAgendaContents = [];
      
      if (web3) {
        for (let i = 0; i < agendas.length; i++) {
          const txHash = agendas[i].transactionHash;
          promAgendaTx.push(await web3.eth.getTransaction(txHash) );
          promAgendaContents.push(await getAgendaContents(agendas[i].agendaid));
        }
        
        const agendaTxs = await Promise.all(promAgendaTx);
        const agendaContents = await Promise.all(promAgendaContents);
        
        for (let i = 0; i < agendas.length; i++) {
          if (agendaContents[i] != null) {
            agendas[i].contents = agendaContents[i].contents;
            agendas[i].creator = agendaContents[i].creator;
            agendas[i].type = agendaContents[i].type ? agendaContents[i].type : 'B';
            agendas[i].tx = agendaTxs[i]
            agendas[i].onChainEffects = parseAgendaBytecode(agendaTxs[i], agendas[i].type);
          }
        }
        const sortedAgenda = agendas.sort(function(a: any, b: any)  {
          return b.agendaid - a.agendaid;
        })
        setAgendas(sortedAgenda)
      }
    }
    fetchAgenda()
  }, [])

  return agendas
}