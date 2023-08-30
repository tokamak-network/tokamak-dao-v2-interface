import Web3, { AbiInput } from 'web3'

export const decodeParameters = function (typesArray: AbiInput[], hexString: string) {
  const web3 = new Web3();
  return web3.eth.abi.decodeParameters(typesArray, hexString);
};
