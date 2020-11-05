// Entry point for client JavaScript, 'entry' file file for your webpack pipeline, "this is react land", front-end

// very top of everything i will be rendering (as a developer, this is the very top) ; although this code will be injected into the index.html wherever i note (on line 14, for example)

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>{/* rest of your app goes here! */}</Provider>,
  document.getElementById("app")
);

/*
// What I had before adding the redux Provider
ReactDOM.render(
  <div>Hello, world!</div>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
 */
