import * as React from "react";
import * as ReactDOM from "react-dom";
import {GlobalStyles} from './globalStyle';

import App from "./App";
import "./popup.css";

var mountNode = document.getElementById("popup");
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>
  , mountNode);