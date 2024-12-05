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
      return response.data;
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

  async deleteDonut(id: string) {
    try {
      const response = await axios.delete(`${this.baseUrl}/donuts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar donut:', error);
      throw error;
    }
  }
}
