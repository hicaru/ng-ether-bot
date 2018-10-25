import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ISoketEvent } from 'src/app/store/config';
import { IJumbotron } from '../../ui/ui-jumbotron/ui-jumbotron.component';


@Component({
  selector: 'app-page-tx-pool',
  templateUrl: './page-tx-pool.component.html',
  styleUrls: ['./page-tx-pool.component.scss']
})
export class PageTxPoolComponent implements OnInit {

  public txCalc = this.fb.group({
    to: ['', Validators.required],

    limit: ['', Validators.required],
    ofset: ['', Validators.required],

    min: ['', Validators.required],
    max: ['', Validators.required],

    gasmin: ['', Validators.required],
    gasmax: ['', Validators.required],

    timemin: ['', Validators.required],
    timemax: ['', Validators.required],

    data: ['']
  });

  private redux: Observable<ISoketEvent> = this.store.select('etherStore');
  public jumbotron: IJumbotron;

  constructor(private store: Store<ISoketEvent>,
              private fb: FormBuilder) {}

  ngOnInit() {
  }

  public onSubmit() {
    if (this.txCalc.status === 'VALID') {
      const fBody = {
        address: this.txCalc.value['to'],
        data: {
          take: this.txCalc.value['limit'],
          skip: this.txCalc.value['ofset']
        },
        min: this.txCalc.value['min'] * 10e18,
        max: this.txCalc.value['max'] * 10e18,
        gas: {
          max: this.txCalc.value['gasmax'] * 10e8,
          min: this.txCalc.value['gasmin'] * 10e8
        },
        time: {
          max: this.txCalc.value['timemax'],
          min: this.txCalc.value['timemin']
        }
      };

      const hash = '0xea5664f6bd0aa14804601855319a7fa6c438cc098eb17a666bed3250aa0b8a08';
      this.jumbotron = {
        h1: 'Transaction created',
        p: hash,
        a: {
          url: 'https://kovan.etherscan.io/tx/' + hash,
          p: 'show in etherscan'
        }
      };
      console.log(fBody);
    }
  }

}
