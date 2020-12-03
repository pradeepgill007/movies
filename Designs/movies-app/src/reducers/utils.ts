import { Movies } from '../util/inteface';

export function updateObject(oldState: any, newValues: any) {
  return { ...oldState, ...newValues }
}

interface HomeMovies {
  [key: string]: HomeMoviesInner[];
}

interface HomeMoviesInner {
    id: string,
    poster: string
}

export function getMoviesByGenres(movies: Movies[]) {
  const tempAray: HomeMovies = {};

  movies.map((movie) => {

    const tempObj: HomeMoviesInner = { 
      id : movie.id,
      poster: movie.poster
    };

    movie.genres.forEach((genre: string) => {
      if(!tempAray[genre]){
        tempAray[genre] = [];
      }
        tempAray[genre].push(tempObj);
    });

  });
  return tempAray;
}
