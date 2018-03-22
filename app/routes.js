/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import CounterPage from './containers/CounterPage';
import MainWindow from './main-window/main-window-component';
import TimerListener from './timer/timer-listerner-component';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={MainWindow} />
    </Switch>
    <TimerListener />
  </App>
);
