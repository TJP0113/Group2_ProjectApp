import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentorderPageRoutingModule } from './recentorder-routing.module';

import { RecentorderPage } from './recentorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentorderPageRoutingModule
  ],
  declarations: [RecentorderPage]
})
export class RecentorderPageModule {}
