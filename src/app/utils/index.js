import { BigNumber } from "bignumber.js";
export const BNtoNum = (value, decimal = 18) => {
    return new BigNumber(value).shiftedBy(-decimal).toNumber();
  }
  
export const NumToBN = (value, decimal = 18) => {
    return new BigNumber(value).shiftedBy(decimal);
  }