// @flow

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const CANCEL = "CANCEL";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const LOGOUT = "LOGOUT";
export const NETWORK_INFO = "NETWORK_INFO";

export const LOCATION = createRequestTypes("LOCATION");
export const LOGIN = createRequestTypes("LOGIN");
export const EMPTY = createRequestTypes("EMPTY");
// useless
