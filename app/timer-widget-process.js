import electron from 'electron';
const { ipcMain } = require('electron')

const
  BrowserWindow = electron.BrowserWindow,
  app = electron.app;

const TimerWidget = {
  widgetWindow : null,
  hidden : true,
  load: ()=> {
    const screenWidth= 130,
      screenHeight= 30,
      display = electron.screen.getPrimaryDisplay();

    if(!TimerWidget.widgetWindow){
      TimerWidget.widgetWindow = new BrowserWindow({
        width: screenWidth,
        height: screenHeight,
        frame: false,
        show: false
      });
    }
    TimerWidget.widgetWindow.setAlwaysOnTop(true, "floating");
    TimerWidget.widgetWindow.setVisibleOnAllWorkspaces(true);
    TimerWidget.widgetWindow.setFullScreenable(false);

    TimerWidget.widgetWindow.setPosition(
      display.size.width - screenWidth,
      display.size.height - screenHeight
    );
    TimerWidget.widgetWindow.loadURL(`file://${__dirname}/app.html?widget`);
  },
  show : ()=> {
    TimerWidget.widgetWindow.show();
    TimerWidget.hidden = false;
  },

  hide : ()=> {
    TimerWidget.widgetWindow.hide();
    TimerWidget.hidden = true;
  },

  toggleView: ()=> {
    TimerWidget.hidden ? TimerWidget.show() : TimerWidget.hide();
  }
};

ipcMain.on('show-widget', () => {
  TimerWidget.show();
});

ipcMain.on('hide-widget', () => {
  TimerWidget.hide();
});

export default  TimerWidget;
