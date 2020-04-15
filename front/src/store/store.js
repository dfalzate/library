import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

// store.subscribe(() => console.log('Store getState', store.getState()));
