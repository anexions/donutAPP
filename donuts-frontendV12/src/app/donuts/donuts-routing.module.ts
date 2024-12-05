import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutsComponent } from './donuts.component'; //el componente que cargara cuando naveguemos a esa ruta.

const routes: Routes = [
  { path: '', component: DonutsComponent } // Mostrará este componente en /donuts
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonutsRoutingModule { }
