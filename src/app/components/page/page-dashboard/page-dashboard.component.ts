import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { ISoketEvent, WSEvent, IAddresses } from 'src/app/store/config';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  public returnedArray: IAddresses[];
  public gasPrice: number;
  public gasLimit: number;
  public addresses: IAddresses[];

  private redux: Observable<ISoketEvent> = this.store.select('etherStore');

  constructor(private store: Store<ISoketEvent>) { }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: WSEvent.BALANCE_ALL });
      this.store.dispatch({ type: WSEvent.SET_GAS_PRICE, body: 1 });
      this.store.dispatch({ type: WSEvent.SET_GAS_LIMIT, body: 1 });
    }, 1500);

    this.redux.subscribe(event => {
      if (!event) {
        return null;
      }

      switch (event.type) {

        case WSEvent.RUN:
          this.store.dispatch({ type: WSEvent.BALANCE_ALL });
          this.gasPrice = event.body['gasPrice'];
          this.gasLimit = event.body['gasLimit'];
          break;

        case WSEvent.BALANCE_INFO:
          this.addresses = event.body;
          this.returnedArray = this.addresses.slice(0, 10);
          break;

        case WSEvent.GET_GAS_LIMIT:
          this.gasLimit = event.body;
          break;

        case WSEvent.GET_GAS_PRICE:
          this.gasPrice = event.body;
          break;


        default: break;
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

  public pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.addresses.slice(startItem, endItem);
  }

}
