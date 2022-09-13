import { People, Person } from '@interfaces/people.interface';
import SwapiPeopleData from '@/data/swapiPeople.data';
import { SwapiPeople, SwapiPerson } from '@interfaces/swapiPeople.interface';
import { SWAPI_BASE_URL } from '@config';

class PeopleModel {

  // Set up the data
  public swapiPeopleData = new SwapiPeopleData();

  // Send it
  public getAllThePeople = async () => {
    return await this.swapiPeopleData.getAllSwapiPeople({ url: SWAPI_BASE_URL + 'people' })
      .then(data => {
        // @ts-ignore
        // Reduce / Map unwanted data
        const reducedPeopleData = data.map(person => ({ name: person.name, height: person.height, url: person.url }));
        return reducedPeopleData;
      })
      .catch(err => {
        console.error('error', err);
      });
  };
}

export default PeopleModel;
