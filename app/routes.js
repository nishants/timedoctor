/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Widget from './timer-widget/timer-widget-component';
import MainWindow from './main-window/main-window-component';
import TimerListener from './timer/timer-listerner-component';

export default () => (
  <App>
    <Switch>
      <Route path="/widget" component={Widget} />
      <Route path="/" component={MainWindow} />
    </Switch>
    <TimerListener />
  </App>
);
