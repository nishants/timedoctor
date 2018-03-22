const Timer = {
  listeners: [],
  _time: 0,
  _interval: null,
  reset: ()=> Timer._time = 0,
  start: ()=> {
    if(Timer._interval) return;
    Timer._interval = setInterval(Timer.update, 1000);
    Timer.listeners.forEach(listener=> listener.onStart());
  },
  update: ()=> {
    ++Timer._time;
    Timer.listeners.forEach(listener=> listener.updateTime(Timer._time));
  },
  stop : ()=> {
    clearInterval(Timer._interval)
    Timer._interval = null;
    Timer.listeners.forEach(listener=> listener.onStop());
  },
  listen : (callback)=> {
    Timer.listeners.push(callback);
    return {
      remove: ()=> {
        Timer.listeners = Timer.listeners.filter((c)=>  c === callback);
      }
    }
  },
};
export default Timer;
