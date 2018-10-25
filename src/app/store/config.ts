import { Action } from '@ngrx/store';

export enum Actions {
  SEND = 'SEND',
  WITHDRAW = 'WITHDRAW',
  LOCALSWIPTE = 'LOCALSWIPTE',
  MODAL = 'MODAL',
  HASH = 'HASH'
}

export enum WSEvent {
  RUN = 'RUN',

  BALANCE = 'BALANCE',
  BALANCE_ALL = 'BALANCEALL',
  BALANCE_INFO = 'BALANCEINFO',
  ADDRESSES_SHOW = 'ADDRESSESSHOW',
  WALLET_INFO = 'WALLETINFO',

  SET_GAS_PRICE = 'SETGASPRICE',
  GET_GAS_PRICE = 'GETGASPRICE',
  SET_GAS_LIMIT = 'SETGASLIMIT',
  GET_GAS_LIMIT = 'GETGASLIMIT',

  SYNCHRONIZATION = 'SYNCHRONIZATION',
  SEND_A_TRANSACTION = 'SENDATRANSACTION',
  SEND_POOL_TRANSACTION = 'SENDPOOLTRANSACTION',
  ON_HASH = 'ONHASH',
  ON_BLOCK = 'ONBLOCK'
}

export interface ISoketEvent extends Action {
  body?: any;
  type: string;
  code?: string;
  error?: string;
}

export interface IAddresses {
  address: string;
  balance?: number;
  privateKey?: string;
}
