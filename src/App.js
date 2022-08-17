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
import CounterUsingReducerHook from './compnents/CounterUsingReducerHook';
import CounterTwo from './compnents/CounterReducerComplex';
import ComponentC from './compnents/ComponentC';
import HolidaysFetch from './compnents/HolidaysFetch';
import Compostion from './compnents/Compostion';

export const UserContext = React.createContext();
export const TopicContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Sujitha'}>
        <TopicContext.Provider value={'CodeLearningIsFun'}>
          <ComponentC />
          <Compostion />
        </TopicContext.Provider>
      </UserContext.Provider>
    </div>
  );
  {/*<Provider store={store}>
      <div className="App">
         <UsersContainer /> 
        <CakeContainer />
        <IceCreamContainer />
        <DataFetching />
        <IntervalHookCounter />
        <ToggleMouseContainer />
        <FocusInput />
        <HookTimer />
        <CounterUsingReducerHook />
        <CounterTwo />
      </div>
    </Provider>*/}

}

export default App;
