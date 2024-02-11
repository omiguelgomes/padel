import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamepagePageRoutingModule } from './gamepage-routing.module';

import { GamepagePage } from './gamepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamepagePageRoutingModule
  ],
  declarations: [GamepagePage]
})
export class GamepagePageModule {}
