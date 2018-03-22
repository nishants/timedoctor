// @flow
import React  from 'react';
import {connect} from 'react-redux'
import TimeStamp from './../timer/time-stamp';
import TimePassed from './../timer/time-passed-component';
import TimeZone from './../timer/time-zone-component';
import CurrentTime from './../timer/current-time-component';
import {stopTimer, startTimer} from './../timer/timer-actions'
import timeDoctorIcon from '../assets/icons/int_td-2.png';
import playIcon from '../assets/icons/play.svg';
import stopIcon from '../assets/icons/stop.svg';

const Home = ({time, running, stopTimer, startTimer})=> {
  return (
    <div>
      <div className={('main-window ' + (running ? 'timer-running' : ''))} data-tid="container">
        <div className='timer-top-bar'>
          <span className='time-doctor-logo'>
            <img src={timeDoctorIcon}/>
          </span>
          <label> Time Doctor </label>
        </div>
        <div className='time-stamp-container'>
          <TimeStamp time={time}/>
          <span className='timer-actions'>
            <span className='timer-button stop' onClick={stopTimer}>
              <img src={stopIcon}/>
            </span>
            <span className='timer-button play' onClick={startTimer}>
                <img src={playIcon}/>
            </span>
          </span>
        </div>
        <div className='timer-bottom-bar'>
          <label className='worked-today'> Worked Today: <TimePassed time={time}/> </label>
          <label>Company Time: <CurrentTime/> <TimeZone/></label>
        </div>
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
    stopTimer: ()=> stopTimer(dispatch),
    startTimer: ()=> startTimer(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
