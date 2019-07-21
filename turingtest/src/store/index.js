// @flow

import * as storage from "redux-storage";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import filter from "redux-storage-decorator-filter";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from "react-navigation-redux-helpers";
import { createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import createEngine from "redux-storage-engine-reactnativeasyncstorage";
import { RouteConfig } from "../navigator";

import sagas from "../sagas";
import reducers from "../reducers";

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true
});

const AppNavigator = createAppContainer(RouteConfig);
const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  "root"
);

const App = createReduxContainer(AppNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

export const AppWithNavigationState = connect(mapStateToProps)(App);

export default function configureStore(onComplete: Function) {
  const engine = filter(
    createEngine("AppTree"),
    ["whitelisted-key", ["user", "data"]],
    []
  );
  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    storage.reducer(reducers),
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, storeMiddleware, logger, middleware)
    )
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(() =>
      console.log("Failed to load previous state @ configureStore.js#44")
    );

  sagaMiddleware.run(sagas);

  return store;
}
