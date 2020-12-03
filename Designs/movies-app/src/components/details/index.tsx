import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

function Detail() {
  const params = useParams();

  useEffect(() => {
    getMovieById();
  },[getMovieById]);

  return (
    <div>{params}</div>
  );
}

export default Detail;
