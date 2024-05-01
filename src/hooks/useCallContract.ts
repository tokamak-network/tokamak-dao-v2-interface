import TON from "services/abi/TON.json";
import WTON from "services/abi/WTON.json";
import Layer2Registry from "services/abi/Layer2Registry.json";
import DepositManager from "services/abi/DepositManager.json";
import SeigManager from "services/abi/SeigManager.json";
import DaoAgendaManager from "services/abi/DAOAgendaManager.json"
import DaoCommitteeProxy from "services/abi/DAOCommitteeProxy.json"
// import ERC20 from "services/abi/ERC20ABI.json";

import useContract from "hooks/useContract";
import CONTRACT_ADDRESS from "services/addresses/contract";

const useCallContract = (ERC20_ADDRESS?: string) => {
  //Phase 1
  const {
    TON_ADDRESS,
    WTON_ADDRESS,
    Layer2Registry_ADDRESS,
    DepositManager_ADDRESS,
    SeigManager_ADDRESS,
    DAOAgendaManager_ADDRESS,
    DAOCommitteeProxy_ADDRESS
  } = CONTRACT_ADDRESS;

  const TON_CONTRACT = useContract(TON_ADDRESS, TON);
  const WTON_CONTRACT = useContract(WTON_ADDRESS, WTON);
  const Layer2Registry_CONTRACT = useContract(Layer2Registry_ADDRESS, Layer2Registry);
  const DepositManager_CONTRACT = useContract(DepositManager_ADDRESS, DepositManager);
  const SeigManager_CONTRACT = useContract(SeigManager_ADDRESS, SeigManager);
  const AgendaManager_Contract = useContract(DAOAgendaManager_ADDRESS, DaoAgendaManager)
  const DAOCommitteeProxy_Contract = useContract(DAOCommitteeProxy_ADDRESS, DaoCommitteeProxy)
  // const TOS_CONTRACT = useContract(TOS_ADDRESS, ERC20.abi);
  // const ERC20_CONTRACT = useContract(ERC20_ADDRESS, ERC20.abi);

  
  return {
    TON_CONTRACT,
    WTON_CONTRACT,
    Layer2Registry_CONTRACT,
    DepositManager_CONTRACT,
    SeigManager_CONTRACT,
    AgendaManager_Contract,
    DAOCommitteeProxy_Contract
  };
};

export default useCallContract;
