import React from 'react';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '@rc-redux';
import ContainerPage from './app/view/pages/container-page';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <ContainerPage />
    </ReduxProvider>
  );
}

export default App;
