import { Router } from 'express';
import { routes as peopleRoutes } from './routes/PeopleRoute';

export const routes = Router();

routes.use('/', peopleRoutes);
