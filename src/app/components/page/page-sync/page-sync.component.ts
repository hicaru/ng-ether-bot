import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ISoketEvent, WSEvent, IAddresses } from 'src/app/store/config';
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
  public addresses: IAddresses[];

  private redux: Observable<ISoketEvent> = this.store.select('etherStore');
  public jumbotron: IJumbotron;

  constructor(private store: Store<ISoketEvent>,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.addresses = [
      { address: '0xA98060409a31FdF92754ADD44645d273578185C7' },
      { address: '0xA98060409a31FdF92754ADD44645d273578185C7' },
      { address: '0xA98060409a31FdF92754ADD44645d273578185C7' },
      { address: '0xA98060409a31FdF92754ADD44645d273578185C7' },
      { address: '0xA98060409a31FdF92754ADD44645d273578185C7' }
    ];
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
      console.log(fBody);
    }
  }

}
