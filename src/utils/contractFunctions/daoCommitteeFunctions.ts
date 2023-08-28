export const daoCommitteeFunctionsOfTypeB = [
  //   {
  //     'params': {
  //       'aboutParam0': 'bytes32 role: Authority to add',
  //       'exampleParam0': '0',
  //       'aboutParam1': 'address account: Address to be authorized',
  //       'exampleParam1': '0x0000000000000000000000000000000000000000',
  //     },
  //     'name': 'grantRole',
  //     'title': '',
  //     'prettyName': '',
  //     'explanation':
  // `This function allows you to grant owner rights (owner rights are displayed as 0) for DAO. You can give the DAO owner rights to the second parameter (Param2).
  // If you want to grant owner rights, enter 0 in the first parameter (Param1).`,
  //   },
  //   {
  //     'params': {
  //       'aboutParam0': 'bytes32 role: Authority to remove',
  //       'exampleParam0': '0',
  //       'aboutParam1': 'address account: Address from which authority is removed',
  //       'exampleParam1': '0x0000000000000000000000000000000000000000',
  //     },
  //     'name': 'renounceRole',
  //     'title': '',
  //     'prettyName': '',
  //     'explanation':
  // `This function allows you to remove owner rights (owner rights are marked as 0) for the DAO.
  // If you want to remove the owner's authority, you can enter authority (the owner's authority is displayed as 0) in the first parameter (Param1) and your own address in the second parameter (Param2).`,
  //   },
  //   {
  //     'params': {
  //       'aboutParam0': 'bytes32 role: Authority to remove',
  //       'exampleParam0': '0',
  //       'aboutParam1': 'address account: Address from which authority is removed',
  //       'exampleParam1': '0x0000000000000000000000000000000000000000',
  //     },
  //     'name': 'revokeRole',
  //     'title': '',
  //     'prettyName': '',
  //     'explanation':
  // 'This function allows you to remove someone else\'s authority. If you want to remove the owner authority, enter the authority (owner authority is displayed as 0) in param1 and the address of the target whose authority you want to remove in param2.',
  //   },
  {
    'params': {
      'aboutParam0': 'address _seigManager: New Seigmanager address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setSeigManager',
    'title': '(DAO Committee)DAO\'s Seigmanager contract will be upgraded.',
    'prettyName': '',
    'explanation':
  'This function is used when upgrading the Seigmanager contract (seigniorage managing contract) owned by DAO. Enter the Seigmanager contract address to be upgraded in the first parameter (Param1). It will be used when Seigmanager is upgraded.',
  },
  {
    'params': {
      'aboutParam0': 'address[] _candidateContracts: Candidate contract address to change Seigmanager address',
      'exampleParam0': '[0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000001]',
      'aboutParam1': 'address _seigManager: New Seigmanager address',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setCandidatesSeigManager',
    'title': '(DAO Committee)Seigmanager contract of candidate\'s contract will be upgraded.',
    'prettyName': '',
    'explanation':
  'This function is used when upgrading the Seigmanager contract (seigniorage managing contract) held by the candidate. Enter the candidate in the first parameter (Param1) and the Seigmanager contract address to be upgraded in the second parameter (Param2).',
  },
  {
    'params': {
      'aboutParam0': 'address[] _candidateContracts: Candidate contract address to change DAO contract address',
      'exampleParam0': '[0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000001]',
      'aboutParam1': 'address _committee: New DAO contract address',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setCandidatesCommittee',
    'title': '(DAO Committee)DAO contract of candidate\'s contract will be upgraded.',
    'prettyName': '',
    'explanation':
  'This function is used when upgrading the Seigmanager contract (seigniorage managing contract) held by the candidate. Enter the candidate in the first parameter (Param1) and the DAO contract address to be upgraded in the second parameter (Param2).',
  },
  {
    'params': {
      'aboutParam0': 'address _daoVault: New DAO Vault address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setDaoVault',
    'title': '(DAO Committee)DAO Vault will be upgraded.',
    'prettyName': '',
    'explanation':
  'This function is used when the DAO Vault is upgraded. Enter the DAO contract address to be upgraded in the first parameter (Param1).',
  },
  {
    'params': {
      'aboutParam0': 'address _layer2Registry: New Layer2Registry address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setLayer2Registry',
    'title': '(DAO Committee)Layer2Registry will be upgraded.',
    'prettyName': '',
    'explanation':
  'This function is used when Layer2Registry (registry for Layer 2 into Seigmanager) is upgraded. Enter the DAO contract address to be upgraded in the first parameter (Param1).',
  },
  {
    'params': {
      'aboutParam0': 'address _agendaManager: New AgendaManager address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setAgendaManager',
    'title': '(DAO Committee)DAO AgendaManager will be upgraded.',
    'prettyName': '',
    'explanation':
  'This function is used when the DAO AgendaManager is upgraded. Enter the DAO contract address to be upgraded in the first parameter (Param1).',
  },
  {
    'params': {
      'aboutParam0': 'address _candidateFactory: New CandidateFactory address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setCandidateFactory',
    'title': '(DAO Committee)CandidateFactory will be upgraded.',
    'prettyName': '',
    'explanation':
  'This function is used when CandidateFactory is upgraded. Enter the DAO contract address to be upgraded in the first parameter (Param1).',
  },
  {
    'params': {
      'aboutParam0': 'address _ton: New TON address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setTon',
    'title': '(DAO Committee)TON will be upgraded.',
    'prettyName': '',
    'explanation':
  'This function is used when TON is upgraded. Enter the DAO contract address to be upgraded in param1.',
  },
  // {
  //   'params': {
  //     'aboutParam0': 'address layer2: Layer 2 contract address to slash',
  //     'exampleParam0': '0x0000000000000000000000000000000000000000',
  //   },
  //   'name': 'registerOperatorByOwner',
  //   'title': '',
  //   'prettyName': '',
  //   'explanation': '',
  // },
  {
    'params': {
      'aboutParam0': 'uint256 _agendaID: The agenda number to finish',
      'exampleParam0': '13',
    },
    'name': 'endAgendaVoting',
    'title': '(DAO Committee)If an agenda is rejected, it will be finally closed.',
    'prettyName': '',
    'explanation':
  'This function finally closes an agenda if the agenda is rejected.',
  },
  {
    'params': {
      'aboutParam0': 'uint256 _agendaID: The agenda number to be changed',
      'exampleParam0': '13',
      'aboutParam1': 'uint256 _status: The progress of the agenda',
      'exampleParam1': '5',
      'aboutParam2': 'uint256 _result: Voting result of the agenda',
      'exampleParam2': '3',
    },
    'name': 'setAgendaStatus',
    'title': '(DAO Committee)The DAO will change the outcome of an agenda regardless of the result of the vote on the agenda.',
    'prettyName': '',
    'explanation':
  'This function allows the DAO to change the outcome of the agenda regardless of the vote result.',
  },
];

module.exports.daoCommitteeFunctionsOfTypeB = daoCommitteeFunctionsOfTypeB;
