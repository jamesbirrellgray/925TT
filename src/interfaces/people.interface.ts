export interface People {
  count:    number;
  next:     string;
  previous: null;
  results:  Person[];
}

export interface Person {
  name: string;
  height: string;
  url: string;
}