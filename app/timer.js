const { ipcMain } = require('electron')

const Timer = {
  listeners: [],
  windows: [],
  _time: 0,
  _interval: null,
  reset: () => Timer._time = 0,
  addListenerWindow: (win)=> {
    Timer.windows.push(win);
  },
  start: ()=> {
    if(Timer._interval) return;
    Timer._interval = setInterval(Timer.update, 1000);
    Timer.windows.forEach(win=> win.send('timer-started'));
  },
  update: ()=> {
    ++Timer._time;
    // ipcMain.send('time-updated', Timer._time);
    Timer.windows.forEach(win=> win.send('time-updated', Timer._time));
  },
  stop : ()=> {
    clearInterval(Timer._interval)
    Timer._interval = null;
    Timer.windows.forEach(win=> win.send('timer-stopped'));
  }
};

ipcMain.on('stop-timer', () => {
  Timer.stop();
});

ipcMain.on('start-timer', () => {
  Timer.start();
});

export default Timer;
