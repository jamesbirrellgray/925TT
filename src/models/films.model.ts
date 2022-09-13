import { Films } from '@/interfaces/films.interface';
import SwapiFilmData from '@/data/swapiFilms.data';
import { SWAPI_BASE_URL } from '@config';

class FilmModel {
  // Set up the data
  private swapiFilmData = new SwapiFilmData();

  // Send it
  public getAllTheFilms = async () => {
    return await this.swapiFilmData
      .getAllSwapiFilms({ url: SWAPI_BASE_URL + 'films' })
      .then(data => {
        //@ts-ignore
        const reducedFilmData: Promise<Films> = data.map((film: { episode_id: any; characters: any;}) => ({
          episode_id: film.episode_id,
          characters: film.characters
        }));
        return reducedFilmData;
      })
      .catch(err => {
        console.error('error', err);
      });
  };
}

export default FilmModel;
