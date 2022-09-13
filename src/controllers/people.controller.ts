import { NextFunction, Request, Response } from 'express';
import { CreatePersonDto } from '@dtos/people.dto';
import { People } from '@interfaces/people.interface';
import personService from '@services/people.service';
import buildPaginator from 'pagination-apis';
import mockData from '../data/data.json';

class PeopleController {
  public getPeople = async (
    req: Request<{
      page?: string;
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
      res.status(200).json(this.paginator(results));
    } catch (error) {
      next(error);
    }
  };

  private paginator(items, page, per_page) {
    var page = page || 1,
      per_page = per_page || 10,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page),
      total_pages = Math.ceil(items.length / per_page);
    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems,
    };
  }

  // public paginatedResults = (req, res) => {
  //   const { query: { currentPage, pageSize } } = req;
  //   const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
  //   const count = data.length;
  //   const paginatedData = data.slice(offset, offset + limit);
  //   const paginationInfo = paginate(currentPage, count, paginatedData);

  //   return res.status(200).json({
  //     success: true,
  //     data: { result: paginatedData, meta: paginationInfo }
  //   });
  // }

  // public personService = new personService();

  // public paginatedResults = () => {
  //   return async(req, res, next) => {
  //     const page = parseInt(req.query.page);
  //     const limit = parseInt(req.query.limit);
  //     const skipIndex = (page - 1) * limit;
  //     const results = {};

  //     try {
  //       results.results = await User.find()
  //         .sort({ _id: 1 })
  //         .limit(limit)
  //         .skip(skipIndex)
  //         .exec();
  //       res.paginatedResults = results;
  //       next();
  //     } catch (e) {
  //       res.status(500).json({ message: "Error Occured" });
  //     }
  //   }
  // }

  // public getPeople = async (
  //   req: Request<{
  //     page?: string,
  //     sort_by?: string,
  //     order?: string
  //   }>,
  //   res: Response,
  //   next: NextFunction,
  // ): Promise<void> => {
  //   try {
  //     // @ts-ignore
  //     const findAllPeopleData: People = await this.personService.findAllPeople(req.query.page as string, req.query.sort_by as string,  req.query.order as string);
  //     res.status(200).json(findAllPeopleData);
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default PeopleController;
