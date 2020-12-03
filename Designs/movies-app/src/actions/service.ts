import axios, { AxiosResponse } from 'axios';
import { Movies } from '../util/inteface';

import { useEffect } from 'react';
import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query'

export function serviceCall(requestUrl: string) {

  // const { isLoading, error, data } = useQuery('repoData', () =>
  //    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //      res.json()
  //    )
  //  )

  // if (process.env.REACT_APP_ENVIROMENT === "dev") {
  //   requestUrl.url = `data/${requestUrl.url}.json`;
  // }

  const result: {
    data: Movies[],
    error: string
  } = {
    data: [],
    error: ''
  }

  return axios.get(requestUrl, {
    headers: { 'Authorization': 'Bearer Wookie2019' }
  }).then((response: AxiosResponse) => {
      result.data = response.data.movies;
      result.error = '';
      return result;
    })
    .catch(error => {
      result.data = [];
      result.error = error;
      return result;
    });
}