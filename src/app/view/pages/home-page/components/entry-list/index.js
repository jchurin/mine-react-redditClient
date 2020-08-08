import React, { useEffect } from 'react';

import { RCMainCard, RCCard, RCDivider, RCLoading } from '@rc-shared';
import Grid from '@material-ui/core/Grid';
import { injectSaga } from '@rc-redux';
import { useDispatch, useSelector } from 'react-redux';
import { KEY_ENTRY_DETAILS, KEY_ENTRY_LIST } from '@rc-constants';

import { Container } from '@material-ui/core';
import saga from './sideeffect';
import actions from './action';

const EntryList = ({ posts }) => {
  injectSaga(KEY_ENTRY_DETAILS, saga);

  const dispatch = useDispatch();

  const loading = useSelector((state) => state[KEY_ENTRY_LIST] || {})?.loading;

  useEffect(() => {
    dispatch(actions.fetchEntryList());
  }, []);

  const renderLoading = () => (
    <Container spacing={4}>
      <RCLoading />
    </Container>
  );

  const renderData = () => {
    return (
      <>
        <RCMainCard post={posts[0]} />
        <Grid container spacing={4}>
          {posts.slice(1, 3).map((post) => (
            <Grid item xs={12} md={6} key={post.title}>
              <RCCard post={post} />
            </Grid>
          ))}
        </Grid>
        <RCDivider />
        <Grid container spacing={2}>
          {posts.slice(3).map((post) => (
            <Grid item xs={12} md={12} key={post.title}>
              <RCCard key={post.title} post={post} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  return loading ? renderLoading() : renderData();
};

export default EntryList;
