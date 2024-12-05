import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../services/donuts.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donuts: any[] = []; // Lista de donuts
  newDonut = { flavor: '', price: 0, quantity: 0 }; // Objeto inicializado con los campos requeridos

  constructor(private donutsService: DonutsService) {}

  async ngOnInit() {
    await this.getDonuts();
  }

  async getDonuts() {
    try {
      this.donuts = await this.donutsService.getDonuts(); // Asigna la lista obtenida del backend
      console.log('Donuts cargados:', this.donuts); // Verifica que se están cargando los datos
    } catch (error) {
      console.error('Error al cargar donuts:', error);
      this.donuts = []; // Asegúrate de que siempre sea un array
    }
  }
  

  async createDonut() {
    try {
      const createdDonut = await this.donutsService.createDonut(this.newDonut);
  
      // Asegúrate de que this.donuts es un array antes de usar .push()
      if (Array.isArray(this.donuts)) {
        this.donuts.push(createdDonut); // Añade el nuevo donut
      } else {
        console.error('this.donuts no es un array:', this.donuts);
      }
  
      this.newDonut = { flavor: '', price: 0, quantity: 0 }; // Limpia el formulario
    } catch (error) {
      console.error('Error al crear donut:', error);
    }
  }
  
}
