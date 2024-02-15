import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultpagePageRoutingModule } from './result-routing.module';

import { ResultPage } from './result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultpagePageRoutingModule
  ],
  declarations: [ResultPage]
})
export class ResultpagePageModule {}
