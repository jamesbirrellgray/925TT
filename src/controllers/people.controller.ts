import { NextFunction, Request, Response } from 'express';
import { People } from '@interfaces/people.interface';
import personService from '@services/people.service';
import Paginagtor from '@utils/paginator'
import mockData from '../data/data.json';


class PeopleController {
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
    //console.log(data);
    try {
      const results = mockData;

      // const paginated = paginate(mockData, 20);
      // @ts-ignore
      //const findAllPeopleData: People = await this.personService.findAllPeople(req.query.page as string, req.query.sort_by as string,  req.query.order as string);
      res.status(200).json(Paginagtor(results, req.query.page, req.query.per_page));
    } catch (error) {
      next(error);
    }
  };
}

export default PeopleController;
