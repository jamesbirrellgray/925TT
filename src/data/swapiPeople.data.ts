import { SwapiPeople, SwapiPerson } from '@interfaces/swapiPeople.interface';
import { SWAPI_BASE_URL } from '@config';
import axios from 'axios';
import _ from 'lodash';
import { response } from 'express';
import { ReadableStreamBYOBReader } from 'stream/web';

class SwapiPeopleData {
  public getSwapiPeople = async (page?: string) => {
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
  };

  private getAllSwapiPeople = async ({ url, payload = [], resolver = null }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          const data = res.data;
          //console.log(data);
          //@ts-ignore
          const updatedPayload = [...payload, ...data.results];

          if (data.next) {
            this.getAllSwapiPeople({
              url: data.next,
              payload: updatedPayload,
              resolver: resolver || resolve,
            });
          } else {
            if (resolver) resolver(updatedPayload);
            resolve(updatedPayload);
          }
        })
        .catch(err => {
          console.error('error', err);
        });
    });
  };

  public runGetAllThePeople = async () => {
   await this.getAllSwapiPeople({ url: SWAPI_BASE_URL + 'people' }).then(data => {
     
      //@ts-ignore
      //data.forEach(item => console.log(item.name));
      //@ts-ignore
      //console.log(data);
      return data;
    }).catch(err => {
      console.error('error', err);
    });
  }
}

export default SwapiPeopleData;
