import React from 'react';

import { RCLoading } from '@rc-shared';
import { useSelector, useDispatch } from 'react-redux';
import { KEY_ENTRY_DETAILS } from '@rc-constants';

import CloseIcon from '@material-ui/icons/Close';
import { Container, Grid, IconButton } from '@material-ui/core';
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
    const { title } = details;

    return (
      <Grid container>
        {title}

        <IconButton aria-label="close" onClick={closeDetails}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Grid>
    );
  };

  return loading ? renderLoading() : renderData();
};

export default EntryDetails;
