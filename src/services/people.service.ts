import { People } from '@interfaces/people.interface';
import { Films } from '@/interfaces/films.interface';
import peopleModel from '@models/people.model';
import FilmModel from '@/models/films.model';
import Sorted from '@utils/sorted';

class PeopleService {
  private people = new peopleModel();
  private films = new FilmModel();

  public async findAllPeople(sort_by?: string, order?: string) {
    // @ts-ignore
    const people: Promise<People> = await this.people.getAllThePeople();
    // @ts-ignore
    const films: Promise<Films> = await this.films.getAllTheFilms();

    // empty array to store sorted array
    let poepleSorted: Promise<People>;
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
      // Task 3 sort alphabetically
      case 'Alphabetical':
        poepleSorted = Sorted(this.addApperences(films, people), 'name', ordered);
        break;
      // Task 4 sort by Appearances
      case 'Appearances':
        poepleSorted = Sorted(this.addApperences(films, people), 'appearances', ordered);
        break;
      default:
        poepleSorted = this.addApperences(films, people);
    }

    return poepleSorted;
  }

  // Step 4 - Filter by appearences
  private addApperences = (films, people) => {
    // make array of appearances
    const appearances = [].concat.apply(
      [],
      films.map(a => a.characters),
    );
    // counts the number of appearences
    const countAppearances = (films, url) => films.reduce((a, v) => (v === url ? a + 1 : a), 0);
    // could have use map but a forEach modigies the actual array
    // this adds an appearnces peoperty with count as the value
    people.forEach(person => {
      var url = person.url;
      person.appearances = countAppearances(appearances, url);
    });
    // @ts-ignore
    return people;
  };
}

export default PeopleService;
