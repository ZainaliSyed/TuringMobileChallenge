import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";

import networkInfo from "./networkInfo";
import user from "./user";

import { RouteConfig } from "../navigator";
const navReducer = createNavigationReducer(RouteConfig);
export default combineReducers({
  user,
  networkInfo,
  nav: navReducer
});
