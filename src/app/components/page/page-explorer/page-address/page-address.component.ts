import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Web3Interfaces } from 'src/app/service/eth/web3-interface';
import { Web3Service } from 'src/app/service/eth/web3.service';

@Component({
  selector: 'app-page-address',
  templateUrl: './page-address.component.html',
  styleUrls: ['./page-address.component.scss'],
  providers: [Web3Service]
})
export class PageAddressComponent implements OnInit {

  public get address(): string {
    const block = this.router.routerState.snapshot.url.split('/');

    for (let address of block) {
      if (this.web3Service.utils.isAddress(address)) {
        return address;
      }
    }

    return null;
  }
  public addressInfo: {nonce: number | string, balance: number | string};

  constructor(private web3Service: Web3Service,
              private router: Router) { }

  ngOnInit() {
    if (!this.address) {
      this.router.navigate(['explorer']);
    }

    this.web3Service
        .getAddress(this.address)
        .then(data => this.addressInfo = data);
  }

}
