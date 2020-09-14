import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'mini-game', loadChildren: () => import('./modules/mini-game/game.module').then(m => m.GameModule) },
  { path: 'form-example', loadChildren: () => import('./modules/form-examples/form-example.module').then(m => m.FormExampleModule) },
  { path: 'api-example', loadChildren: () => import('./modules/api-example/apli-example.module').then(m => m.ApliExampleModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
