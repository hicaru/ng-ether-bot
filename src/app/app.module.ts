import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppRoutingModule } from './components/root/app-routing.module';
import { AppComponent } from './components/root/app.component';
import { PageDashboardComponent } from './components/page/page-dashboard/page-dashboard.component';
import { reducer } from './store/store';
import { PageSendTxComponent } from './components/page/page-send-tx/page-send-tx.component';
import { UiJumbotronComponent } from './components/ui/ui-jumbotron/ui-jumbotron.component';
import { PageTxPoolComponent } from './components/page/page-tx-pool/page-tx-pool.component';
import { PageSyncComponent } from './components/page/page-sync/page-sync.component';
import { PageExportComponent } from './components/page/page-export/page-export.component';
import { PageExplorerComponent } from './components/page/page-explorer/page-explorer.component';
import { PageHashComponent } from './components/page/page-explorer/page-hash/page-hash.component';
import { PageBlockComponent } from './components/page/page-explorer/page-block/page-block.component';
import { PageAddressComponent } from './components/page/page-explorer/page-address/page-address.component';


@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    PageSendTxComponent,
    UiJumbotronComponent,
    PageTxPoolComponent,
    PageSyncComponent,
    PageExportComponent,
    PageExplorerComponent,
    PageHashComponent,
    PageBlockComponent,
    PageAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ etherStore: reducer }),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
