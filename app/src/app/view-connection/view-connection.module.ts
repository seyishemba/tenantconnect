import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewConnectionPageRoutingModule } from './view-connection-routing.module';

import { ViewConnectionPage } from './view-connection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewConnectionPageRoutingModule
  ],
  declarations: [ViewConnectionPage]
})
export class ViewConnectionPageModule {}
