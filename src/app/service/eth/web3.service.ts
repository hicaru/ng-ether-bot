import { Injectable } from '@angular/core';
import { from, range } from 'rxjs';
import { takeWhile, map, concatAll } from 'rxjs/operators';

import { IBlock, ITransaction } from './web3-interface';
import { Observable } from 'rxjs';

declare const Web3;


@Injectable({ providedIn: 'root' })
export class Web3Service {

  private providers = 'wss://kovan.infura.io/ws';
  private web3 = new Web3(this.providers);

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
    let lostBlocks: number[] = [];

    for (let i = blockNumber; i <= blockNumber + count; i++) {
      await lostBlocks.push(i);
    }

    return lostBlocks;
  }

  public async getBlock(): Promise<IBlock> {
    const blockNUmber = await this.getBlockNumber();
    return this.web3.eth.getBlock(blockNUmber);
  }

  public getTransaction(transactionHash: string): Promise<ITransaction> {
    return this.web3.eth.getTransaction(transactionHash);
  }

}
