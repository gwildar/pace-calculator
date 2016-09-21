import { combineReducers } from 'redux';

const initialSetup = { time: '0', pace: '0', distance: '0' };

const data = (state = initialSetup, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const lastChanged = (state = 'TEST', action) => {
  switch (action.type) {
    case 'UPDATE_CALCULATOR':
      // eslint-disable-next-line
      console.log(action.value);
      return action.value;
    default:
      // eslint-disable-next-line
      console.log("not working");
      return state;
  }
};

const paceCalculator = combineReducers({
  lastChanged,
  data,
});

export default paceCalculator;
