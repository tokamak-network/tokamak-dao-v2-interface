export const wtonFunctionsOfTypeB = [
  {
    'params': {
      'aboutParam0': 'address account: Address that will have the right to issue additional WTON',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'addMinter',
    'title': '(WTON)WTON Minter authority will be given.',
    'prettyName': '',
    'explanation':
`Through this function, you can give a specific account permission to create WTON.
Enter the account to be granted permission into Parma1.`,
  },
  {
    'params': {
      'aboutParam0': 'bool _callbackEnabled: true/false',
      'exampleParam0': 'false',
    },
    'name': 'enableCallback',
    'title': '(WTON)When WTON moves, it will be decided whether part of the seigniorage will be distributed to DAO and PowerTON.',
    'prettyName': '',
    'explanation':
`When Layer 2 commits, part of the seigniorage is distributed to DAO and PowerTON.
In addition, when WTON is transferred (incineration, issuance, transmission, etc.), some of the seigniorage can be distributed to DAO and PowerTON depending on the value of Param1.

If the value is True, part of the seigniorage will be distributed to DAO and PowerTON when the WTON is transferred (burn, issue, transmission, etc.), and if the value is False, the seigniorage will not be distributed.

* Commit: The act of collecting blocks from Layer 2 and entering them into Layer 1. Seigniorage (compensation) is paid when you prove that you are operating faithfully by making a commit.`,
  },
  {
    'params': {
      'aboutParam0': 'address account: Address to receive WTON',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'uint256 amount: WTON issuance amount (decimal: 27) 1000000000000000000000000000: 1 WTON',
      'exampleParam1': '1000000000000000000000000000',
    },
    'name': 'mint',
    'title': '(WTON)WTON balance will increase.',
    'prettyName': '',
    'explanation':
`This function exists because TON needs the authority to issue WTON.
Through this function, you can add a specific amount of balance to a specific account.

Enter 'address account' in the first parameter (Param1) and 'amount' in the second parameter (Param2).`,
  },
  // {
  //   'name': 'renounceMinter',
  //   'title': '',
  //   'prettyName': '',
  //   'explanation': '',
  // },
  // {
  //   'name': 'renounceOwnership',
  //   'title': '',
  //   'prettyName': '',
  //   'explanation': '',
  // },
  // {
  //   'name': 'renouncePauser',
  //   'title': '',
  //   'prettyName': '',
  //   'explanation': '',
  // },
  {
    'params': {
      'aboutParam0': 'address _seigManager: The new SeigManager address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setSeigManager',
    'title': '(WTON)Seigmanager will be updated.',
    'prettyName': '',
    'explanation':
`This function allows you to update SeigManager WTON has. SeigManager is a contract that manages the seigniorage.
Enter the seigniorage contract to be changed in the first parameter (Param1).`,
  },
  {
    'params': {
      'aboutParam0': 'address sender: The sender\'s address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'address recipient: The recipient\'s address',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
      'aboutParam2': 'uint256 amount: Amount (decimal: 27) 1000000000000000000000000000: 1 WTON',
      'exampleParam2': '1000000000000000000000000000',
    },
    'name': 'transferFrom',
    'title': '(WTON)WTON will be transferred to another address.',
    'prettyName': '',
    'explanation':
`This function allows you to transfer WTON.
Through this function, WTON in Param1 can be transferred to Param2 as much as the amount in Param3.
Enter the account of Sender in the first parameter (Param1), the account of Recipient in the second parameter (Param2), and the amount in the third parameter (Parma3).`,
  },
  {
    'params': {
      'aboutParam0': 'address target: Target contract address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'address newOwner: New owner address',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
    },
    'name': 'transferOwnership',
    'title': '(WTON)DAO\'s owner rights for WTON will be transferred.',
    'prettyName': '',
    'explanation':
'This function allows you to update DAO (contract update). Through this function, owner rights for WTON held by DAO can be transferred to param1. Enter the contract to be changed in the first parameter (Param1).',
  },
  {
    'params': {
      'aboutParam0': 'address account: Address to be burned',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'uint256 amount: Amount (decimal: 27) 1000000000000000000000000000: 1 WTON',
      'exampleParam1': '1000000000000000000000000000',
    },
    'name': 'burnFrom',
    'title': '(WTON)Certain amount of WTON will be burned.',
    'prettyName': '',
    'explanation':
`This function allows you to incinerate a certain amount of WTON held by a certain account.
Enter the address acount in the first parameter (Param1) and the amount to be burned in the second parameter (Param2).`,
  },
];

module.exports.wtonFunctionsOfTypeB = wtonFunctionsOfTypeB;
