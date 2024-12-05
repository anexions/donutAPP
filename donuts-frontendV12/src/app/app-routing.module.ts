import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'donuts', loadChildren: () => import('./donuts/donuts.module').then(m => m.DonutsModule) },
  { path: '', redirectTo: '/donuts', pathMatch: 'full' }, // Redirige a donuts por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
