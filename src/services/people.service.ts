import { hash } from 'bcrypt';
import { CreatePersonDto } from '@dtos/people.dto';
import { HttpException } from '@exceptions/HttpException';
import { Person } from '@interfaces/people.interface';
import personModel from '@models/people.model';
import { isEmpty } from '@utils/util';


class PersonService {
  public people = personModel;

  public async findAllPeople(): Promise<Person[]> {
    const people: Person[] = this.people;
    return people;
  }
}

export default PersonService;
