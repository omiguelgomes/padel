import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamepagePageRoutingModule } from './match-routing.module';

import { MatchPage } from './match.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamepagePageRoutingModule
  ],
  declarations: [MatchPage]
})
export class MatchPageModule {}
