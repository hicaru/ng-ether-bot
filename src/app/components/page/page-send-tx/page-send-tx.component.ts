import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ISoketEvent, WSEvent, IAddresses } from 'src/app/store/config';



@Component({
  selector: 'app-page-send-tx',
  templateUrl: './page-send-tx.component.html',
  styleUrls: ['./page-send-tx.component.scss']
})
export class PageSendTxComponent implements OnInit {

  public txCalc = this.fb.group({
    from: ['', Validators.required],
    to: ['', Validators.required],
    value: ['', Validators.required],
    gasPrice: ['', Validators.required],
    gasLimit: ['', Validators.required],
    data: ['']
  });
  public addresses: IAddresses;

  private redux: Observable<ISoketEvent> = this.store.select('etherStore');

  constructor(private store: Store<ISoketEvent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.redux.subscribe(event => {
      if (!event) {
        return null;
      }

      switch (event.type) {

        case WSEvent.RUN:
          this.addresses = event.body['addresses'];
          this.txCalc.setValue({
            'from': event.body['addresses'][0]['address'],
            'gasPrice': event.body['gasPrice'] / 10e8,
            'gasLimit': event.body['gasLimit'],
            'to': '', 'value': 0.1, 'data': ''
          });
          break;

        default:
          break;
      }
    });
  }

  public onSubmit() {
    if (this.txCalc.status === 'VALID') {
      const fBody = this.txCalc.value;
      fBody['gasPrice'] *= 10e8;
      fBody['value'] *= 10e17;
      console.log(fBody);
      this.store.dispatch({
        type: WSEvent.SEND_A_TRANSACTION,
        body: fBody
      });
    }
  }

}
