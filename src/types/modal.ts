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
  | 'propose'
  | 'vote'

export type ModalType = GlobalType | StakeModalType;

// export type ModalDataType = ProposeModalDataType

export type ProposeModalProps = | {
  disabled: boolean
  explanation: string
  inputs: any
  name: string
  params: any
  prettyName: string
  title: string
} | undefined

export type VoteModalProps = {
  agendaid: string
}