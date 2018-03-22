import React from 'react';
import {connect} from 'react-redux';
import {updateTime, startedTimer, stoppedTimer, TIME_STARTED} from './timer-actions';

const ipcRenderer = require('electron').ipcRenderer;

class TimerListener extends React.Component {
  componentWillMount() {
    ipcRenderer.on('time-updated', (event, time) => {
      this.props.updateTimer(time);
    });
    ipcRenderer.on('timer-started', () => {
      this.props.onStart();
    });
    ipcRenderer.on('timer-stopped', () => {
      this.props.onStop();
    });
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTimer: (time) => updateTime(dispatch, time),
    onStop: (time) => stoppedTimer(dispatch, time),
    onStart: (time) => startedTimer(dispatch, time)
  };
};

export default connect(null, mapDispatchToProps)(TimerListener);
