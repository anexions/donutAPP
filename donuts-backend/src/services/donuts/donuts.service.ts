import { KnexService, KnexAdapterOptions } from '@feathersjs/knex';
import { Application } from '../../declarations';

// Define la configuración del servicio
interface DonutData {
  flavor: string;
  price: number;
  quantity: number;
}

export class DonutsService extends KnexService<DonutData> {
  constructor(options: KnexAdapterOptions, app: Application) {
    super(options);
  }
}

export default function (app: Application) {
  const options = {
    Model: app.get('knex'),
    name: 'donuts',
    paginate: app.get('paginate'),
  };

  // Regresa una instancia del servicio
  return new DonutsService(options, app);

  

}

