import React from 'react';

import { RCLoading } from '@rc-shared';
import { useSelector } from 'react-redux';
import { KEY_ENTRY_DETAILS } from '@rc-constants';

import { Container, Grid } from '@material-ui/core';

const EntryDetails = () => {
  const { loading, details } = useSelector(
    (state) => state[KEY_ENTRY_DETAILS] || {}
  );

  const renderLoading = () => (
    <Container spacing={4}>
      <RCLoading />
    </Container>
  );

  const renderData = () => {
    const { title } = details;

    return <Grid container>{title}</Grid>;
  };

  return loading ? renderLoading() : renderData();
};

export default EntryDetails;
