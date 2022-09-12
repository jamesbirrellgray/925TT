import { NextFunction, Request, Response } from 'express';
import { CreatePersonDto } from '@dtos/people.dto';
import { Person } from '@interfaces/people.interface';
import personService from '@services/people.service';

class PeopleController {

  public personService = new personService();

  public getPeople = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPeopleData: Person[] = await this.personService.findAllPeople();

      res.status(200).json({ data: findAllPeopleData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

}

export default PeopleController;