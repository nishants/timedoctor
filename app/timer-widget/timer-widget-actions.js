const TimerWidget = require("electron").remote.require('./timer-widget-process');
export const HIDE_COUNTER_WIDGET = 'COUNTER_WIDGET/HIDE_COUNTER_WIDGET';

export const hideCounterWidget = (dispatch)=> {
  TimerWidget.hide();
  dispatch({type: HIDE_COUNTER_WIDGET});
}