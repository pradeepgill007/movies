import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

import { showLoader, getMoviesList } from '../../actions/movies';
import { Props, MapStateToProps } from './types';
import homeStyle from './styles';

// API hitting twise becuse show loader

function Home(props: Props) {

  const { getMoviesList, moviesByGenres, loaderFlag, movies } = props
  const classes = homeStyle();

  console.log('Home props', moviesByGenres);
  useEffect(() => {
    getMoviesList();
  },[getMoviesList]);

  if(loaderFlag || !moviesByGenres){
    return <div className={classes.loader}><CircularProgress /></div>
  }

  if (!Object.keys(moviesByGenres).length){
    return <div>No movie found. Please try again</div>
  }

  return (
      <React.Fragment>{
        Object.keys(moviesByGenres).map((movie, i: number) => {
            return (
              <React.Fragment key={i}>
                <h1>{movie}</h1>
                {
                  moviesByGenres[movie].map((poster: any, index: number) => <Link to={poster.id}>
                  <img key={index} src={poster.poster} alt={movie} /></Link>)
                }
              </React.Fragment>
            )
        })
      }
      </React.Fragment>
  );
}

const mapStateToProps = (state: MapStateToProps) => {
  console.log('state Home ==>', state);
  const { moviesReduce } = state;
  return {
    loaderFlag: moviesReduce.loaderFlag,
    moviesByGenres: moviesReduce.moviesByGenres,
    movies: moviesReduce.movies
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showLoader: () => {
      dispatch(showLoader());
    },
    getMoviesList: () => {
      dispatch(getMoviesList());
    }
  };
};

export default connect(
  // connect HOC
  mapStateToProps,
  mapDispatchToProps
)(Home);
