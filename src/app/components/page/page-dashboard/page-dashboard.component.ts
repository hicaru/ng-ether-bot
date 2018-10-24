import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISoketEvent, WSEvent, IAddresses } from 'src/app/store/config';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  public gasPrice: number;
  public gasLimit: number;
  public addresses: IAddresses;

  private redux: Observable<ISoketEvent> = this.store.select('etherStore');

  constructor(private store: Store<ISoketEvent>) { }

  ngOnInit() {
    this.redux.subscribe(event => {
      if (!event) {
        return null;
      }

      switch (event.type) {

        case WSEvent.RUN:
          this.gasPrice = event.body['gasPrice'];
          this.gasLimit = event.body['gasLimit'];
          this.addresses = event.body['addresses'];
          break;

        default:
          break;
      }
    });
  }

  public onGasPrice(value: number) {
    this.store.dispatch({
      type: WSEvent.SET_GAS_PRICE,
      body: value * 10e8
    });
  }

  public onGasLimit(value: number) {
    this.store.dispatch({
      type: WSEvent.SET_GAS_LIMIT,
      body: +value
    });
  }

}
