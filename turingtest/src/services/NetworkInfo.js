import { NetInfo } from "react-native";

class NetworkInfo {
  networkInfoListener(dispatch, networkInfoAction) {
    NetInfo.isConnected.fetch().then(isNetworkConnected => {
      dispatch(networkInfoAction(isNetworkConnected));
    });

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      isNetworkConnected => {
        dispatch(networkInfoAction(isNetworkConnected));
      }
    );
  }

  removeNetworkInfoListener(dispatch, networkInfoAction) {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      isNetworkConnected => {
        dispatch(networkInfoAction(isNetworkConnected));
      }
    );
  }
}

// NetInfo.getConnectionInfo().then((connectionInfo) => {
//   console.log(
//     'Initial, type: ' +
//       connectionInfo.type +
//       ', effectiveType: ' +
//       connectionInfo.effectiveType,
//   );
// });
// function handleFirstConnectivityChange(connectionInfo) {
//   console.log(
//     'First change, type: ' +
//       connectionInfo.type +
//       ', effectiveType: ' +
//       connectionInfo.effectiveType,
//   );
//   NetInfo.removeEventListener(
//     'connectionChange',
//     handleFirstConnectivityChange,
//   );
// }
// NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);

export default new NetworkInfo();
