// @flow
import React, { Component } from "react";
import {
  View,
  StatusBar,
  NativeModules,
  PermissionsAndroid
} from "react-native";
import { Provider } from "react-redux";

import { AppState, MessageBar } from "./components";
import applyConfigSettings from "./config";
// import NetworkInfo from "./services/NetworkInfo";
// import { networkInfoListener } from "./actions/NetworkInfoActions";
import { Colors } from "./theme";
import Utils from "./util";
import configureStore, { AppWithNavigationState } from "./store";

applyConfigSettings();

export default class Main extends Component {
  state = {
    isLoading: true,
    store: configureStore(() => {
      this.setState({ isLoading: false });

      if (Utils.isPlatformAndroid()) {
        NativeModules.SplashScreen.hide();
      }
    })
  };

  componentDidMount() {
    // NetworkInfo.networkInfoListener(
    //   this.state.store.dispatch,
    //   networkInfoListener
    // );
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <Provider store={this.state.store}>
          <AppWithNavigationState />
        </Provider>
        <AppState
          handleAppState={nextState => {
            if (nextState === "active") {
              console.log("Active State ");
            } else {
              console.log(" else postion : ", nextState);
            }
          }}
        />
        <MessageBar />
      </View>
    );
  }
}
