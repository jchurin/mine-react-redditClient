import React from 'react';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '@rc-redux';
import HomePage from './app/view/pages/home-page';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <HomePage />
    </ReduxProvider>
  );
}

export default App;
