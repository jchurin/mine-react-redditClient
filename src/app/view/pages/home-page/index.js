import React from 'react';
import { injectReducer } from '@rc-redux';
import { useSelector } from 'react-redux';
import entryListReducer from './components/entry-list/reducer';
import entryDetailsReducer from './components/entry-details/reducer';
import { KEY_ENTRY_LIST, KEY_ENTRY_DETAILS } from '../../../data/constants';
import EntryList from './components/entry-list';

const HomePage = () => {
  injectReducer(KEY_ENTRY_LIST, entryListReducer);
  injectReducer(KEY_ENTRY_DETAILS, entryDetailsReducer);

  const list = useSelector((state) => state[KEY_ENTRY_LIST] || {})?.list;
  const details = useSelector((state) => state[KEY_ENTRY_DETAILS]);

  console.log(list, details);

  return (
    <>
      <EntryList posts={list} />
    </>
  );
};

export default HomePage;
