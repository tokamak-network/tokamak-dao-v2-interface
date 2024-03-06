import web3EthABI from 'web3-eth-abi'
import {
  daoCommitteeFunctionsOfTypeB,
  daoCommitteeProxyFunctionsOfTypeA,
  daoCommitteeProxyFunctionsOfTypeB,
  daoVaultFunctionsOfTypeA,
  daoVaultFunctionsOfTypeB,
  depositManagerFunctionsOfTypeA,
  depositManagerFunctionsOfTypeB,
  layer2RegistryFunctionsOfTypeB,
  powerTonLogicFunctionsOfTypeB,
  powerTonProxyFunctionsOfTypeB,
  seigManagerFunctionsOfTypeA,
  seigManagerFunctionsOfTypeB,
  tonFunctionsOfTypeB,
  wtonFunctionsOfTypeB,
} from "@/utils/contractFunctions/index"
import ton from "services/abi/TON.json";
import wton from "services/abi/WTON.json";
// import agendaManager from "services/abi/DAOA"
import layer2Registry from "services/abi/Layer2Registry.json";
import depositManager from "services/abi/DepositManager.json";
import seigManager from "services/abi/SeigManager.json";
import committee from "services/abi/DAOCommittee.json"
import committeeProxy from "services/abi/DAOCommitteeProxy.json"
import powerTONLogic from "services/abi/PowerTONLogic.json"
import powerTONProxy from "services/abi/PowerTONProxy.json"
import daoVault from "services/abi/DAOVault.json"
import { AbiFunctions, AbiFunction, AbiItem } from '../types/index';
import layer2 from 'services/abi/Layer2.json';

export function getAbiForAgenda () {
  const depositManagerA = set(depositManagerFunctionsOfTypeA, depositManager)
  const depositManagerB = set(depositManagerFunctionsOfTypeB, depositManager)
  const seigManagerA = set(seigManagerFunctionsOfTypeA, seigManager)
  const seigManagerB = set(seigManagerFunctionsOfTypeB, seigManager)
  const daoCommitteeB = set(daoCommitteeFunctionsOfTypeB, committee)
  const committeeProxyA = set(daoCommitteeProxyFunctionsOfTypeA, committeeProxy)
  const committeeProxyB = set(daoCommitteeProxyFunctionsOfTypeB, committeeProxy)
  const powerTonLogicB = set(powerTonLogicFunctionsOfTypeB, powerTONLogic)
  const powerTonProxyB = set(powerTonProxyFunctionsOfTypeB, powerTONProxy)
  const daoVaultA = set(daoVaultFunctionsOfTypeA, daoVault)
  const daoVaultB = set(daoVaultFunctionsOfTypeB, daoVault)
  const layer2B = set(layer2RegistryFunctionsOfTypeB, layer2Registry)
  const tonB = set(tonFunctionsOfTypeB, ton)
  const wtonB = set(wtonFunctionsOfTypeB, wton)
  // console.log(depositManagerA)

  return {
    depositManagerA,
    depositManagerB,
    seigManagerA,
    seigManagerB,
    daoCommitteeB,
    committeeProxyA,
    committeeProxyB,
    powerTonLogicB,
    powerTonProxyB,
    daoVaultA,
    daoVaultB,
    layer2B,
    tonB,
    wtonB
  }
}

function set (functions: AbiFunctions, abi: AbiItem[]): AbiItem[] {
  // try {
    if (functions) {
      functions.forEach((func: AbiFunction) => {
        const f: AbiItem | undefined = abi.find((f: AbiItem) => f.name === func.name);
        if (f) {
          //@ts-ignore
          f.selector = web3EthABI.encodeFunctionSignature(f);
          //@ts-ignore
          f.explanation = func.explanation;
          f.prettyName = func.prettyName;
          f.title = func.title;
          f.params = func.params;
          return f
        }
        return []
      });
    }
    return abi
  // } catch (e) {
  //   console.log(e)
  // }
}