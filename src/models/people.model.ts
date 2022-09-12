import { Person } from '@interfaces/people.interface';
import SwapiPeopleData from '@/data/swapiPeople.data';
import { SwapiPeople, SwapiPerson } from '@interfaces/swapiPeople.interface';

class PersonModel {
  public swapiPeopleData = new SwapiPeopleData();

  public async findAllPeople(): Promise<Person[]> {
    // Get the data from the model (SWAPI Request)
    const peopleData: SwapiPeople = await this.swapiPeopleData.getSwapiPeople();
    // For this Task extract the results
    const peopleDataResults: SwapiPerson[] = peopleData.results;
    // Map to new object
    const reducedPeopleData = peopleDataResults.map(person => ({ name: person.name, height: person.height, url: person.url }));

    return reducedPeopleData;
  }
}

export default PersonModel;
