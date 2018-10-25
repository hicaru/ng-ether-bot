import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISoketEvent, WSEvent, IAddresses } from 'src/app/store/config';
import { Store } from '@ngrx/store';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

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
    this.gasPrice = 3000000000;
    this.gasLimit = 21000;

    this.addresses = [
      { address: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5', balance: 0.11 },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', balance: 0.13 },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', balance: 0.1 },
      { address: '0xCaE90A5C7cab75c6D5543Da9ca7983ea92E9139d', balance: 0 },
      { address: '0x6DEF755cfaCeA2f5489E72578289b26e3Dfe5198', balance: 0.51 },
      { address: '0xE799402FeE2d32CcEbcF4bF7896149D533363586', balance: 0.71 },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', balance: 0.13 },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', balance: 0.1 },
      { address: '0xCaE90A5C7cab75c6D5543Da9ca7983ea92E9139d', balance: 0 },
      { address: '0x6DEF755cfaCeA2f5489E72578289b26e3Dfe5198', balance: 0.14432 },
      { address: '0xE799402FeE2d32CcEbcF4bF7896149D533363586', balance: 0.234 },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', balance: 0.65 },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', balance: 546.1 },
      { address: '0xCaE90A5C7cab75c6D5543Da9ca7983ea92E9139d', balance: 54654 },
      { address: '0x6DEF755cfaCeA2f5489E72578289b26e3Dfe5198', balance: 0.324 },
      { address: '0xE799402FeE2d32CcEbcF4bF7896149D533363586', balance: 654.71 },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', balance: 0.243 },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', balance: 654.1 },
      { address: '0xCaE90A5C7cab75c6D5543Da9ca7983ea92E9139d', balance: 6566 },
      { address: '0x6DEF755cfaCeA2f5489E72578289b26e3Dfe5198', balance: 0.65754 },
      { address: '0xE799402FeE2d32CcEbcF4bF7896149D533363586', balance: 0.87 },
      { address: '0xEbc73D4C1CB4eeeb1aF0B30c7d9b8F0356801b26', balance: 1.23423 }
    ];
    this.returnedArray = this.addresses.slice(0, 10);
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
