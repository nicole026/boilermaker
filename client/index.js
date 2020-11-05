// Entry point for client JavaScript

// 'entry' file file for your webpack pipeline.
//should this be different from the "entry point" suggested in the express section?

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>{/* rest of your app goes here! */}</Provider>,
  document.getElementById('app')
);

/*
// What I had before adding the redux Provider
ReactDOM.render(
  <div>Hello, world!</div>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
 */
