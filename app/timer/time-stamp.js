import React from 'react';

const TimeStamp = ({time})=> {
  const
    hours   = ('0' + parseInt(time/3600)).slice(-2),
    minutes = ('0' + parseInt(time/60)).slice(-2),
    seconds = ('0' + parseInt(time%60)).slice(-2) ;

  const toTimeDigits = (number)=> {
   return (
     <span className='time-stamp-unit'>
       {number.split('').map(c => {
         return (<span className='time-stamp-unit-digit' key={Math.random()}>{c}</span>)
       })}
     </span>)

  }

  return (
    <span className='time-stamp'>
      {toTimeDigits(hours)}
      <span className='time-stamp-separator'>:</span>
      {toTimeDigits(minutes)}
      <span className='time-stamp-separator'>:</span>
      {toTimeDigits(seconds)}
    </span>
  )
}

export default TimeStamp;