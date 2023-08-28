export const layer2RegistryFunctionsOfTypeB = [
  {
    'params': {
      'aboutParam0': 'address layer2: Layer 2 contract address to slash',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'renounceOwnership',
    'title': '(Layer2 Registry)DAO\'s owner rights will be removed.',
    'prettyName': '',
    'explanation':
'DAO has owner rights for Layer2Registry (a registry for Layer 2 into Seigmanager). Sender\'s owner rights can be removed through this function. It will be used when the DAO is updated.',
  },
  {
    'params': {
      'aboutParam0': 'address newOwner: Address to which owner authority for Layer2Registry is transferred',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'transferOwnership',
    'title': '(Layer2 Registry)DAO\'s owner rights will be changed.',
    'prettyName': '',
    'explanation':
'DAO has ownership rights to Layer2Registry (a registry for Layer 2 into Seigmanager). This function allows you to pass the Sender\'s owner rights to the first parameter (Param1). It will be used when the DAO is updated.',
  },
];

module.exports.layer2RegistryFunctionsOfTypeB = layer2RegistryFunctionsOfTypeB;
