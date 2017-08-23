import {FETCH_WEATHER} from '../actions/index';

/* fetch weather from given city and add to */
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data,...state]; //Take all entries inside of state and add it to new array with given action at front of array
  }
  return state;
};
