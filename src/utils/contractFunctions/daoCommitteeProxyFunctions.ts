const daoCommitteeProxyFunctionsOfTypeA = [
  {
    'params': {
      'aboutParam0': 'uint256 _value: Member activity subsidy per second (decimal: 18) 1000000000000000000: 1 TON',
      'exampleParam0': '1000000000000000000',
    },
    'name': 'setActivityRewardPerSecond',
    'title': '(DAO Committee)Committee\'s subsidies for DAO activities will be determined.',
    'prettyName': '',
    'explanation':
`In Tokamak DAO, DAO pays a reward (activity subsidy) to encourage the sincere activities of committees that review major governance issues.

This activity subsidy is paid per second, and through this function, the amount of TON distributed per second can be set.`,
  },
  {
    'params': {
      'aboutParam0': 'uint256 _newMaxMember: Maximum number of members',
      'exampleParam0': '5',
      'aboutParam1': 'uint256 _quorum: Quorum',
      'exampleParam1': '3',
    },
    'name': 'increaseMaxMember',
    'title': '(DAO Committee)The number of Committee members active in DAO will increase.',
    'prettyName': '',
    'explanation':
`This function allows you to increase the number of active committee members in Tokamak DAO.

The number of committee members to be increased goes into the first parameter (Param1), and the number of quorum goes into the second parameter (Param2).

For example, if there are 3 committee members currently and a function 'increaseMaxMember(2, 4)' is passed, the committee member will be 5 and the quorum will be 4.`,
  },
  {
    'params': {
      'aboutParam0': 'uint256 _reducingMemberIndex: Member index to be removed',
      'exampleParam0': '1',
      'aboutParam1': 'uint256 _quorum: Quorum',
      'exampleParam1': '3',
    },
    'name': 'decreaseMaxMember',
    'title': '(DAO Committee)The number of Committee members active in the DAO will decrease.',
    'prettyName': '',
    'explanation':
`This function allows to reduce the number of active committee members in Tokamak DAO.

The number that goes into the first parameter (Param1) is the index of the committee member to be excluded, and the number that goes into the second parameter (Param2) is the quorum.

Each committee member is assigned with an index. Through this function, you can specify the members to be excluded and the quorum to be changed accordingly.`,
  },
  {
    'params': {
      'aboutParam0': 'uint256 _quorum: Quorum',
      'exampleParam0': '3',
    },
    'name': 'setQuorum',
    'title': '(DAO Committee)The minimum number of votes for an agenda to pass will be determined.',
    'prettyName': '',
    'explanation':
`This function sets the minimum number of votes for a single item to pass.

If you record less than the minimum number of votes set here, the agenda will not pass and the agenda will be rejected.`,
  },
  {
    'params': {
      'aboutParam0': 'uint256 _fees: Agenda creation fee (decimal: 18) 1000000000000000000: 1 TON',
      'exampleParam0': '100000000000000000000',
    },
    'name': 'setCreateAgendaFees',
    'title': '(DAO Committee)The amount of TON to be burned to make an agenda will be determined.',
    'prettyName': '',
    'explanation':
`In order for an agenda to be made, a certain amount of TON must be incinerated.

This function sets the amount of TON to be burned to make an agenda.`,
  },
  {
    'params': {
      'aboutParam0': 'uint256 _minimumNoticePeriod: Agenda minimum disclosure period (unit: seconds)',
      'exampleParam0': '10000',
    },
    'name': 'setMinimumNoticePeriodSeconds',
    'title': '(DAO Committee)Minimum disclosure period of an agenda will be determined.',
    'prettyName': '',
    'explanation':
`The agenda will be published for a period of time before it is passed.

This function allows you to set the minimum disclosure period, and the unit is in seconds.

The actual disclosure period for each agenda can be set at the time of creation of the agenda, but it must be more than the minimum value set in this function.`,
  },
  {
    'params': {
      'aboutParam0': 'uint256 _minimumVotingPeriod: Agenda minimum voting period (unit: seconds)',
      'exampleParam0': '10000',
    },
    'name': 'setMinimumVotingPeriodSeconds',
    'title': '(DAO Committee)Minimum voting period of an agenda will be determined.',
    'prettyName': '',
    'explanation':
`This function allows you to set the minimum voting period, and the unit is in seconds.

The actual voting period for each agenda can be set when creating an agenda, but it must be more than the minimum value set in this function.`,
  },
];

const daoCommitteeProxyFunctionsOfTypeB = [
  {
    'params': {
      'aboutParam0': 'bytes32 role: Authority to add',
      'exampleParam0': '0',
      'aboutParam1': 'address account: Address to be authorized',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
    },
    'name': 'grantRole',
    'title': '(DAO Committee Proxy)Owner rights for DAO will be granted.',
    'prettyName': '',
    'explanation':
`This function allows you to grant owner rights (owner rights are displayed as 0) for DAO. You can give the DAO owner rights to the second parameter (Param2).
If you want to grant owner rights, enter 0 in the first parameter (Param1).`,
  },
  {
    'params': {
      'aboutParam0': 'bytes32 role: Authority to remove',
      'exampleParam0': '0',
      'aboutParam1': 'address account: Address from which authority is removed',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
    },
    'name': 'renounceRole',
    'title': '(DAO Committee Proxy)Owner rights for DAO will be removed.',
    'prettyName': '',
    'explanation':
`This function allows you to remove owner rights (owner rights are marked as 0) for the DAO.
If you want to remove the owner's authority, you can enter authority (the owner's authority is displayed as 0) in the first parameter (Param1) and your own address in the second parameter (Param2).`,
  },
  {
    'params': {
      'aboutParam0': 'bytes32 role: Authority to remove',
      'exampleParam0': '0',
      'aboutParam1': 'address account: Address from which authority is removed',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
    },
    'name': 'revokeRole',
    'title': '(DAO Committee Proxy)Authority of a specific address will be removed.',
    'prettyName': '',
    'explanation':
'This function allows you to remove someone else\'s authority. If you want to remove the owner authority, enter the authority (owner authority is displayed as 0) in param1 and the address of the target whose authority you want to remove in param2.',
  },
  {
    'params': {
      'aboutParam0': 'bool _pause: Whether to stop (True:1/ False:0)',
      'exampleParam0': '1',
    },
    'name': 'setProxyPause',
    'title': '(DAO Committee Proxy)It will be decided whether to stop DAO.',
    'prettyName': '',
    'explanation':
`Owners have the right to stop DAO. This function allows the owner to decide whether to stop DAO.
If the first Param1 value is true, DAO stops, and if it is false, it operates normally.`,
  },
  {
    'params': {
      'aboutParam0': 'address impl: New DAO contract address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'upgradeTo',
    'title': '(DAO Committee Proxy)Address of the DAO contract will be upgraded. ',
    'prettyName': '',
    'explanation':
`This function sets the new address of the DAO contract to be upgraded. Enter the DAO contract address to be upgraded in the first parameter (Param1).
It will be used when the DAO is upgraded.`,
  },
];

module.exports.daoCommitteeProxyFunctionsOfTypeA = daoCommitteeProxyFunctionsOfTypeA;
module.exports.daoCommitteeProxyFunctionsOfTypeB = daoCommitteeProxyFunctionsOfTypeB;
