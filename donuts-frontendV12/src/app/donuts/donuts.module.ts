import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutsComponent } from './donuts.component';
import { FormsModule } from '@angular/forms';
import { DonutsRoutingModule } from './donuts-routing.module';

@NgModule({
  declarations: [DonutsComponent],
  imports: [
    CommonModule,
    FormsModule, // Agrega esta línea
    DonutsRoutingModule
  ]
})
export class DonutsModule { }
