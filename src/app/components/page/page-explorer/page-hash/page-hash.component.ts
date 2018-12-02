import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Web3Service } from '../../../../service/eth/web3.service';
import { Web3Interfaces } from 'src/app/service/eth/web3-interface';

declare const Web3: Web3Interfaces.IWeb3;

@Component({
  selector: 'app-page-hash',
  templateUrl: './page-hash.component.html',
  styleUrls: ['./page-hash.component.scss'],
  providers: [Web3Service]
})
export class PageHashComponent implements OnInit {

  public get transactionHash(): string {
    const block = this.router.routerState.snapshot.url.split('/');

    if (block.length >= 3) {
      return block[3];
    }

    return block[3];
  }
  public utils = Web3.utils;
  public transaction: Web3Interfaces.ITransaction;

  constructor(private web3Service: Web3Service,
              private router: Router) { }

  ngOnInit() {
    this.web3Service.getTransaction(
      this.transactionHash
    ).then(transaction => {
      this.transaction = transaction;
      this.transaction.value = this.utils.fromWei(`${transaction.value}`, 'ether');
      this.transaction.value += 'ether';
      this.transaction.gasPrice = this.utils.fromWei(`${transaction.gasPrice}`, 'Gwei');
      this.transaction.gasPrice += 'Gwei';
    });
  }

}
