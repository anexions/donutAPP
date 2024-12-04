import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { DonutComponent } from "./donuts/donut/donut.component";
import { ListaComponent } from './donuts/lista/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CounterComponent, DonutComponent, ListaComponent],
})
export class AppComponent {
  public title: string = 'donutShop';
  //public contador: number = 10;

  //IMPORTANTE: EL COMPONENTE CONTADOR AUNQUE ESTÁ AQUI, YA SE USARÁ SIEMPRE EL QUE HEMOS CREADO.

  //le vamos a crear un metodo para sumar o restar al contador.
  //void significa que no me va a regresar nada.

  //public increaseBy(value: number): void {
  //this.contador += value;
  //}

  //Ahora la de restar. En vez de tener dos funciones, usamos la de arriba para sumar y restar y ahorramos codigo.
  //public decreaseBy(value: number): void {
  //this.contador -= value;
  //}

  //Ahora vamos a hacer una para restaurar el contador a 10.

  //public restore(): void {
  //this.contador = 10;
  //}
}
