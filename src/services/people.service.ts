import { hash } from 'bcrypt';
import { CreatePersonDto } from '@dtos/people.dto';
import { HttpException } from '@exceptions/HttpException';
import { People } from '@interfaces/people.interface';
import peopleModel from '@models/people.model';
import { isEmpty } from '@utils/util';

class PersonService {
  public people = new peopleModel();

  public async findAllPeople(page?: string, sort_by?: string, order?: string) {
    // @ts-ignore
    const people = await this.people.findAllPeople(page);
    console.log(people);
    let poepleSorted = people;
    switch (sort_by) {
      case 'Alphabetcial':
        poepleSorted = people;
      case 'Appearances':
        poepleSorted = people;
      default:
        poepleSorted = people;
    }
  }

  private sortAlphabetical(order) {
    
  }
}

export default PersonService;
