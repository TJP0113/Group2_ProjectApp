import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutinfoPageRoutingModule } from './checkoutinfo-routing.module';

import { CheckoutinfoPage } from './checkoutinfo.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutinfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CheckoutinfoPage]
})
export class CheckoutinfoPageModule {}
