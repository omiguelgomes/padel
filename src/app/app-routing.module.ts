import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'gamepage/:id',
    loadChildren: () => import('@pages/game/game.module').then(m => m.GamepagePageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('@pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'result/:id',
    loadChildren: () => import('@pages/result/result.module').then(m => m.ResultpagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('@pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'resultpage/:id',
    loadChildren: () => import('@pages/result/result.module').then(m => m.ResultpagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
