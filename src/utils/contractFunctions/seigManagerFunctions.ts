export const seigManagerFunctionsOfTypeA = [
  {
    'params': {
      'aboutParam0':
`uint256 powerTONSeigRate_: PowerTON distribution ratio (decimal: 27)
100000000000000000000000000: 10%`,
      'exampleParam0': '100000000000000000000000000',
    },
    'name': 'setPowerTONSeigRate',
    'title': '(Seig Manager)The proportion of the newly issued TON accumulated for PowerTON will be changed.',
    'prettyName': '',
    'explanation':
`Currently, TON seigniorage is issued each time a Ethereum block is created.

Additionally issued TON will be distributed among PowerTON, DAO and staking users, excluding TON allocated for fixed seigniorage rewards (19%).
This function allows you to determine the ratio of the newly issued TON accumulated for PowerTON.`,
  },
  {
    'params': {
      'aboutParam0':
`uint256 daoSeigRate_: DAO distribution ratio (decimal: 27)
100000000000000000000000000: 10%`,
      'exampleParam0': '100000000000000000000000000',
    },
    'name': 'setDaoSeigRate',
    'title': '(Seig Manager)The proportion of the newly issued TON accumulated for DAO will be changed.',
    'prettyName': '',
    'explanation':
`Currently, TON seigniorage is issued each time a Ethereum block is created.

Additionally issued TON will be distributed among PowerTON, DAO and staking users, excluding TON allocated for fixed seignorage rewards (19%).
This function allows you to determine the ratio of the newly issued TON accumulated for DAO.`,
  },
  {
    'params': {
      'aboutParam0':
`uint256 PseigRate_: Additional seigniorage distribution ratio
100000000000000000000000000: 10%`,
      'exampleParam0': '100000000000000000000000000',
    },
    'name': 'setPseigRate',
    'title': '(Seig Manager)The proportion of TON issued by seigiorage will be changed by the staking rate.',
    'prettyName': '',
    'explanation':
`Currently, TON seigniorage is issued each time a Ethereum block is created.

Additionally issued TON will be distributed among PowerTON, DAO and staking users, excluding TON allocated for fixed seignorage rewards (19%).
This function allows you to determine the ratio of the newly issued TON accumulated for staking users.`,
  },
  {
    'params': {
      'aboutParam0': 'uint256 adjustDelay_: Commission rate application grace period (Unit: Block)',
      'exampleParam0': '1000',
    },
    'name': 'setAdjustDelay',
    'title': '(Seig Manager)The grace period for applying the commission rate will be changed.',
    'prettyName': '',
    'explanation':
`TON operator can set the commission rate deducted from the delegator.
However, certain period is required to apply the changed commission rate. The period is measured in blocks.

This function allows you to set a grace period for commission rate change application.`,
  },
  {
    'params': {
      'aboutParam0': 'uint256 minimumAmount_: Operator\'s minimum deposit quantity 1000000000000000000000000000: 1 WTON',
      'exampleParam0': '1000000000000000000000000000',
    },
    'name': 'setMinimumAmount',
    'title': '(Seig Manager)The minimum amount of TON a operator (Layer 2 block creator) must deposit will be changed.',
    'prettyName': '',
    'explanation':
`TON operators must deposit and stake a minimum amount to operate Layer 2 chain of TON.

If you are staking less than the amount set in this function, you cannot commit.

* Commit: The act of collecting blocks from Layer 2 and entering them into Layer 1. Seigniorage (compensation) is paid when you prove that you are operating faithfully by making a commit.`,
  },
];

