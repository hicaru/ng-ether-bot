import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ISoketEvent, WSEvent } from 'src/app/store/config';

declare const web3: any;

@Component({
  selector: 'app-page-tx-pool',
  templateUrl: './page-tx-pool.component.html',
  styleUrls: ['./page-tx-pool.component.scss']
})
export class PageTxPoolComponent implements OnInit {

  public hashs: {hash: string, color: string, url: string}[] = [];
  public txCalc = this.fb.group({
    to: ['', Validators.required],

    limit: ['', Validators.required],
    ofset: ['', Validators.required],

    min: [''],
    max: [''],

    gasmin: ['', Validators.required],
    gasmax: ['', Validators.required],

    timemin: ['', Validators.required],
    timemax: ['', Validators.required],

    data: ['']
  });

  private redux: Observable<ISoketEvent> = this.store.select('etherStore');

  constructor(private store: Store<ISoketEvent>,
              private fb: FormBuilder) {}

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: WSEvent.SET_GAS_PRICE, body: 1 });
    }, 500);

    this.txCalc.patchValue({
      limit: 100,
      ofset: 0,
      min: 0,
      max: 1,
      timemin: 100,
      timemax: 10000
    });

    this.redux.subscribe(event => {
      if (!event) {
        return null;
      }

      switch (event.type) {

        case WSEvent.ON_HASH:
          this.hashs.push({
            hash: event.body['hash'],
            color: '',
            url: 'https://kovan.etherscan.io/tx/' + event.body['hash']
          });
          break;
        case WSEvent.ON_BLOCK:
          this.hashs.filter(el => {
            if (el.hash === event.body['block']['transactionHash']) {
              el.color = 'bg-success';
            }

            return el;
          });
          break;

        case WSEvent.GET_GAS_PRICE:
          this.txCalc.patchValue({
            gasmin: event.body / 10e8,
            gasmax: event.body / 10e8
          });
          break;

        default:
          break;
      }
    });
  }

  public onSubmit() {
    if (this.txCalc.status === 'VALID') {
      const fBody = {
        address: this.txCalc.value['to'],
        data: {
          take: +this.txCalc.value['limit'],
          skip: +this.txCalc.value['ofset']
        },
        min: +web3.toWei(this.txCalc.value['min']),
        max: +web3.toWei(this.txCalc.value['max']),
        gas: {
          max: +web3.toWei(this.txCalc.value['gasmax'], 'gwei'),
          min: +web3.toWei(this.txCalc.value['gasmin'], 'gwei')
        },
        time: {
          max: +this.txCalc.value['timemax'],
          min: +this.txCalc.value['timemin']
        },
        contractCode: this.txCalc.value['data']
      };
      this.store.dispatch({ type: WSEvent.SEND_POOL_TRANSACTION, body: fBody });
    }
  }

}
