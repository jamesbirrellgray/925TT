export interface Films extends Array<Film> {}

export interface Film {
  episode_id:    number;
  characters:    string[];
}