import { People } from '@interfaces/people.interface';
import peopleModel from '@models/people.model';
import Sorted from '@utils/sorted';

class PeopleService {
 
  public people = new peopleModel();

  public async findAllPeople(sort_by?: string, order?: string) {
    // @ts-ignore
    const people = await this.people.getAllThePeople();
    // empty array to store sorted array
    let poepleSorted = [];
    // Set ascending / decending
    let ordered = true;
    switch (order) {
      case null:
        ordered = true;
        break;
      case 'Accending':
        ordered = true;
        break;
      case 'Deccending':
        ordered = false;
        break;
      default:
        ordered = true;
    }  
    switch (sort_by) {
      case "Alphabetical":
        poepleSorted = Sorted(people, 'name', ordered);
        break;
      case 'Appearances':
        poepleSorted = people;
      default:
        poepleSorted = people;
    }

    return poepleSorted;
  }

}

export default PeopleService;
