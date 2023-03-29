import { ethers } from "ethers";
import moment from 'moment';
const formatUnits = ethers.utils.formatUnits;
const commify = ethers.utils.commify;

export function trimAddress(args: { address: string; firstChar: number; lastChar: number; dots: string }): string {
  const { address, firstChar, lastChar, dots } = args;
  const firstChatAt = address.substring(0, firstChar);
  const lastCharAt = address.substring(address.length - lastChar);
  return `${firstChatAt}${dots}${lastCharAt}`;
}


export function hexSlicer(address?: string) {
  const firstChatAt = address?.substring(0, 6);
  const lastCharAt = address?.substring(address.length - 4);
  return `${firstChatAt}...${lastCharAt}`
}

export function truncate (str: string, maxDecimalDigits: number) {
  if (str.includes('.')) {
    const parts = str.split('.'); // [ '1,234', '999999999999999999999999999' ]

    const l = maxDecimalDigits - parts[1].length > 0 ? maxDecimalDigits - parts[1].length : 0;
    return parts[0] + '.' + parts[1].slice(0, maxDecimalDigits) + '0'.repeat(l);
  }
  return str;
}

export function fromRay2 (amount?: string) {
  const amountBN = amount? ethers.BigNumber.from(amount) : '';
  return amountBN ? commify(formatUnits(amountBN, 27)) : '';
}

export function date4 (timestamp?: number) {
  if (!timestamp) return '';
  return moment.utc(timestamp * 1000).local().format('MMM, DD');
}