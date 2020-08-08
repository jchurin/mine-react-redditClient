import React from 'react';
import { injectReducer } from '@rc-redux';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { KEY_ENTRY_LIST, KEY_ENTRY_DETAILS } from '@rc-constants';
import Collapse from '@material-ui/core/Collapse';
import entryListReducer from './components/entry-list/reducer';
import entryDetailsReducer from './components/entry-details/reducer';
import EntryList from './components/entry-list';
import EntryDetails from './components/entry-details';

const HomePage = () => {
  injectReducer(KEY_ENTRY_LIST, entryListReducer);
  injectReducer(KEY_ENTRY_DETAILS, entryDetailsReducer);

  const list = useSelector((state) => state[KEY_ENTRY_LIST] || {})?.list;
  const details = useSelector((state) => state[KEY_ENTRY_DETAILS])?.details;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={details ? 6 : 12}>
          <EntryList posts={list} />
        </Grid>
        {details && (
          <Grid item>
            <Collapse in={details} collapsedHeight={0}>
              <EntryDetails />
            </Collapse>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default HomePage;
