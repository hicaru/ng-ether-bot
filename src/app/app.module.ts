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


@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    PageSendTxComponent,
    UiJumbotronComponent,
    PageTxPoolComponent,
    PageSyncComponent,
    PageExportComponent
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
