import { WSEvent, ISoketEvent } from './config';


export function reducer(state: ISoketEvent, action: ISoketEvent) {
  switch (action.type) {

    case WSEvent.ADDRESSES_SHOW:
      return action;

    case WSEvent.WALLET_INFO:
      return action;

    case WSEvent.SEND_A_TRANSACTION:
      return action;

    case WSEvent.SET_GAS_LIMIT:
      return action;

    case WSEvent.SET_GAS_PRICE:
      return action;

    case WSEvent.RUN:
      return action;

    default:
      break;
  }
}
