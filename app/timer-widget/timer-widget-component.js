// @flow
import React  from 'react';
import {connect} from 'react-redux'
import TimeStamp from './../timer/time-stamp';
import {stopTimer, startTimer} from './../timer/timer-actions'
import {hideCounterWidget} from './timer-widget-actions'
import dragIcon from '../assets/icons/dragndrop.svg'
import closeIcon from '../assets/icons/clear.svg'


const TimerWidget = ({time, running, stopTimer, startTimer, hideCounterWidget})=> {
  return (
    <div>
      <div className={('timer-widget ' + (running ? 'timer-running': ''))}>
        <span class='drag-drop-icon'>
          <img src={dragIcon}/>
        </span>
        <span className='widget-timer-actions'>
          <span onClick={stopTimer} className='stop fa fa-stop-circle'></span>
          <span onClick={startTimer} className='play fa fa-play-circle'></span>
        </span>
        <span className='runnning-indicator'>

        </span>
        <TimeStamp time={time}/>
        <div className='close-timer' onClick={hideCounterWidget}>
          <img src={closeIcon}/>
        </div>
      </div>
      <div>
        <button > Stop </button>
        <button onClick={startTimer}> Start </button>
        <button >X</button>
      </div>

    </div>
  );
};

const mapStateToProps = ({timer})=> {
  return {
    time: timer.time,
    running: timer.running
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    hideCounterWidget: ()=> {
      hideCounterWidget(dispatch);
    },
    stopTimer: ()=> stopTimer(dispatch),
    startTimer: ()=> startTimer(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerWidget);
