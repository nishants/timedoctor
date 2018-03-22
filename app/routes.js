import React from 'react';
import App from './containers/App';
import Widget from './timer-widget/timer-widget-component';
import MainWindow from './main-window/main-window-component';
import TimerListener from './timer/timer-listerner-component';

export default () => {
  const showWidget = window.location.href.split('?')[1] === 'widget';
  return (
    <App>
      {showWidget && <Widget />}
      {!showWidget && <MainWindow />}
      <TimerListener />
    </App>);
};
