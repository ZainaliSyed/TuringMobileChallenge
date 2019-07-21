// @flow

import { LOGIN } from "./ActionTypes";

export function request() {
  return {
    type: LOGIN.REQUEST
  };
}

export function success(data: Object) {
  return {
    data,
    type: LOGIN.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: LOGIN.FAILURE
  };
}
