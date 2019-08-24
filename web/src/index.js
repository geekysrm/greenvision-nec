import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import thunk from "redux-thunk";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import reducers from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import Insights from "./components/Insights";

import "./index.css";

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const initialState = {};
const middleware = [thunk];

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    )}
  >
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/insights" component={Insights} />

        <Redirect from="*" to={"/"} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
