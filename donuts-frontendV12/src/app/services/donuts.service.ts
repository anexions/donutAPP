import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {
  private baseUrl = 'http://localhost:3030'; // URL del backend

  constructor() {}

  async getDonuts() {
    try {
      const response = await axios.get(`${this.baseUrl}/donuts`);
      console.log('Respuesta completa del backend:', response.data); // Para verificar
      return response.data.data || []; // Devuelve solo la lista de donuts
    } catch (error) {
      console.error('Error al obtener donuts:', error);
      throw error;
    }
  }
  

  async createDonut(donut: any) {
    try {
      const response = await axios.post(`${this.baseUrl}/donuts`, donut); // Asegúrate de que envías el objeto completo
      return response.data;
    } catch (error) {
      console.error('Error al crear donut:', error);
      throw error;
    }
  }

  
}
