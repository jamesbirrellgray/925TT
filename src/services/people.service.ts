import { hash } from 'bcrypt';
import { CreatePersonDto } from '@dtos/people.dto';
import { HttpException } from '@exceptions/HttpException';
import { People } from '@interfaces/people.interface';
import peopleModel from '@models/people.model';
import { isEmpty } from '@utils/util';

class PersonService {
  public people = new peopleModel();

  public async findAllPeople(page?: string): Promise<People> {
     // @ts-ignore
    const people: Promise<People> = this.people.findAllPeople(page);
    return people;
  }
}

export default PersonService;
