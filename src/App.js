import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import CakeContainer from './compnents/CakeContainer';
import IceCreamContainer from './compnents/IceCreamContainer';
import UsersContainer from './compnents/UsersContainer';
import DataFetching from './compnents/DataFetching';
import IntervalHookCounter from './compnents/IntervalHookCounter';
import ToggleMouseContainer from './compnents/ToggleMouseContainer';
import FocusInput from './compnents/FocusInput';
import HookTimer from './compnents/HookTimer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UsersContainer /> 
        <CakeContainer />
        <IceCreamContainer />
        <DataFetching />
        <IntervalHookCounter />
        <ToggleMouseContainer />*/}

        <FocusInput />
        <HookTimer />

      </div>
    </Provider>
  );
}

export default App;
