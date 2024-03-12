import { getContractABIFromAddress } from "@/components/getContractInfo";
import { onChainEffect } from "@/types";
import { Flex, Text, Link, Box } from "@chakra-ui/react"
import { useEffect, useState } from 'react';
import { ETHERSCAN_URL } from '../../../constants/index';


type AgendaOnchainType = {
  onChainEffects: any
  type: string
}

export const AgendaOnchain = (args: AgendaOnchainType) => {
  const { onChainEffects, type } = args
  const [content, setContent] = useState('')

  useEffect(() => {
    const result = () => {
      if (onChainEffects.length === 2) {
        if (onChainEffects[0].name === 'setPowerTONSeigRate') {
          return `Execution 1:
This function allows you to set the new PowerTON contract as the first parameter (Param1). This function will be used when PowerTON is updated.

Execution 2:
Currently, TON seigniorage is issued each time a Ethereum block is created.

Additionally issued TON will be distributed among PowerTON, DAO and staking users, excluding TON allocated for fixed seigniorage rewards (19%).
This function allows you to determine the ratio of the newly issued TON accumulated for PowerTON.`;
        } else if (onChainEffects[0].name === 'upgradeTo' && onChainEffects[1].name === 'setInfo') {
          return `
Execution 1:
This function sets the new address of the logic contract for PowerTONProxy to be upgraded. Enter the logic contract for PowerTONProxy address to be upgraded in the first parameter (Param1). It will be used when the PowerTON is upgraded. 

impl: ${onChainEffects[0].values[0]}

Execution 2:
This function execute setInfo function to set the informations in PowerTON.

wton: ${onChainEffects[1].values[0]}
autocoinageSnapshot: ${onChainEffects[1].values[1]}
seigManager: ${onChainEffects[1].values[2]}
dividendPool: ${onChainEffects[1].values[3]}

`;
        }
      }
      if (onChainEffects.length === 3) {
        if (onChainEffects[0].name === 'setPowerTONSeigRate' &&
            onChainEffects[1].name === 'setDaoSeigRate' &&
            onChainEffects[2].name === 'setPseigRate'
        ) {
          return `Currently, TON seigniorage is issued each time a Ethereum block is created.

Additionally issued TON will be distributed among PowerTON, DAO and staking users, excluding TON allocated for fixed seignorage rewards (19%).
This function allows you to determine the ratio of the newly issued TON accumulated for PowerTON, DAO and staking users.`;
        }
      }
      if (!onChainEffects || onChainEffects.length === 0) {
        console.log('bug', 'no on-chain effects'); // eslint-disable-line
        return '';
      }
      const abi = getContractABIFromAddress(onChainEffects[0].target, type);
      if (!abi || abi.length === 0) {
        return '';
      }
      //@ts-ignore
      const abiFound = abi.find(a => a.name === onChainEffects[0].name);
      return abiFound.explanation;
      
    }
    setContent(result)


  }, [onChainEffects])

  return (
    <Flex 
      w={'100%'} 
      flexDir={'column'} 
      fontSize={'14px'}
      fontWeight={500}
      mt={'15px'}
    >
      <Flex
        flexDir={'row'}
      >
        <Text
          mr={'3px'}
        >
          For the spell at address
        </Text>
        <Link
          href={`${ETHERSCAN_URL}/address/${onChainEffects[0].target}`}
          textDecor={'underline'}
          color={'#2a72e5'}
        >
          { onChainEffects[0] ? onChainEffects[0].target : ''}
        </Link>
      </Flex>
      <Flex whiteSpace={'pre-wrap'} my={'10px'}>
        {content}
      </Flex>
      {
        onChainEffects.length === 3 ?
        (
          <Flex flexDir={'column'}>
            <span>powerTONSeigRate_: {onChainEffects[0].values[0].toString()}</span> 
            <span>daoSeigRate_: {onChainEffects[1].values[0].toString()}</span>
            <span>pseigRate_: {onChainEffects[2].values[0].toString()}</span>
          </Flex>
        ) : 
        onChainEffects.length === 2 ? (
          <Flex flexDir={'column'} mt={'10px'}>
            <span>powerTONSeigRate_: {onChainEffects[0].values[0].toString()}</span>
            <span>powerton: {onChainEffects[1].values[0] }</span>
          </Flex>
        ) : (
          <Flex>

          </Flex>
        )
      }
    </Flex>
  )
}