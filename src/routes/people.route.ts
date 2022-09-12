import { Router } from 'express';
import PeopleController from '@controllers/people.controller';
import { CreatePersonDto } from '@dtos/people.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class PeopleRoute implements Routes {
  public path = '/people';
  public router = Router();
  public peopleController = new PeopleController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.peopleController.getPeople);
  }
}

export default PeopleRoute;