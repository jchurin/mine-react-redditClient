import React from 'react';

import { RCLoading } from '@rc-shared';
import { useSelector, useDispatch } from 'react-redux';
import { KEY_ENTRY_DETAILS } from '@rc-constants';

import CloseIcon from '@material-ui/icons/Close';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import actions from './action';

const EntryDetails = () => {
  const dispatch = useDispatch();

  const { loading, details } = useSelector(
    (state) => state[KEY_ENTRY_DETAILS] || {}
  );

  const renderLoading = () => (
    <Container spacing={4}>
      <RCLoading />
    </Container>
  );

  const closeDetails = () => {
    dispatch(actions.removeDetails());
  };

  const renderData = () => {
    const { title, url, author, num_comments: numComments, score } = details;

    return (
      <Grid container>
        <Grid item xs={8} md={10}>
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={4} md={2} align="right">
          <IconButton aria-label="close" onClick={closeDetails}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={12}>
          <img src={url} alt={title} style={{ height: '50vh' }} />
        </Grid>
        <Grid item xs={4} md={4}>
          {`Author: ${author}`}
        </Grid>
        <Grid item xs={4} md={4}>
          {`Comments: ${numComments}`}
        </Grid>
        <Grid item xs={4} md={4}>
          {`Score: ${score}`}
        </Grid>
      </Grid>
    );
  };

  return loading ? renderLoading() : renderData();
};

export default EntryDetails;
