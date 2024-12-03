import { Application } from '../declarations';
import { DonutsService } from './donuts/donuts.service';

export default function (app: Application): void {
  const options = {
    Model: app.get('knex'),
    name: 'donuts',
    paginate: app.get('paginate'),
  };

  app.use('/donuts', new DonutsService(options, app));
}
