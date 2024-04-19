export const tonFunctionsOfTypeB = [
  {
    'params': {
      'aboutParam0': 'address account: Address that will have the right to issue additional TON',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'addMinter',
    'title': '(TON)Minter authority will be given to a specific address.',
    'prettyName': '',
    'disabled': false,
    'explanation':
`Through this function, you can give permission to create TON to a specific address.
Enter the address to be authorized in the first parameter (Param1).`,
  },
  // {
  //   'params': {
  //     'aboutParam0': '',
  //     'exampleParam0': '',
  //   },
  //   'name': 'enableCallback',
  //   'title': '',
  //   'prettyName': '',
  // 'disabled': false,
  //   'explanation': '',
  // },
  {
    'params': {
      'aboutParam0': 'address account: Address to receive TON',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'uint256 amount: TON issuance amount (decimal: 18) 1000000000000000000: 1 TON',
      'exampleParam1': '1000000000000000000',
    },
    'name': 'mint',
    'title': '(TON) TON balance will increase.',
    'prettyName': '',
    'disabled': false,
    'explanation':
`This function exists because WTON needs the authority to issue TON.
Through this function, you can add a specific amount of balance to a specific account.

Enter 'address account' in the first parameter (Param1) and 'amount' in the second parameter (Param2).`,
  },
  {
    'params': {
      'aboutParam0': 'address target: Address from which TON issuance authority is to be removed',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'renounceMinter',
    'title': '(TON)TON Minter authority will be removed.',
    'prettyName': '',
    'disabled': false,
    'explanation':
`Minter reserves the authority to issue TON.
Through this function, you can remove Minter's authority.`,
  },
  // {
  //   'name': 'renounceOwnership',
  //   'title': '',
  //   'prettyName': '',
  // 'disabled': false,
  //   'explanation': '',
  // },
  // {
  //   'name': 'renouncePauser',
  //   'title': '',
  //   'prettyName': '',
  // 'disabled': false,
  //   'explanation': '',
  // },
  {
    'params': {
      'aboutParam0': 'address sender: The sender\'s address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'address recipient: The recipient\'s address',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
      'aboutParam2': 'uint256 amount: Amount (decimal: 18) 1000000000000000000: 1 TON',
      'exampleParam2': '1000000000000000000',
    },
    'name': 'transferFrom',
    'title': '(TON)TON will be transferred to another address.',
    'prettyName': '',
    'disabled': false,
    'explanation':
`This function allows you to send TON.
Through this function, TON in the first parameter (Param1) can be transferred to the second parameter (Param2) as much as the amount in the third parameter (Param3).
Enter the Sender account in Param1, the Recipient account in Param2, and the amount in Parma3.`,
  },
  // {
  //   'name': 'transferOwnership',
  //   'title': '',
  //   'prettyName': '',
// 'disabled': false,
  //   'explanation': '',
  // },
  // {
  //   'name': 'setSeigManager',
  //   'title': '',
  //   'prettyName': '',
// 'disabled': false,
  //   'explanation': '',
  // },
];
