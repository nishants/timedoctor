import React from 'react';

const LocalTimeZone = ()=> {
  function getTimezoneOffset() {
    function z(n){return (n<10? '0' : '') + n}
    var offset = new Date().getTimezoneOffset();
    var sign = offset < 0? '+' : '-';
    offset = Math.abs(offset);
    return sign + z(offset/60 | 0) +':'+ z(offset%60);
  }
  return (
    <span>GMT{getTimezoneOffset()}</span>
  )
};

export default LocalTimeZone;