import { Flex, Grid, Text, useTheme, Tooltip } from "@chakra-ui/react"
import { useState, useEffect, useCallback } from 'react';
import { SelectContractType } from "./components/propose/SelectContractType";
import { getAbiForAgenda } from '@/utils/getAbiForAgenda';
import { ProposeCard } from './components/propose/ProposeCard';
import { FunctionCard } from './components/propose/FunctionCard';
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
import { contract } from "web3/lib/commonjs/eth.exports";
import { useRecoilState } from "recoil"

import { modalData, modalState } from "@/atom/global/modal"
import { ModalType } from "@/types/modal"
import { ProposeModal } from "./components/propose/ProposeModal";
import { getContractABI } from '../utils/getContractInfo';


function Propose () {
  const theme = useTheme()
  const [contractType, setContractType] = useState('A')
  // const {
  //   depositManagerA,
  //   depositManagerB,
  //   seigManagerA,
  //   seigManagerB,
  //   daoCommitteeB,
  //   committeeProxyA,
  //   committeeProxyB,
  //   // powerTonLogicB,
  //   powerTonProxyB,
  //   daoVaultA,
  //   daoVaultB,
  //   layer2B,
  //   tonB,
  //   wtonB
  // } = getAbiForAgenda()
  const [ typeA, setTypeA ] = useState<any[]>([])
  const [ typeB, setTypeB ] = useState<any[]>([])
  const [ selectedContract, setSelectedContract ] = useState('')
  const [ selectedABI, setSelectedABI ] = useState<any[]>([])
  const [ functions, setFunctions ] = useState<any[]>([])

  
  useEffect(() => {
    async function fetch () {
      const A = [
        {
          contractName: 'Deposit Manager Contract',
          functions: depositManagerFunctionsOfTypeA,
          imageActive: require('@/assets/images/contract-deposit-manager-active.svg'),
          imageInactive: require('@/assets/images/contract-deposit-manager-inactive.svg')
        },
        {
          contractName: 'Seig Manager Contract',
          functions: seigManagerFunctionsOfTypeA,
          imageActive: require('@/assets/images/contract-seig-manager-active.svg'),
          imageInactive: require('@/assets/images/contract-seig-manager-inactive.svg')
        },
        {
          contractName: 'DAO Committee Proxy Contract',
          functions: daoCommitteeProxyFunctionsOfTypeA,
          imageActive: require('@/assets/images/contract-dao-committee-active.svg'),
          imageInactive: require('@/assets/images/contract-dao-committee-inactive.svg')
        },
        {
          contractName: 'DAO Vault Contract',
          functions: daoVaultFunctionsOfTypeA,
          imageActive: require('@/assets/images/contract-dao-vault-active.svg'),
          imageInactive: require('@/assets/images/contract-dao-vault-inactive.svg')
        },
      ]
      const B = [
        {
          contractName: 'TON Contract',
          functions: tonFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-ton-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-ton-inactive-typeB.svg')
        },
        {
          contractName: 'WTON Contract',
          functions: wtonFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-wton-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-wton-inactive-typeB.svg')
        },
        {
          contractName: 'Layer2 Registry Contract',
          functions: layer2RegistryFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-layer2-registry-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-layer2-registry-inactive-typeB.svg')
        },
        {
          contractName: 'Deposit Manager Contract',
          functions: depositManagerFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-deposit-manager-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-deposit-manager-inactive-typeB.svg')
        },
        {
          contractName: 'Seig Manager Contract',
          functions: seigManagerFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-seig-manager-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-seig-manager-inactive-typeB.svg')
        },
        {
          contractName: 'DAO Committee Proxy Contract',
          functions: daoCommitteeProxyFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-dao-committee-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-dao-committee-inactive-typeB.svg')
        },
        {
          contractName: 'DAO Vault Contract',
          functions: daoVaultFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-dao-vault-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-dao-vault-inactive-typeB.svg')
        },
        {
          contractName: 'DAO Committee Contract',
          functions: daoCommitteeFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-dao-committee-proxy-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-dao-committee-proxy-inactive-typeB.svg')
        },
        {
          contractName: 'PowerTon Proxy Contract',
          functions: powerTonProxyFunctionsOfTypeB,
          imageActive: require('@/assets/images/contract-seig-manager-active-typeB.svg'),
          imageInactive: require('@/assets/images/contract-seig-manager-inactive-typeB.svg')
        },  
      ]
      setTypeA(A)
      setTypeB(B)
    }
    fetch()
  }, [])

  const [selectedModal, setSelectedModal] = useRecoilState(modalState);
  const [, setSelectedModalData] = useRecoilState(modalData);

  const modalButton = useCallback(async (modalType: ModalType, data: any, abis: any) => {
    setSelectedModal(modalType);
    
    const functions = abis.find((abi: any) => abi.name === data.name)
    if (functions) {
      setSelectedModalData({
        ...data,
        inputs: functions.inputs
      });

    }
  }, [functions]);

  const selectType = (type: string) => {
    setContractType(type)
    setSelectedContract('')
    setFunctions([])
  }

  const selectContract = (content: any) => {
    setSelectedContract(content.contractName)
    setFunctions(content.functions)
    const sliceIndex = content.contractName.indexOf('Contract') - 1
    const contractName = content.contractName.slice(0, sliceIndex)
    const contractABI = getContractABI(contractName.replaceAll(' ', ''), contractType)
    setSelectedABI(contractABI)
    
  }
  
  return (
    <Flex
      minW={'1200px'}
      w={'100%'}
      minH={'89vh'}
      flexDir={'column'}
      justifyContent={'start'}
      alignItems={'center'}
      my={'35px'}
      fontFamily={theme.fonts}
    >
      <Flex
        width={'552px'}
        height={'92px'}
        fontSize={'70px'}
        fontWeight={900}
        textAlign={'center'}
        color={'#eff1f6'}
        mb={'30px'}
      >
        Propose Agenda
      </Flex>
      <Flex
        width={'212px'}
        height={'36px'}
        p={'3px'}
        borderRadius={'6px'}
        flexDir={'row'}
        bgColor={'#fff'}
        border={'solid 1px #e7ebf2'}
        justifyContent={'space-between'}
        mb={'15px'}
      >
        <SelectContractType 
          type={contractType}
          content={'Type A'}
          onClick={() => selectType('A')}
        />
        <SelectContractType 
          type={contractType}
          content={'Type B'}
          onClick={() => selectType('B')}
        />
      </Flex>
      <Flex
        fontSize={'14px'}
        fontWeight={300}
        color={'#86929d'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        mb={'50px'}
      >
        <Text>
          You can create a sound Tokamak Network ecosystem.
        </Text>
        <Text>
          Please participate in various suggestions.
        </Text>
      </Flex>
      <Flex>
        {
          contractType === 'A' ?
          <>
            {typeA.map((content) => {
              return [
                <ProposeCard
                  content={content}
                  selected={selectedContract}
                  contractType={'A'}
                  onClick={() => selectContract(content)}
                />
              ]
            })}
          </> : 
          <Grid
            // maxW={'1200px'}
            templateColumns={'repeat(4, 1fr)'}
          >
            {typeB.map((content)=> {
              return [
                <ProposeCard
                  content={content}
                  selected={selectedContract}
                  contractType={'B'}
                  onClick={() => selectContract(content)}
                /> 
              ]
            })}
          </Grid>
        }
      </Flex>
      {
        functions ? 
        <Grid
          templateColumns={'repeat(6, 1fr)'}
          gap={7}
        >
          {
            functions.map((contractFunction) => {
              const { disabled, name } = contractFunction
              
              return [
                <Flex
                  onClick={() => {
                  disabled ? 
                  '' :
                  modalButton('propose', contractFunction, selectedABI)
                }}
                >
                  <FunctionCard 
                    name={name}
                    disabled={disabled}
                    contractType={contractType}
                    contractFunction={contractFunction}
                  />
                </Flex>
              ]
            })
          }
        </Grid> : 
        <></>
      }
      <ProposeModal />
    </Flex>
  )
}

export default Propose