export type TokenTypes = 'ETH' | 'TON' | 'WTON';

export type Pages = 'Home' | 'Election' | 'Propose' | 'Agenda';
export type PageKey = 'Staking_screen' | 'Wallet_screen';

export type CheckBoxValueType = {
  page: Pages;
  values: any;
  key: string;
  pageKey: PageKey;
};

export type InputKey = Pages;

export type CheckBoxValuesType = CheckBoxValueType[] | undefined;
