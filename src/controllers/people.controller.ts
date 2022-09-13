import { NextFunction, Request, Response } from 'express';
import personService from '@services/people.service';
import Paginagtor from '@utils/paginator';
import userService from '@services/users.service';

class PeopleController {
  public people = new personService();
  public userService = new userService();
  public getPeople = async (
    req: Request<{
      page?: number;
      per_page?: number;
      sort_by?: string;
      order?: string;
    }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get all the people and pass the sort params to the service
      const result = await this.people.findAllPeople(req.query.sort_by as string, req.query.order as string);
      // Respond and paginate
      res.status(200).json(Paginagtor(result, req.query.page, req.query.per_page));
    } catch (error) {
      next(error);
    }
  };
}

export default PeopleController;
