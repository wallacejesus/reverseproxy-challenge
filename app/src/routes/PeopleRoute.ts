import { Router } from 'express';
import { create } from '../controllers/PeopleController';
export const routes = Router();

routes.get('/', create);