import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDashboardComponent } from '../page/page-dashboard/page-dashboard.component';
import { PageSendTxComponent } from '../page/page-send-tx/page-send-tx.component';
import { PageTxPoolComponent } from '../page/page-tx-pool/page-tx-pool.component';
import { PageSyncComponent } from '../page/page-sync/page-sync.component';
import { PageExportComponent } from '../page/page-export/page-export.component';
import { PageExplorerComponent } from '../page/page-explorer/page-explorer.component';

const routes: Routes = [
  { path: '', component: PageDashboardComponent },
  { path: 'tx', component: PageSendTxComponent },
  { path: 'txpool', component: PageTxPoolComponent },
  { path: 'sync', component: PageSyncComponent },
  { path: 'export', component: PageExportComponent },
  { path: 'explorer', component: PageExplorerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
