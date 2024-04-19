export const daoVaultFunctionsOfTypeA = [
  //   {
  //     'params': {
  //       'aboutParam0': 'address _to: Address to which authority is granted',
  //       'exampleParam0': '0x0000000000000000000000000000000000000000',
  //       'aboutParam1': 'uint256 _amount: Amount (decimal: 18) 1000000000000000000: 1 TON',
  //       'exampleParam1': '1000000000000000000',
  //     },
  //     'name': 'approveTON',
  //     'title': '(DAO Vault)Permission to transfer the TON stored in DAO Vault will be granted. ',
  //     'prettyName': '',
  // 'disabled': false,
  //     'explanation':
  // `Some of the TON seigniorage generated per block is accumulated into DAO. DAO Vault is responsible for storing the seigniorage.
  // Through this function, you can grant permission to transfer the TON stored in DAO Vault to a specific address in a specific amount.`,
  //   },
  //   {
  //     'params': {
  //       'aboutParam0': 'address _to: Address to which authority is granted',
  //       'exampleParam0': '0x0000000000000000000000000000000000000000',
  //       'aboutParam1': 'uint256 _amount: Amount (decimal: 27) 1000000000000000000000000000: 1 WTON',
  //       'exampleParam1': '1000000000000000000000000000',
  //     },
  //     'name': 'approveWTON',
  //     'title': '(DAO Vault)Permission to transfer the WTON stored in DAO Vault will be granted. ',
  //     'prettyName': '',
  // 'disabled': false,
  //     'explanation':
  // `Some of the TON seigniorage generated per block is accumulated into DAO. DAO Vault is responsible for storing them.
  // Through this function, you can grant permission to transfer WTON stored in DAO Vault to a specific address in a specific amount.`,
  //   },
    {
      'params': {
        'aboutParam0': 'address _token: Token contract address',
        'exampleParam0': '0x0000000000000000000000000000000000000000',
        'aboutParam1': 'address _to: Address to which permission is granted',
        'exampleParam1': '0x0000000000000000000000000000000000000000',
        'aboutParam2': 'uint256 _amount: Amount',
        'exampleParam2': '100000000000',
      },
      'name': 'approveERC20',
      'title': '(DAO Vault)Permission to transfer the ERC20 stored in DAO Vault will be granted. ',
      'prettyName': '',
      'disabled': false,
      'explanation': 'This function allows you to grant permission to transfer specific ERC20 tokens stored in DAO Vault to a specific address in a specific amount.',
    },
    {
      'params': {
        'aboutParam0': 'address _to: Address to receive withdrawal',
        'exampleParam0': '0x0000000000000000000000000000000000000000',
        'aboutParam1': 'uint256 _amount: Amount (decimal: 18) 1000000000000000000: 1 TON',
        'exampleParam1': '1000000000000000000',
      },
      'name': 'claimTON',
      'title': '(DAO Vault)The transfer of the TON stored in the DAO Vault will be requested.',
      'prettyName': '',
      'disabled': false,
      'explanation':
    `Some of the TON seigniorage generated per block is accumulated into DAO. DAO Vault is responsible for storing the seigniorage.
    Through this function, you can request to send the TON stored in the DAO Vault to a specific address in a specific amount.`,
    },
    {
      'params': {
        'aboutParam0': 'address _to: Address to receive withdrawal',
        'exampleParam0': '0x0000000000000000000000000000000000000000',
        'aboutParam1': 'uint256 _amount: Amount (decimal: 27) 1000000000000000000000000000: 1 WTON',
        'exampleParam1': '1000000000000000000000000000',
      },
      'name': 'claimWTON',
      'title': '(DAO Vault)The transfer of the WTON stored in the DAO Vault will be requested.',
      'prettyName': '',
      'disabled': false,
      'explanation':
    `Some of the TON seigniorage generated per block is accumulated into DAO. The DAO Vault is responsible for storing the seigniorage.
    Through this function, you can request to send the WTON stored in DAO Vault to a specific address in a specific amount.`,
    },
    {
      'params': {
        'aboutParam0': 'address _token: Token contract address',
        'exampleParam0': '0x0000000000000000000000000000000000000000',
        'aboutParam1': 'address _to: Address to receive withdrawal',
        'exampleParam1': '0x0000000000000000000000000000000000000000',
        'aboutParam2': 'uint256 _amount: Amount',
        'exampleParam2': '100000000000',
      },
      'name': 'claimERC20',
      'title': '(DAO Vault)The transfer of the ERC20 stored in the DAO Vault will be requested.',
      'prettyName': '',
      'disabled': false,
      'explanation':
  'This function allows you to request that the ERC20 tokens stored in the DAO Vault be transferred to a specific address and a specific amount.',
    },
  ];
  
  export const daoVaultFunctionsOfTypeB = [
    {
      'name': 'renounceOwnership',
      'title': '(Candidate)DAO\'s authority for candidate contracts will be removed.',
      'prettyName': '',
      'disabled': false,
      'explanation':
  'The DAO holds owner rights to Vault. This function allows you to remove DAO\'s owner rights to the vault.',
    },
    {
      'params': {
        'aboutParam0': 'address newOwner: Address to which the owner authority will be transferred',
        'exampleParam0': '0x0000000000000000000000000000000000000000',
      },
      'name': 'transferOwnership',
      'title': '(Candidate)DAO\'s authority for candidate contracts will be transferred.',
      'prettyName': '',
      'disabled': false,
      'explanation':
  'The DAO holds owner rights to Vault. This function allows you to transfer owner rights for the vault held by the DAO. Enter the new owner in the first parameter (Param1).',
    },
    {
      'params': {
        'aboutParam0': 'address _ton: New TON address',
        'exampleParam0': '0x0000000000000000000000000000000000000000',
      },
      'name': 'setTON',
      'title': '(DAO Vault)TON will be upgraded.',
      'prettyName': '',
      'disabled': false,
      'explanation':
  'This function is used when TON is upgraded. Enter the new TON address in the first parameter (Param1).',
    },
    {
      'params': {
        'aboutParam0': 'address _wton: New WTON address',
        'exampleParam0': '0x0000000000000000000000000000000000000000',
      },
      'name': 'setWTON',
      'title': '(DAO Vault)WTON will be upgraded.',
      'prettyName': '',
      'disabled': false,
      'explanation':
  'This function is used when WTON is upgraded. Enter the new WTON address in the first parameter (Param1).',
    },
  ];
  
  