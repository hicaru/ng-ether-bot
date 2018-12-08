import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ISoketEvent, WSEvent } from 'src/app/store/config';
import { IJumbotron } from '../../ui/ui-jumbotron/ui-jumbotron.component';



@Component({
  selector: 'app-page-sync',
  templateUrl: './page-sync.component.html',
  styleUrls: ['./page-sync.component.scss']
})
export class PageSyncComponent implements OnInit {

  public txCalc = this.fb.group({
    address: ['', Validators.required],
    take: ['', Validators.required],
    skip: ['', Validators.required]
  });
  public addresses: string[];
  public hashs: {hash: string, color: string, url: string}[] = [];
  private redux: Observable<ISoketEvent> = this.store.select('etherStore');
  public jumbotron: IJumbotron;

  constructor(private store: Store<ISoketEvent>,
              private fb: FormBuilder) {}

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: WSEvent.ADDRESSES_SHOW });
    }, 500);

    this.redux.subscribe(event => {
      if (!event) {
        return null;
      }

      switch (event.type) {

        case WSEvent.WALLET_INFO:
          if (!this.addresses) {
            this.addresses = event.body;
            this.txCalc.patchValue({
              address: this.addresses[0],
              take: 100,
              skip: 0
            });
          }
          break;

        case WSEvent.RUN:
          this.addresses = event.body['addresses'];
          this.txCalc.patchValue({
            address: this.addresses[0],
            take: 100,
            skip: 0
          });
          break;

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

        default:
          break;
      }
    });
  }

  public onSubmit() {
    if (this.txCalc.status === 'VALID') {
      const fBody = {
        address: this.txCalc.value['address'],
        data: {
          take: this.txCalc.value['take'],
          skip: this.txCalc.value['skip']
        }
      };
      this.store.dispatch({ type: WSEvent.SYNCHRONIZATION, body: fBody });
    }
  }

}
