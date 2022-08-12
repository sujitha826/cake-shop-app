import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import CakeContainer from './compnents/CakeContainer';
import IceCreamContainer from './compnents/IceCreamContainer';
import UsersContainer from './compnents/UsersContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
