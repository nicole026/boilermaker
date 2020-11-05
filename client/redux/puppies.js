// individual piece of state for, in this example, puppies

import Axios from 'axios';

//initial state -- remember this is not the WHOLE state, but since i am using a reducer, this is only a piece of state. ie: though the state might ideally be { puppies: [] }, since im using a reducer, i'm only dealing with what puppies: is equal to, which in this case is an array, not the whole initial state obj.
const initialState = [];

//action type
const SET_PUPPIES = 'SET_PUPPIES';

// action creator
export const setPuppies = (puppies) => ({
  type: SET_PUPPIES,
  puppies,
});

//thunk creator
export const fetchPuppies = () => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get('/api/puppies');
      dispatch(setPuppies(data));
    } catch (err) {
      console.log('thunk error', err);
    }
  };
};

// Take a look at redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function puppiesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PUPPIES:
      return action.puppies;
    default:
      return state;
  }
}