export const seigManagerFunctionsOfTypeB = [
  {
    'params': {
      'aboutParam0': 'address account: Address to receive authority',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'addPauser',
    'title': '(Seig Manager)Permission to stop issuing seigniorage will be granted.',
    'prettyName': '',
    'explanation':
'This function allows you to grant permission to stop issuing seigniorage. Enter the address account to be authorized in the first parameter (Param1).',
  },
  {
    'params': {
      'aboutParam0': 'address target: Address from which authority is to be removed',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'renounceMinter',
    'title': '(Seig Manager)Seigmanager\'s Minter rights for the first parameter (Param1) will be removed.',
    'prettyName': '',
    'explanation':
    'This function allows you to remove the Minter rights for the first parameter (Param1) held by the existing Seigmanger (seigniorage managing contract). It will be used when Seigmanger (the seigniorage managing contract) is updated.',
  },
  {
    'params': {
      'aboutParam0': 'address target: The target address for which you want to remove owner rights from SeigManger.',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'renounceOwnership',
    'title': '(Seig Manager)DAO\'s owner rights for Seigmanager will be removed.',
    'prettyName': '',
    'explanation':
    'This function allows you to remove the Owner rights for the first parameter (Param1) held by the existing Seigmanger (seigniorage managing contract). It will be used when Seigmanger (the seigniorage managing contract) is updated.',
  },
  {
    'params': {
      'aboutParam0': 'address target: Target address for which you want to remove Pauser permission from SeigManger',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'renouncePauser',
    'title': '(Seig Manager)Seigmanager\'s Pauser rights for the first parameter(Param1) will be removed.',
    'prettyName': '',
    'explanation':
    'This function removes the Pauser permission for the first parameter (Param1) held by the existing Seigmanger when Seigmanger (seigniorage managing contract) is updated.',
  },
  {
    'params': {
      'aboutParam0': 'address target: The target address from which the owner authority to be transferred by SeigManger',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'transferOwnership',
    'title': '(Seig Manager)First parameter\'s(Param1) owner rights of Seigmanager will be transferred.',
    'prettyName': '',
    'explanation':
`This function allows you to change the owner of the first parameter (Param1) held by Seigmanager (seigniorage managing contract) to the second parameter (Param2).
It will be used when Seigmanager (seigniorage managing contract) is updated.`,
  },
  {
    'name': 'pause',
    'title': '(Seig Manager)Seigniorage issuance will be stopped.',
    'prettyName': '',
    'explanation': 'This function allows you to stop issuing seigniorage.',
  },
  {
    'name': 'unpause',
    'title': '(Seig Manager)Seigniorage issuance will be resumed.',
    'prettyName': '',
    'explanation': 'This function allows you to resume issuance of seigniorage.',
  },
  {
    'params': {
      'aboutParam0': 'address powerton: New PowerTON address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setPowerTON',
    'title': '(Seig Manager)PowerTON contract will be changed.',
    'prettyName': '',
    'explanation':
'This function allows you to set the new PowerTON contract as the first parameter (Param1). This function will be used when PowerTON is updated.',
  },
  {
    'params': {
      'aboutParam0': 'address daoAddress: New DAO Vault address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setDao',
    'title': '(Seig Manager)Seigmanager\'s DAO Vault contract will be changed.',
    'prettyName': '',
    'explanation':
'This function allows you to set the new DAO contract as the first parameter (Param1). This function will be used when DAO Vault is updated.',
  },
  {
    'params': {
      'aboutParam0': 'address daoAddress: New CoinageFactory address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setCoinageFactory',
    'title': '(Seig Manager)CoinageFactory address will be changed.',
    'prettyName': '',
    'explanation':
'CoinageFactory is where the seigniorage management contracts are distributed for each layer 2. This function will be used when the seigniorage management method is upgraded.',
  },
  {
    'params': {
      'aboutParam0': 'address account: Address to receive challenger authority for Seigmanager',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'addChallenger',
    'title': '(Seig Manager)The Challenger authority will be transferred.',
    'prettyName': '',
    'explanation':
'This function allows you to grant the Challenger authority to a specific Address account. Enter the Address account to receive the authority into the first parameter (Param1).',
  },
  {
    'params': {
      'aboutParam0': 'address newSeigManager: New SeigManager address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'address[] coinages: The address of the Coinage to which the owner\'s authority is transferred',
      'exampleParam1': '[0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000001]',
    },
    'name': 'transferCoinageOwnership',
    'title': '(Seig Manager)Seigmanager will be updated.',
    'prettyName': '',
    'explanation':
'This function is used when Seigmanager (seigniorage managing contract) is updated.',
  },
  {
    'params': {
      'aboutParam0': 'address daoAddress: New CoinageFactory address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'renounceWTONMinter',
    'title': '(Seig Manager)Seigmanager\'s WTON Minter function will be removed.',
    'prettyName': '',
    'explanation':
`Seigmanger (seigniorage managing contract) has a Minter function for WTON.
Seigmanager's MInter function for WTON can be removed through this function. It will be used when Seigmanger is updated.`,
  },
  {
    'params': {
      'aboutParam0': 'address layer2: Layer 2 contract address to slash',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'address challenger: New operator address',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
    },
    'name': 'slash',
    'title': '(Seig Manager)Layer2 operator will be changed.',
    'prettyName': '',
    'explanation':
'This function allows you to take action when an operator\'s cheating occurs. You can forcibly change the operator of the first parameter (Param1) layer 2 to the second parameter (Param2).',
  },
];

