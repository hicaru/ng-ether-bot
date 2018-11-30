import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../../../service/eth/web3.service';
import { IBlock } from '../../../service/eth/web3-interface';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-page-explorer',
  templateUrl: './page-explorer.component.html',
  styleUrls: ['./page-explorer.component.scss'],
  providers: [Web3Service]
})
export class PageExplorerComponent implements OnInit {

  public lostBlocks: Observable<number[]> = from(this.web3.getLostBlockNumber(20));

  constructor(private web3: Web3Service) { }

  ngOnInit() {
    this.web3.blockEvents.subscribe(console.log);
  }

}
