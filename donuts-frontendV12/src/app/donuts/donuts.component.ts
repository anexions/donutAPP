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
    this.loadDonuts();
  }

  async loadDonuts() {
    try {
      this.donuts = await this.donutsService.getDonuts();
    } catch (error) {
      console.error('Error al cargar donuts:', error);
    }
  }

  async createDonut() {
    try {
      const createdDonut = await this.donutsService.createDonut(this.newDonut);
      this.donuts.push(createdDonut); // Añade el nuevo donut a la lista local
      this.newDonut = { flavor: '', price: 0, quantity: 0 }; // Limpia el formulario
    } catch (error) {
      console.error('Error al crear donut:', error);
    }
  }
}
