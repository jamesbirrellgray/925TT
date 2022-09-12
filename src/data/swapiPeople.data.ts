import { SwapiPeople } from '@interfaces/swapiPeople.interface';
import { SWAPI_BASE_URL } from '@config';
import axios from 'axios';

class SwapiPeopleData {
  public async getSwapiPeople(page?: string) {
    let res: SwapiPeople;
    try {
      const { data } = await axios.get(SWAPI_BASE_URL + 'people', {
        params: {
          ...(page ? { page: page } : {}),
        },
      });
      res = data;
      //console.log(res);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // TBC error handling
        console.log(error);
      } else {
        // TBC error handling
        console.log(error);
      }
    }
  }
}

export default SwapiPeopleData;
