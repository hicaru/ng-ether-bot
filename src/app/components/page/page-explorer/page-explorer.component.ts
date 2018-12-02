import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../../../service/eth/web3.service';
import { Web3Interfaces } from '../../../service/eth/web3-interface';


@Component({
  selector: 'app-page-explorer',
  templateUrl: './page-explorer.component.html',
  styleUrls: ['./page-explorer.component.scss'],
  providers: [Web3Service]
})
export class PageExplorerComponent implements OnInit {

  public lostBlocks = [];
  public countOfBlocks = 20;

  constructor(private web3: Web3Service) { }

  ngOnInit() {
    this.web3.getLostBlockNumber(this.countOfBlocks).then(blocks => {
      this.lostBlocks = blocks;
    });

    this.web3.blockEvents.subscribe((newBlock: Web3Interfaces.IBlock) => {
      this.lostBlocks.splice(0, 0, newBlock.number);
      delete this.lostBlocks[this.lostBlocks.length];
    });
  }

}
