import { Application } from '../declarations';
import { DonutsService } from './donuts/donuts.service';
import { EmbalajesService } from './embalajes/embalajes.service';

export default function (app: Application): void {
  // Configuración para el servicio de donuts
  const donutsOptions = {
    Model: app.get('knex'),
    name: 'donuts', // Nombre de la tabla o colección
    paginate: app.get('paginate'),
  };

  // Configuración para el servicio de embalajes
  const embalajesOptions = {
    Model: app.get('knex'),
    name: 'embalajes', // Nombre de la tabla o colección
    paginate: app.get('paginate'),
  };

  // Registrar el servicio de donuts
  app.use('/donuts', new DonutsService(donutsOptions, app));

  // Registrar el servicio de embalajes
  app.use('/embalajes', new EmbalajesService(embalajesOptions, app));
}
