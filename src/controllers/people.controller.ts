import { NextFunction, Request, Response } from 'express';
// Task 1
import personService from '@services/people.service';
// Task 2
import Paginagtor from '@utils/paginator';

class PeopleController {
  // Load the data
  private people = new personService();
  // Handle the request
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
