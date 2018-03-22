import React from 'react';

const CurrentTime = ({time})=> {

  var date = new Date();
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  time = hours + ":" + minutes + " " + am_pm;

  return (
    <span>{time}</span>
  )
};

export default CurrentTime;