import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentorderPage } from './recentorder.page';

const routes: Routes = [
  {
    path: '',
    component: RecentorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentorderPageRoutingModule {}
