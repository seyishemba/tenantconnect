import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRequestPageRoutingModule } from './add-request-routing.module';

import { AddRequestPage } from './add-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRequestPageRoutingModule
  ],
  declarations: [AddRequestPage]
})
export class AddRequestPageModule {}
