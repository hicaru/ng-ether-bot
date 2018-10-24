import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './components/root/app-routing.module';
import { AppComponent } from './components/root/app.component';
import { PageDashboardComponent } from './components/page/page-dashboard/page-dashboard.component';
import { reducer } from './store/store';
import { PageSendTxComponent } from './components/page/page-send-tx/page-send-tx.component';


@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    PageSendTxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ etherStore: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
