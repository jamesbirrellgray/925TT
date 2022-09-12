import { NextFunction, Request, Response } from 'express';
import { CreatePersonDto } from '@dtos/people.dto';
import { People } from '@interfaces/people.interface';
import personService from '@services/people.service';

class PeopleController {
  public personService = new personService();

  public getPeople = async (
    req: Request<{
      page?: string;
    }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const findAllPeopleData: People = await this.personService.findAllPeople(req.query.page as string);

      res.status(200).json(findAllPeopleData);
    } catch (error) {
      next(error);
    }
  };
}

export default PeopleController;
