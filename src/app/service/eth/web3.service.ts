import { Injectable } from '@angular/core';

import { Web3Interfaces } from './web3-interface';
import { Observable } from 'rxjs';

declare const Web3: Web3Interfaces.IWeb3 | any;


@Injectable({ providedIn: 'root' })
export class Web3Service {

  private providers = 'ws://127.0.0.1:8546';
  private web3: Web3Interfaces.IWeb3 = new Web3(this.providers);

  public utils: Web3Interfaces.IUtils = this.web3.utils;
  public blockEvents = new Observable(observer => {
    this.web3.eth.subscribe('newBlockHeaders', (err, event) => {
      if (err) {
        observer.error(err);
        observer.complete();
        observer.unsubscribe();
      }
      observer.next(event);
    });
  });

  constructor() { }

  public getBlockNumber(): Promise<number> {
    return this.web3.eth.getBlockNumber();
  }

  public async getLostBlockNumber(count: number): Promise<number[]> {
    const blockNumber = await this.web3.eth.getBlockNumber();
    const lostBlocks: number[] = [];

    for (let i = blockNumber; i >= blockNumber - count; i--) {
      await lostBlocks.push(i);
    }

    return lostBlocks;
  }

  public async getBlock(blockNUmber: number | string): Promise<Web3Interfaces.IBlock> {
    return this.web3.eth.getBlock(blockNUmber);
  }

  public getTransaction(transactionHash: string): Promise<Web3Interfaces.ITransaction> {
    return this.web3.eth.getTransaction(transactionHash);
  }

  public async getAddress(address: string) {
    const nonce = await this.web3.eth.getTransactionCount(address);
    const balance = await this.web3.eth.getBalance(address);

    return {
      nonce: nonce,
      balance: balance
    };
  }

}
