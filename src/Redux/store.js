import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './Reducer/index';

const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
  devTools: composeWithDevTools()
});

export default store;
