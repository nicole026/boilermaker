//Create a reducer function. If you haven't determined what your application will look like yet, this could just be a dummy function - however, you must have something to pass into your store.

// what fullstack boilermaker originally gave me:
// function appReducer (state = {}, action) {
//     return state;
//   }

import { combineReducers } from 'redux';
import puppiesReducer from './puppies';

const appReducer = combineReducers({
  puppies: puppiesReducer,
});

export default appReducer;
