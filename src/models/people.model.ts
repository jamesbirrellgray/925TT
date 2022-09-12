import { People, Person } from '@interfaces/people.interface';
import SwapiPeopleData from '@/data/swapiPeople.data';
import { SwapiPeople, SwapiPerson } from '@interfaces/swapiPeople.interface';

class PeopleModel {
  public swapiPeopleData = new SwapiPeopleData();

  public async findAllPeople(page?: string): Promise<Person[]> {
    // Get the data from the model (SWAPI Request)
    const peopleData: SwapiPeople = await this.swapiPeopleData.getSwapiPeople(page);
    const peopleResults = this.mapReducePeople(peopleData);
    // @ts-ignore
    return peopleResults;
  }

  private mapReducePeople(swapiPeople: SwapiPeople) {
    const peopleDataResults: SwapiPerson[] = swapiPeople.results;
    // Map to new object
    const reducedPeopleData = peopleDataResults.map(person => ({ name: person.name, height: person.height, url: person.url }));
    // inject new people list
    const peopleResults: People = { ...swapiPeople, results: reducedPeopleData };
    return peopleResults;
  }
}

export default PeopleModel;
