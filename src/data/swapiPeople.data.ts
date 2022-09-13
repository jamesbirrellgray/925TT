import axios from 'axios';

class SwapiPeopleData {
  // Recursive collect function
  public getAllSwapiPeople = async ({ url, payload = [], resolver = null }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          const data = res.data;
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
}

export default SwapiPeopleData;
