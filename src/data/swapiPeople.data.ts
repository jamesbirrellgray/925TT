import { SwapiPerson } from '@interfaces/swapiPeople.interface';
import { SWAPI_BASE_URL } from '@config';
import axios from 'axios';

class SwapiPeopleData {

  public async getSwapiPeople() {
    let users: SwapiPerson[];
    try {
      const { data } = await axios.get(SWAPI_BASE_URL + 'people');
      users = data.results;
      console.log(users);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  }
}

export default SwapiPeopleData;