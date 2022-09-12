export interface SwapiPeople {
  count:    number;
  next:     string;
  previous: null;
  results:  SwapiPerson[];
}

export interface SwapiPerson {
  name:       string;
  height:     string;
  mass:       string;
  hair_color: string;
  skin_color: string;
  eye_color:  string;
  birth_year: string;
  gender:     SwapiGender;
  homeworld:  string;
  films:      string[];
  species:    string[];
  vehicles:   string[];
  starships:  string[];
  created:    Date;
  edited:     Date;
  url:        string;
}

export enum SwapiGender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}
