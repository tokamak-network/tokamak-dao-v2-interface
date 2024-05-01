import { getAbiForAgenda } from '@/utils/getAbiForAgenda';
import Web3 from "web3";
import { marshalString, unmarshalString } from "./marshalString";
import { daoCommitteeProxyFunctionsOfTypeA } from './contractFunctions/daoCommitteeProxyFunctions';
import CONTRACT_ADDRESS from '@/services/addresses/contract';

export const getContractABI = function (want: any, type = 'A') {
  if (!want) return [];
  const {
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
  } = getAbiForAgenda()

  if (type === 'A') {
    if (want === 'DepositManager') return depositManagerA;
    else if (want === 'SeigManager') return seigManagerA;
    else if (want === 'DAOCommitteeProxy') return committeeProxyA;
    else if (want === 'DAOVault') return daoVaultA;
    else return [];
  } else {
    if (want === 'TON') return tonB;
    else if (want === 'WTON') return wtonB;
    else if (want === 'DepositManager') return depositManagerB;
    else if (want === 'SeigManager') return seigManagerB;
    else if (want === 'Layer2Registry') return layer2B;
    else if (want === 'DAOCommitteeProxy') return committeeProxyB;
    else if (want === 'DAOCommittee') return daoCommitteeB;
    else if (want === 'DAOVault') return daoVaultB;
    else if (want === 'PowerTONProxy') return powerTonProxyB;
    else if (want === 'PowerTONLogic') return powerTonLogicB;
    else return [];
  }
};

export const getContractABIFromAddress = function (address: string, type: any) {
  if (!address) return [];
  address = address.toLowerCase();
  const {
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
  } = getAbiForAgenda()

  if (type === 'A') {
    if (address === CONTRACT_ADDRESS.DepositManager_ADDRESS.toLowerCase()) return depositManagerA;
    else if (address === CONTRACT_ADDRESS.Old_DepositManager_ADDRESS.toLowerCase()) return depositManagerA;
    else if (address === CONTRACT_ADDRESS.SeigManager_ADDRESS.toLowerCase()) return seigManagerA;
    else if (address === CONTRACT_ADDRESS.Old_SeigManager_ADDRESS.toLowerCase()) return seigManagerA;
    else if (address === CONTRACT_ADDRESS.DAOCommitteeProxy_ADDRESS.toLowerCase()) return daoCommitteeProxyFunctionsOfTypeA;
    else if (address === CONTRACT_ADDRESS.DAOVault_ADDRESS.toLowerCase()) return daoVaultA;
    else return [];
  } else if (type === 'B') {
    if (address === CONTRACT_ADDRESS.TON_ADDRESS.toLowerCase()) return tonB;
    else if (address === CONTRACT_ADDRESS.WTON_ADDRESS.toLowerCase()) return wtonB;
    else if (address === CONTRACT_ADDRESS.DepositManager_ADDRESS.toLowerCase()) return depositManagerB;
    else if (address === CONTRACT_ADDRESS.Old_DepositManager_ADDRESS.toLowerCase()) return depositManagerB;
    else if (address === CONTRACT_ADDRESS.SeigManager_ADDRESS.toLowerCase()) return seigManagerB;
    else if (address === CONTRACT_ADDRESS.Old_SeigManager_ADDRESS.toLowerCase()) return seigManagerB;
    else if (address === CONTRACT_ADDRESS.Layer2Registry_ADDRESS.toLowerCase()) return layer2B;
    else if (address === CONTRACT_ADDRESS.DAOCommitteeProxy_ADDRESS.toLowerCase()) return committeeProxyB;
    else if (address === CONTRACT_ADDRESS.DAOCommittee_ADDRESS.toLowerCase()) return daoCommitteeB;
    else if (address === CONTRACT_ADDRESS.DAOVault_ADDRESS.toLowerCase()) return daoVaultB;
    else if (address === CONTRACT_ADDRESS.PowerTONProxy_ADDRESS.toLowerCase()) return powerTonProxyB;
    else return [];
  } else {
    console.log('bug', 'no type'); // eslint-disable-line
  }
};

export const getContractAddress = function (target: string) {
  //@ts-ignore
  const address = CONTRACT_ADDRESS[`${target}_ADDRESS`];
  if (!address) {
    console.log('bug'); // eslint-disable-line
  }
  return address ? address : '';
};

