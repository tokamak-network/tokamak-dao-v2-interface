import { marshalString, unmarshalString } from "./marshalString";
import { decodeParameters } from "./decodeParameters"
import { getAbiForAgenda } from './getAbiForAgenda';

export const parseAgendaBytecode = function (tx: any, type: string) {
  // TODO: to fix case of using mixed type with 'A' and 'B'
  console.log(tx.input)
  const params1 = marshalString(unmarshalString(tx.input).substring(8));
  const decodedParams1 = decodeParameters(['address', 'uint256', 'bytes'], params1);
  const params2 = decodedParams1[2];
  //@ts-ignore
  const decodedParams2 = decodeParameters(['address[]', 'uint256', 'uint256', 'bool', 'bytes[]'], params2);

  const targets = decodedParams2[0];
  const commands = decodedParams2[4];
  //@ts-ignore
  if (targets.length !== commands.length) {
    console.log('bug'); // eslint-disable-line
  }

  const onChainEffects = [];
  //@ts-ignore
  for (let i = 0; i < targets.length; i++) {
    //@ts-ignore
    const selector = commands[i].slice(0, 10);
    let abi = abiFromSelector(selector, type);
    if (!abi) {
      abi = abiFromSelector(selector, type === 'A' ? 'B' : 'A');
    }

    if (!abi) {
      onChainEffects.push({
        title: '',
        target: '',
        name: '',
        types: [],
        bytecode: '',
      });
      console.log('bug', 'no abi'); // eslint-disable-line
      continue;
    }
    if (abi) {
      //@ts-ignore
      const target = targets[i];
      //@ts-ignore
      const name = abi.name;
      const types: any[] = [];
      
      //@ts-ignore
      abi.inputs.forEach(input => {
        types.push(input.type);
      });
      //@ts-ignore
      const bytecode = marshalString(unmarshalString(commands[i]).substring(8));
      //@ts-ignore
      const values = decodeParameters(types, bytecode);
      
      const onChainEffect = {
        target,
        name,
        types,
        values,
        title: abi.title
      };
      onChainEffects.push(onChainEffect);
 
    }
  }
  return onChainEffects;
};

export function abiFromSelector (selector: any, type: string) {
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
  let abi;

  if (type === 'A') {
    abi = depositManagerA?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = seigManagerA?.find(abi => abi.selector === selector);
    if (abi) return abi;
    
    abi = committeeProxyA?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = daoVaultA?.find(abi => abi.selector === selector);
    if (abi) return abi;
  } else if (type === 'B') {
    abi = tonB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = wtonB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = depositManagerB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = seigManagerB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = layer2B?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = daoCommitteeB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = committeeProxyB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = daoVaultB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = powerTonProxyB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    abi = powerTonLogicB?.find(abi => abi.selector === selector);
    if (abi) return abi;

    if (!abi) {
      console.log('buggg', abi, selector); // eslint-disable-line
    }
  } else {
    console.log('bug', 'no type'); // eslint-disable-line
  }
}
