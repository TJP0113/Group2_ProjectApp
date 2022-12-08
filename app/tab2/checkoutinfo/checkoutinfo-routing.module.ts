import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutinfoPage } from './checkoutinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutinfoPageRoutingModule {}
