const { ipcRenderer } = require('electron');

export const TIME_UPDATED = "TIMER/TIME_UPDATED";
export const TIME_STARTED = "TIMER/TIME_STARTED";
export const TIME_STOPPED = "TIMER/TIME_STOPPED";

export const updateTime = (dispatch,time) => dispatch({type: TIME_UPDATED, time});

export const startTimer = (dispatch) => {
  ipcRenderer.send('start-timer');
};

export const stopTimer  = (dispatch) => {
  ipcRenderer.send('stop-timer');
};

export const startedTimer = (dispatch) => {
  dispatch({type: TIME_STARTED});
};

export const stoppedTimer  = (dispatch) => {
  dispatch({type: TIME_STOPPED});
};

