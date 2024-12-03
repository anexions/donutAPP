import { KnexService, KnexAdapterOptions } from '@feathersjs/knex';
import { Application } from '../../declarations';

// Define la configuración del servicio
interface EmbalajeData {
  color: string;
  price: number;
  quantity: number;
}

export class EmbalajesService extends KnexService<EmbalajeData> {
  constructor(options: KnexAdapterOptions, app: Application) {
    super(options);
  }
}

export default function (app: Application) {
  const options = {
    Model: app.get('knex'),
    name: 'embalajes',
    paginate: app.get('paginate'),
  };

  // Regresa una instancia del servicio
  return new EmbalajesService(options, app);
}
