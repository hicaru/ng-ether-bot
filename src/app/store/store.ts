import { WSEvent, ISoketEvent } from './config';


export function reducer(state: ISoketEvent, action: ISoketEvent) {
  switch (action.type) {

    case WSEvent.ADDRESSES_SHOW:
      return action;

    case WSEvent.WALLET_INFO:
      return action;

    case WSEvent.SEND_A_TRANSACTION:
      return action;

    case WSEvent.WALLET_GET_PRIVATE:
      return action;
    case WSEvent.WALLET_EXPORT:
      return action;

    case WSEvent.SEND_POOL_TRANSACTION:
      return action;

    case WSEvent.SYNCHRONIZATION:
      return action;

    case WSEvent.ON_HASH:
      return action;
    case WSEvent.ON_BLOCK:
      return action;

    case WSEvent.SET_GAS_LIMIT:
      return action;
    case WSEvent.SET_GAS_PRICE:
      return action;
    case WSEvent.GET_GAS_LIMIT:
      return action;
    case WSEvent.GET_GAS_PRICE:
      return action;

    case WSEvent.RUN:
      return action;

    case WSEvent.BALANCE_INFO:
      return action;
    case WSEvent.BALANCE_ALL:
      return action;

    default:
      return state;
  }
}
