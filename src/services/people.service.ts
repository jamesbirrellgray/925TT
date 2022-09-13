import { People } from '@interfaces/people.interface';
import peopleModel from '@models/people.model';

class PeopleService {
 
  public people = new peopleModel();

  public async findAllPeople(sort_by?: string, order?: string) {
    // @ts-ignore
    const people = await this.people.getAllThePeople();
    //console.log(people);
    let poepleSorted = people;
    switch (sort_by) {
      case 'Alphabetcial':
        poepleSorted = people;
      case 'Appearances':
        poepleSorted = people;
      default:
        poepleSorted = people;
    }

    return poepleSorted;
  }

  private sortAlphabetical(order) {}

}

export default PeopleService;
