import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'thank',
    loadChildren: () => import('./tab2/thank/thank.module').then(m => m.ThankPageModule)
  },


  {
    path: 'checkoutinfo',
    loadChildren: () => import('./tab2/checkoutinfo/checkoutinfo.module').then(m => m.CheckoutinfoPageModule)
  },
  {
    path: 'cartdetail',
    loadChildren: () => import('./tab2/cartdetail/cartdetail.module').then( m => m.CartdetailPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
