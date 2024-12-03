import '@feathersjs/transport-commons';
import { Application as ExpressFeathers } from '@feathersjs/express';

// Define un mapeo para los servicios que se extenderá en los archivos de servicios
export interface ServiceTypes {}

// Extiende el tipo `Application` para incluir canales y publicaciones
export type Application = ExpressFeathers<ServiceTypes> & {
  channel: (...names: string[]) => any;
  publish: (...args: any[]) => void;
};
