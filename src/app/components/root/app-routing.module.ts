import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDashboardComponent } from '../page/page-dashboard/page-dashboard.component';
import { PageSendTxComponent } from '../page/page-send-tx/page-send-tx.component';

const routes: Routes = [
  { path: '', component: PageDashboardComponent },
  { path: 'tx', component: PageSendTxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
