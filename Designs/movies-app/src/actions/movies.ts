import { serviceCall } from './service';

export function showLoader() {
  return {
    type: 'SHOW_LOADER',
    payload: true
  };
}

export function getMoviesList() {
  return {
    type: 'GET_MOVIES_LIST',
    payload: serviceCall('https://wookie.codesubmit.io/movies')
  };
}