import electron from 'electron';

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
    console.log(display.size.width, display.size.height);
    TimerWidget.widgetWindow.loadURL(`file://${__dirname}/app.html#counter`);
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
    console.log('toggle', TimerWidget.hidden)
    TimerWidget.hidden ? TimerWidget.show() : TimerWidget.hide();
  }
};

export default  TimerWidget;