import { Component, OnInit } from '@angular/core';
import { IAddresses, ISoketEvent, WSEvent } from 'src/app/store/config';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-export',
  templateUrl: './page-export.component.html',
  styleUrls: ['./page-export.component.scss']
})
export class PageExportComponent implements OnInit {

  public returnedArray: IAddresses[];
  public addresses: IAddresses[];

  private redux: Observable<ISoketEvent> = this.store.select('etherStore');

  constructor(private store: Store<ISoketEvent>) { }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: WSEvent.WALLET_GET_PRIVATE });
    }, 500);

    this.redux.subscribe(event => {
      if (!event) {
        return null;
      }

      switch (event.type) {

        case WSEvent.WALLET_EXPORT:
          this.addresses = event.body;
          this.returnedArray = this.addresses.slice(0, 10);
          break;

        default: break;
      }
    });
  }

  public pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.addresses.slice(startItem, endItem);
  }

}
