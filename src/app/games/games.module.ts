import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesPage } from './games.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GamesRoutingModule } from './games-routing.module';
import {GamecardComponent} from "../gamecard/gamecard.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GamesRoutingModule
  ],
  declarations: [GamesPage, GamecardComponent]
})
export class GamesModule {}
