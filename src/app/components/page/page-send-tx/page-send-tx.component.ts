import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ISoketEvent, WSEvent, IAddresses } from 'src/app/store/config';
import { IJumbotron } from '../../ui/ui-jumbotron/ui-jumbotron.component';
import { Web3Interfaces } from '../../../service/eth/web3-interface';

declare const Web3: Web3Interfaces.IWeb3;

@Component({
  selector: 'app-page-send-tx',
  templateUrl: './page-send-tx.component.html',
  styleUrls: ['./page-send-tx.component.scss']
})
export class PageSendTxComponent implements OnInit {

  public txCalc = this.fb.group({
    from: ['', Validators.required],
    to: ['', Validators.required],
    value: [''],
    gasPrice: ['', Validators.required],
    gasLimit: ['', Validators.required],
    data: ['']
  });
  public addresses: IAddresses;

  private redux: Observable<ISoketEvent> = this.store.select('etherStore');
  private utils: Web3Interfaces.IUtils = Web3.utils;

  public jumbotron: IJumbotron;

  constructor(private store: Store<ISoketEvent>,
              private fb: FormBuilder) {}

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: WSEvent.ADDRESSES_SHOW });
      this.store.dispatch({ type: WSEvent.SET_GAS_PRICE, body: 1 });
      this.store.dispatch({ type: WSEvent.SET_GAS_LIMIT, body: 1 });
    }, 500);

    this.redux.subscribe(event => this.onStoreEvent(event));
  }

  private onStoreEvent(event: ISoketEvent): void {
    if (!event) {
      return null;
    }

    switch (event.type) {

      case WSEvent.WALLET_INFO:
        if (!this.addresses) {
          this.addresses = event.body;
          this.txCalc.patchValue({
            from: this.addresses[0]['address'],
            value: 0
          });
        }
        break;

      case WSEvent.RUN:
        this.addresses = event.body['addresses'];
        this.txCalc.setValue({
          'from': this.addresses[0]['address'],
          'gasPrice': this.utils.fromWei(`${event.body['gasPrice']}`, 'Gwei'),
          'gasLimit': event.body['gasLimit'],
          'to': '', 'value': 0, 'data': ''
        });
        break;

      case WSEvent.GET_GAS_LIMIT:
        this.txCalc.patchValue({ gasLimit: event.body });
        break;

      case WSEvent.GET_GAS_PRICE:
        this.txCalc.patchValue({
          gasPrice: this.utils.fromWei(`${event.body}`, 'Gwei')
        });
        break;

      case WSEvent.ON_HASH:
        const hash = event.body['hash'];
        this.jumbotron = {
          h1: 'Transaction created',
          p: hash,
          a: {
            url: 'https://kovan.etherscan.io/tx/' + hash,
            p: 'show in etherscan'
          }
        };
        break;
      case WSEvent.ON_BLOCK:
        this.jumbotron = {
          h1: 'Transaction block',
          p: `blockNumber: ${event.body['block']['blockNumber']}, ` +
             `from: ${event.body['block']['from']}, ` +
             `to: ${event.body['block']['to']}, ` +
             `gasUsed: ${event.body['block']['gasUsed']}, ` +
             `status: ${event.body['block']['status']}, ` +
             `transactionHash: ${event.body['block']['transactionHash']}, `,
          a: {
            url: 'https://kovan.etherscan.io/tx/' + event.body['block']['transactionHash'],
            p: 'show in etherscan'
          }
        };
        break;

      default:
        break;
    }
  }

  public onSubmit() {
    if (this.txCalc.status === 'VALID') {
      const fBody = this.txCalc.value;
      fBody['gasPrice'] = this.utils.toWei(`${fBody['gasPrice']}`, 'Gwei');
      fBody['value'] = this.utils.toWei(`${fBody['value']}`, 'ether');

      this.store.dispatch({
        type: WSEvent.SEND_A_TRANSACTION,
        body: fBody
      });
    }
  }

}
