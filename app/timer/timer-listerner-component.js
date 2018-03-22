import React from 'react';
import {connect} from 'react-redux'
import {updateTime, startedTimer, stoppedTimer} from './timer-actions'

class TimerListener extends React.Component {
  componentWillMount() {
    const
      timer = require('electron').remote.require('./timer');
    timer.listen({
      updateTime: this.props.updateTimer,
      onStop    : this.props.onStop,
      onStart   : this.props.onStart,
    });
    return null;

  }
  render(){
    return null;
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    updateTimer: (time)=> updateTime(dispatch , time),
    onStop     : (time)=> stoppedTimer(dispatch , time),
    onStart    : (time)=> startedTimer(dispatch , time)
  };
};

export default connect(null, mapDispatchToProps)(TimerListener);
