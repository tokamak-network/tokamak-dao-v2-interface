import { useMemo } from "react";
import { Contract } from "@ethersproject/contracts";
import { getContract } from "utils/getContract";
import { useWeb3React } from "@web3-react/core";
import { INFURA_API } from "@/constants";
import Web3 from "web3";

const useContract = (
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null => {
  const { library, account } = useWeb3React();

  return useMemo(() => {
    if (!address || !ABI ) return null;
    const web3 = library ? library : INFURA_API ? new Web3(new Web3.providers.HttpProvider(INFURA_API)) : ''
    try {
      return getContract(
        address,
        ABI,
        web3,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
};

export default useContract;
