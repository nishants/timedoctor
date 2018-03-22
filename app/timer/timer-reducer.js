import {TIME_UPDATED, TIME_STOPPED, TIME_STARTED} from './timer-actions';

export default (state = {time: 0}, action)=> {
  switch(action.type){
    case TIME_UPDATED :
      return {...state, time: action.time, running: true};
    case TIME_STOPPED :
      return {...state, running: false};
    case TIME_STARTED :
      return {...state, running: true};
    default:
      return state;
  }
}