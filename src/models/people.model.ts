import { People, Person } from '@interfaces/people.interface';
import SwapiPeopleData from '@/data/swapiPeople.data';
import { SwapiPeople, SwapiPerson } from '@interfaces/swapiPeople.interface';

class PeopleModel {

  public swapiPeopleData = new SwapiPeopleData();
  peopleData: SwapiPerson[];
 

  // constructor() {
  //   this.peopleData = []
  // }
  // init() {
  //    // @ts-ignore
  //   this.peopleData = this.swapiPeopleData.runGetAllThePeople();
  // }

  // public findAllPeople = async (page?: string): Promise<People> => {
  //   const peepData = this.peopleData;
  //   //console.log(peepData);
  //   // Get the data from the model (SWAPI Request)
  //   const peopleData: SwapiPeople = await this.swapiPeopleData.getSwapiPeople(page);
  //   const peopleResults = this.mapReducePeople(peopleData);
  //   // @ts-ignore
  //   return peopleResults;
  // }

  // // public getAllThePeople = (page?: string) => {
  // //   // @ts-ignore
  // //   const allThePeople: SwapiPerson[] = this.swapiPeopleData.runGetAllThePeople(page);
  // //   console.log(allThePeople);
  // //   // reduce the people data
  // //   const peopleResults = this.mapFReduceMock(allThePeople);
  // //   return peopleResults;
  // // }

   

  // private mapReducePeople(swapiPeople: SwapiPeople) {
  //   const peopleDataResults = swapiPeople.results;
  //   // Map to new object
  //   const reducedPeopleData = peopleDataResults.map(person => ({ name: person.name, height: person.height, url: person.url }));
  //   // inject new people list
  //   const peopleResults: People = { ...swapiPeople, results: reducedPeopleData };
  //   return peopleResults;
  // }

  // private mapFReduceMock(swapiPeople) {
  //   const reducedPeopleData = swapiPeople.map(person => ({ name: person.name, height: person.height, url: person.url }));
  //   const peopleResults: People = { count: 0, next: 'poop', previous: 'dance', results: reducedPeopleData };
  //   return peopleResults;
  // }
}

const validator = async () => {

  const mad = new SwapiPeopleData();
  const serverTest = await mad.runGetAllThePeople();
  console.log(serverTest);
 };
 
 validator();

export default PeopleModel;
