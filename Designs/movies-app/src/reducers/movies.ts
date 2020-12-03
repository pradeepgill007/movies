import { updateObject, getMoviesByGenres } from './utils';

const initialState = {
  loaderFlag: true,
  movies: []
}

export default function Movie(state = initialState, action: any) {

  switch (action.type) {
    case 'SHOW_LOADER': {
      return updateObject(state, { loaderFlag: action.payload });
    }
    case 'GET_MOVIES_LIST': {
      const {data: movies } = action.payload;
      const moviesByGenres = getMoviesByGenres(movies);
      return updateObject(state, { loaderFlag: false, moviesByGenres, movies});
    }

    default:
      return { ...state };
  }
}