import { Component } from '@angular/core'; //Esto es la libreria de angular.

@Component({
  //transforma la clase en componente.

  selector: 'app-counter',
  template: `<h3>Eres el cliente numero: {{ contador }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="restore()">Restaurar</button>
    <hr />`,
})
export class CounterComponent {
  public title: string = 'donutShop';
  public contador: number = 10;

  //le vamos a crear un metodo para sumar o restar al contador.
  //void significa que no me va a regresar nada.

  public increaseBy(value: number): void {
    this.contador += value;
  }

  //Ahora la de restar. En vez de tener dos funciones, usamos la de arriba para sumar y restar y ahorramos codigo.
  //public decreaseBy(value: number): void {
  //this.contador -= value;
  //}

  //Ahora vamos a hacer una para restaurar el contador a 10.

  public restore(): void {
    this.contador = 10;
  }
}
