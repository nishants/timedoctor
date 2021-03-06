import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import timer from './../timer/timer-reducer';

const rootReducer = combineReducers({
  timer,
  router,
});

export default rootReducer;
