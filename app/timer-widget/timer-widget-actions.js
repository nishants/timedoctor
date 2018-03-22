const ipcRenderer = require('electron').ipcRenderer;
export const HIDE_COUNTER_WIDGET = 'COUNTER_WIDGET/HIDE_COUNTER_WIDGET';

export const hideCounterWidget = (dispatch)=> {
  ipcRenderer.send('hide-widget');
  dispatch({type: HIDE_COUNTER_WIDGET});
}
