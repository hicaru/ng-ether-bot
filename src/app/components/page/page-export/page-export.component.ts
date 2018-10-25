import { Component, OnInit } from '@angular/core';
import { IAddresses, ISoketEvent } from 'src/app/store/config';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-page-export',
  templateUrl: './page-export.component.html',
  styleUrls: ['./page-export.component.scss']
})
export class PageExportComponent implements OnInit {

  public returnedArray: IAddresses[];
  public gasPrice: number;
  public gasLimit: number;
  public addresses: IAddresses[];

  constructor(private store: Store<ISoketEvent>) { }

  ngOnInit() {
    this.gasPrice = 3000000000;
    this.gasLimit = 21000;

    this.addresses = [
      { address: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xCaE90A5C7cab75c6D5543Da9ca7983ea92E9139d', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x6DEF755cfaCeA2f5489E72578289b26e3Dfe5198', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xE799402FeE2d32CcEbcF4bF7896149D533363586', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xCaE90A5C7cab75c6D5543Da9ca7983ea92E9139d', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x6DEF755cfaCeA2f5489E72578289b26e3Dfe5198', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xE799402FeE2d32CcEbcF4bF7896149D533363586', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xCaE90A5C7cab75c6D5543Da9ca7983ea92E9139d', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x6DEF755cfaCeA2f5489E72578289b26e3Dfe5198', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xE799402FeE2d32CcEbcF4bF7896149D533363586', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x1A4c89B598c9D3A1E9b5E7B5545C450EDAD00F87', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xCaE90A5C7cab75c6D5543Da9ca7983ea92E9139d', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0x6DEF755cfaCeA2f5489E72578289b26e3Dfe5198', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xE799402FeE2d32CcEbcF4bF7896149D533363586', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' },
      { address: '0xD40b30dE24dEe4Cd97E635D6AAB7b5720Bd24DA0', privateKey: '0x2Fa6eD8cdEf23aBb8eC6326Ac1eb6e0597a020a5' }
    ];
    this.returnedArray = this.addresses.slice(0, 10);
  }

  public pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.addresses.slice(startItem, endItem);
  }

}
