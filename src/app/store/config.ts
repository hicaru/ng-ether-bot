import { Action } from '@ngrx/store';

export enum Actions {
  SEND = 'SEND',
  WITHDRAW = 'WITHDRAW',
  LOCALSWIPTE = 'LOCALSWIPTE',
  MODAL = 'MODAL',
  HASH = 'HASH'
}

export enum WSEvent {
  RUN = '0',
  SEND_A_TRANSACTION = '1',
  SEND_POOL_TRANSACTION = '2',
  SYNCHRONIZATION = '3',
  BALANCE = '4',
  BALANCE_ALL = '5',
  ADDRESSES_SHOW = '6',
  SET_GAS_PRICE = '7',
  SET_GAS_LIMIT = '8',
  WALLET_INFO = '9'
}

export interface ISoketEvent extends Action {
  body?: any;
  type: string;
  code?: string;
  error?: string;
}

export interface IAddresses {
  id?: number;
  address: string;
  privateKey: string;
}