export const getFunctionSelector = function (contract: any, want: any, type: any) {
  if (!contract || !want) return '';

  const {
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
  } = getAbiForAgenda()

  if (type === 'A') {
    // @ts-ignore
    if (contract === 'DepositManager' && depositManagerA) return (depositManagerA.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'SeigManager') return (seigManagerA.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'DAOCommitteeProxy') return (committeeProxyA.find((f: any) => f.name === want)).selector;
    else if (contract === 'DAOVault') {
      // @ts-ignore
      return (daoVaultA.find((f: any) => f.name === want)).selector;
    }
    else {
      return '';
    }
  } else if (type === 'B') {
    // @ts-ignore
    if (contract === 'TON' && tonB) return (tonB?.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'WTON') return (wtonB.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'DepositManager') return (depositManagerB.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'SeigManager') return (seigManagerB.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'Layer2Registry') return (layer2B.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'DAOCommitteeProxy') return (committeeProxyB.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'DAOCommittee') return (daoCommitteeB.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'DAOVault') return (daoVaultB.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'PowerTONProxy') return (powerTonProxyB.find((f: any) => f.name === want)).selector;
    // @ts-ignore
    else if (contract === 'PowerTONLogic') return (powerTonLogicB.find((f: any) => f.name === want)).selector;
    else return '';
  } else {
    return '';
  }
};

export const encodeParameters = function (typesArray: any, parameters: any) {
  const web3 = new Web3();
  return web3.eth.abi.encodeParameters(typesArray, parameters);
};

export const encoded = function (type: any, value: any) {
  const types = [
    'uint256',
    'bool',
    'address',
    'address[]',
    'bytes32',
    'string',
  ];

  const index = types.indexOf(type);
  if (index === -1) {
    console.log('bug'); // eslint-disable-line
    return '';
  }
  if (index === 0) return String(value); // uint256
  else if (index === 1) { // bool
    value = value.toLowerCase();

    if (value === 'true') return true;
    else if (value === 'false') return false;
    else return -1;
  }
  else if (index === 2) { // address
    if (value.length !== 42) return -1;
    else return value;
  }
  else if (index === 3) { // address[]
    let bug = false;

    const values: any[] = [];
    value = value.replace(/\s/g, '');
    value = value.substring(1, value.length - 1);
    value.split(',').forEach((address: any) => {
      if (address.length !== 42) bug = true;
      else values.push(value);
    });

    if (bug) return -1;
    return values;
  }
  else {
    return value;
  }
};

export const getABIFromSelector = function (selector: any, type: any) {
  let abi;

  const {
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
  } = getAbiForAgenda()

  if (type === 'A') {
    abi = depositManagerA.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = seigManagerA.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = committeeProxyA.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = daoVaultA.find(abi => abi.selector === selector);
    if (abi) return abi;

  } else if (type === 'B') {
    abi = tonB.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = wtonB.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = depositManagerB.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = seigManagerB.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = layer2B.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = committeeProxyB.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = daoCommitteeB.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = daoVaultB.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = powerTonProxyB.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = powerTonProxyB.find(abi => abi.selector === selector);
    if (abi) return abi;

    if (!abi) {
      console.log('bug'); // eslint-disable-line
    }
  } else {
    console.log('bug', 'no type'); // eslint-disable-line
  }
};



export const metamaskErrorMessage = function (errorString: string) {
  let errString = '';
  if (errorString !== null && errorString.length > 0) {
    const key = 'message';
    const positionKey = errorString.indexOf(key);
    const startMessage = errorString.indexOf('"', positionKey + key.length + 2);
    const endMessage = errorString.indexOf('"', startMessage + 3);
    errString = errorString.substring(startMessage + 1, endMessage);
  }
  return errString;
};

// export const canExecute = async function (agendaId: number, _web3: any) {
//   let canExecute = false;
//   try {
//     const AgendaManager = await getContract('DAOAgendaManager', _web3);
//     if (AgendaManager !== null) {
//       canExecute = await AgendaManager.methods.canExecuteAgenda(agendaId).call();
//     } else {
//       console.log('Utils.canExecuteAgenda AgendaManager is null') ; // eslint-disable-line
//     }
//   } catch (err) {
//     console.log('Utils.canExecuteAgenda err', err) ; // eslint-disable-line
//   }
//   return canExecute;
// };
