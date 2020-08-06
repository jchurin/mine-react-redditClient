import React from 'react';
import { injectReducer } from '@rc-redux';
import { useSelector } from 'react-redux';
import entryListReducer from './data/entry-list/reducer';
import entryDetailsReducer from './data/entry-details/reducer';
import { KEY_ENTRY_LIST, KEY_ENTRY_DETAILS } from '../../../data/constants';
import EntryList from './components/entry-list';
import EntryDetails from './components/entry-details';
import ErrorScreen from './components/error-screen';

const HomePage = () => {
  injectReducer(KEY_ENTRY_LIST, entryListReducer);
  injectReducer(KEY_ENTRY_DETAILS, entryDetailsReducer);

  const list = useSelector((state) => state[KEY_ENTRY_LIST]);
  const details = useSelector((state) => state[KEY_ENTRY_DETAILS]);

  console.log(list, details);

  return (
    <>
      <EntryList />
      <EntryDetails />
      <ErrorScreen />
    </>
  );
};

export default HomePage;
