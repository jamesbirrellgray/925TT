import { People } from '@interfaces/people.interface';
import SwapiPeopleData from '@/data/swapiPeople.data';
import { SWAPI_BASE_URL } from '@config';

class PeopleModel {
  // Set up the data
  private swapiPeopleData = new SwapiPeopleData();

  // Send it
  public getAllThePeople = async () => {
    return await this.swapiPeopleData
      .getAllSwapiPeople({ url: SWAPI_BASE_URL + 'people' })
      .then(data => {
        const reducedPeopleData: Promise<People> = Object(data).map((person: { name: any; height: any; url: any }) => ({
          name: person.name,
          height: person.height,
          url: person.url,
        }));
        return reducedPeopleData;
      })
      .catch(err => {
        console.error('error', err);
      });
  };
}

export default PeopleModel;
