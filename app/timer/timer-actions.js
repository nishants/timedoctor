const timer = require('electron').remote.require('./timer');

export const TIME_UPDATED = "TIMER/TIME_UPDATED";
export const TIME_STARTED = "TIMER/TIME_STARTED";
export const TIME_STOPPED = "TIMER/TIME_STOPPED";

export const updateTime = (dispatch,time) => dispatch({type: TIME_UPDATED, time});
export const startTimer = (dispatch) => {
  timer.start();
};
export const stopTimer  = (dispatch) => {
  timer.stop();
};
export const startedTimer = (dispatch) => {
  dispatch({type: TIME_STARTED});
};

export const stoppedTimer  = (dispatch) => {
  dispatch({type: TIME_STOPPED});
};