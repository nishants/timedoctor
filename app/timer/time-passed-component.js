import React from 'react';

const TimePassed = ({time})=> {
  const
    hours   = parseInt(time/3600),
    minutes = parseInt(time/60),
    toLabel = value => ('0' + parseInt(value)).slice(-2);

  let label =  hours  > 0 ? (`${toLabel(hours)}h `) : '';
  label = (`${label} ${ toLabel(minutes)}m`);

  return (
    <span>{label}</span>
  )
};

export default TimePassed;