export type GlobalType = 'network_swtich' | 'termsOfUse';

export type StakeModalType =
  | 'staking'
  | 'unstaking'
  | 'restaking'
  | 'withdraw'
  | 'calculator'
  | 'layer2'
  | 'wallet'
  | 'reward'

export type ModalType = GlobalType | StakeModalType;
