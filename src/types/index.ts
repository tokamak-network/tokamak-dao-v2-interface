// import { AbiItem } from 'web3-utils';

export type TokenTypes = 'ETH' | 'TON' | 'WTON';

export type Pages = 'Home' | 'Election' | 'Propose' | 'Agenda';
export type PageKey = number | 'description';

export type CheckBoxValueType = {
  page: Pages;
  values: any;
  key: string;
  pageKey: PageKey;
};

export type InputKey = Pages;

export type CheckBoxValuesType = CheckBoxValueType[] | undefined;

export type AbiFunctions = AbiFunction[]

export type StateMutabilityType = 'pure' | 'view' | 'nonpayable' | 'payable';
export type AbiType = 'function' | 'constructor' | 'event' | 'fallback' | 'receive';

export type onChainEffect = {
  name: string,
  target: string,
  title: string,
  types: [],
  values: Object
}

export type AbiFunction = {
  params?: string,
  name?: string | any,
  title?: string,
  prettyName?: string,
  explanation?: string,
}

export interface AbiItem {
  anonymous?: boolean;
  constant?: boolean;
  inputs?: AbiInput[];
  name?: string | any;
  outputs?: AbiOutput[];
  payable?: boolean;
  stateMutability?: StateMutabilityType | string;
  type: AbiType | string;
  gas?: number;
  params?: string,
  title?: string,
  prettyName?: string,
  explanation?: string,
  selector?: string
}

export interface AbiInput {
  name: string;
  type: string;
  indexed?: boolean;
  components?: AbiInput[];
  internalType?: string;
}

export interface AbiOutput {
  name: string;
  type: string;
  components?: AbiOutput[];
  internalType?: string;
}
