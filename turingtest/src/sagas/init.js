import { LOAD } from "redux-storage";
import { take, fork, select } from "redux-saga/effects";

import { getUser } from "../reducers/selectors";
import { NavigationActions, StackActions } from "react-navigation";

function* watchReduxLoadFromDisk() {
  while (true) {
    yield take(LOAD);
    try {
      // const { data } = yield select(getUser);
      // if (data.entity_auth_id) {
      //   Actions.home();
      // }

      // NavigationActions.navigate({ routeName: "login" });

      console.log("Saga init working ");
    } catch (err) {
      console.warn("saga watchReduxLoadFromDisk error: ", err);
    }
  }
}

export default function* root() {
  yield fork(watchReduxLoadFromDisk);
}
