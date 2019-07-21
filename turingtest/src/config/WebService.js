// export const BASE_URL = "http://source.com/web/";
export const BASE_URL = "BASE URL";
export const API_USER_NAME = "";
export const API_PASSWORD = "";
export const API_TIMEOUT = 30000;

export const API = "/api/";

// API USER ROUTES
export const API_LOGIN = `${API}user/login`;

export const API_LOG = true;

export const ERROR_REQUEST_TIMEOUT = {
  error: 1,
  title: "Request taking too much time",
  message:
    "We are sorry. It seems like something went wrong with your Internet connection"
};
export const ERROR_SERVER_CONNECTION = {
  error: 1,
  title: "Connection Error",
  message: "Server not available, bad dns."
};
export const ERROR_REQUEST_CANCEL = {
  error: 1,
  title: "Request Canceled",
  message: "You have canceled request."
};
export const ERROR_NETWORK_NOT_AVAILABLE = {
  error: 1,
  title: "Network not available",
  message: "Please connect to the working Internet."
};
export const ERROR_SOMETHING_WENT_WRONG = {
  error: 1,
  title: "Whoops",
  message: "Looks like something went wrong."
};
export const ERROR_CLIENT = {
  error: 1,
  title: "Whoops",
  message: "Looks like we did something went wrong."
};
