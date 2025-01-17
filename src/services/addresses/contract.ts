//Phase1 contract datas
//https://www.notion.so/onther/Phase1-deploy-contract-interface-b48f4c779c7043df971ddc3dac783ec8

import { REACT_APP_MODE } from '../../constants';

type CONTRACT_ADDRESSES_TYPE = {
  TON_ADDRESS:
    | '0x2be5e8c109e2197D077D13A82dAead6a9b3433C5'
    | '0x68c1F9620aeC7F2913430aD6daC1bb16D8444F00';
  WTON_ADDRESS:
    | '0xc4A11aaf6ea915Ed7Ac194161d2fC9384F15bff2'
    | '0xe86fCf5213C785AcF9a8BFfEeDEfA9a2199f7Da6';
  Layer2Registry_ADDRESS :'0x0b3E174A2170083e770D5d4Cf56774D221b7063e' | '0x6817e1c04748eae68EBFF13216280Df1ec15ba86',
  DepositManager_ADDRESS: '0x56E465f654393fa48f007Ed7346105c7195CEe43' | '0x0ad659558851f6ba8a8094614303F56d42f8f39A',
  SeigManager_ADDRESS: '0x710936500aC59e8551331871Cbad3D33d5e0D909' | '0x446ece59ef429B774Ff116432bbB123f1915D9E3',
  
};

const MAINNET: CONTRACT_ADDRESSES_TYPE = {
  TON_ADDRESS: '0x2be5e8c109e2197D077D13A82dAead6a9b3433C5',
  WTON_ADDRESS :'0xc4A11aaf6ea915Ed7Ac194161d2fC9384F15bff2',
  Layer2Registry_ADDRESS :'0x0b3E174A2170083e770D5d4Cf56774D221b7063e',
  DepositManager_ADDRESS: '0x56E465f654393fa48f007Ed7346105c7195CEe43',
  SeigManager_ADDRESS: '0x710936500aC59e8551331871Cbad3D33d5e0D909',
}

const GOERLI: CONTRACT_ADDRESSES_TYPE = {
  TON_ADDRESS: '0x68c1F9620aeC7F2913430aD6daC1bb16D8444F00',
  WTON_ADDRESS: '0xe86fCf5213C785AcF9a8BFfEeDEfA9a2199f7Da6',
  Layer2Registry_ADDRESS :'0x6817e1c04748eae68EBFF13216280Df1ec15ba86',
  DepositManager_ADDRESS: '0x0ad659558851f6ba8a8094614303F56d42f8f39A',
  SeigManager_ADDRESS: '0x446ece59ef429B774Ff116432bbB123f1915D9E3',
};

const CONTRACT_ADDRESS: CONTRACT_ADDRESSES_TYPE =
  REACT_APP_MODE === 'PRODUCTION' ? MAINNET : GOERLI;

export default CONTRACT_ADDRESS;
