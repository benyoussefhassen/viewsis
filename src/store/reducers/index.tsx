import {combineReducers} from '@reduxjs/toolkit';
import homeReducer from './home/home.reducer';

const appReducer = combineReducers({
  home: homeReducer,
});

export default appReducer;
