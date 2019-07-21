// @flow
import React from "react";
import { connect } from "react-redux";
import { Keyboard, Image, View } from "react-native";
import store from "../store";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
// createAppNavigator
import {
  Login,
  Signup,
  ForgotPassword,
  Home,
  Notifications,
  Feeds,
  MoreItems
} from "../containers";
import { ImageButton } from "../components";

import styles from "./styles";
import { Images, Colors, Metrics } from "../theme";

const LoginStack = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: null,
        title: "Sign Up"
      })
    },
    forgotPassword: {
      screen: ForgotPassword,
      title: "Forgot Password",
      navigationOptions: ({ navigation }) => ({
        title: "forgotPassword",
        headerLeft: (
          <ImageButton source={Images.key} onPress={() => navigation.pop()} />
        )
      })
    },
    signup: {
      screen: Signup,
      navigationOptions: ({ navigation }) => ({
        title: "Sign Up",
        headerLeft: (
          <ImageButton source={Images.key} onPress={() => alert("back")} />
        )
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      console.log("navigation ******** ", navigation);
      return {
        headerTitleStyle: { color: Colors.white },
        headerStyle: {
          borderBottomWidth: 0
        },
        title: "Title "

        // headerTransparent: true,
        // headerLeft: (<ImageButton  source = {Images.key} onPress = {() => alert("back")} />)
      };
    }
  }
); // end of loginStack

const TabNavigator = createBottomTabNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Home"
      })
    },
    feeds: {
      screen: Feeds,
      navigationOptions: ({ navigation }) => ({
        title: "Feeds"
      })
    },
    notification: {
      screen: Notifications,
      navigationOptions: ({ navigation }) => ({
        title: "Notification"
      })
    },
    setting: {
      screen: MoreItems,
      navigationOptions: ({ navigation }) => ({
        title: "Settings"
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      console.log("routeName navi: ", routeName);
      return {
        title: "Home",
        tabBarOptions: {
          showLabel: false,
          activeTintColor: Colors.blue,
          inactiveTintColor: Colors.white
          // style: {
          //   backgroundColor: Colors.red
          // }
        },
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;

          if (routeName === "home") {
            iconName = focused ? Images.home_active : Images.home_inactive;
          } else if (routeName === "feeds") {
            iconName = focused ? Images.feed_active : Images.feed_inactive;
          } else if (routeName === "notification") {
            iconName = focused
              ? Images.notifications_active
              : Images.notifications_inactive;
          } else if (routeName === "setting") {
            iconName = focused ? Images.more_active : Images.more_inactive;
          }
          return <Image resizeMode="contain" source={iconName} />;
        },
        animationEnabled: true,
        swipeEnabled: true
      };
    }
    // tabBarOptions: {
    //   activeTintColor: Colors.blue,
    //   inactiveTintColor: Colors.white
    // }
  }
);

const RouteConfig = createStackNavigator({
  loginStack: {
    screen: LoginStack,
    navigationOptions: () => ({
      header: null
    })
  },

  Home: {
    screen: TabNavigator,
    path: "",
    navigationOptions: ({ navigation }) => {
      console.log(navigation.state.routes[0]);
      const drawerIndex = navigation.state.index;
      const drawerRouteName = navigation.state.routes[drawerIndex].routeName;
      let routeName = "";
      if (drawerRouteName === "Home") {
        tabIndex = navigation.state.routes[drawerIndex].index;
        routeName =
          navigation.state.routes[drawerIndex].routes[tabIndex].routeName;
      } else {
        routeName = navigation.state.routes[drawerIndex].routeName;
      }

      let title = "";
      titleChk = false;
      switch (routeName) {
        case "home":
          title = "Home";
          titleChk = false;
          break;
        case "feeds":
          title = "Feeds";
          titleChk = false;
          break;
        case "notification":
          title = "Notifications";
          titleChk = false;
          break;
        case "setting":
          title = "Settings";
          titleChk = false;
          break;
        default:
          titleChk = true;
          break;
      }

      return {
        // title: `${navigation.state.params.title}`,
        title: title,
        headerStyle: {
          backgroundColor: Colors.white,
          borderBottomWidth: 1
        },
        headerLeft: null
      };
    }
  }

  // Home: {
  //   screen: TabNavigator,
  //   path: "",
  //   navigationOptions: ({ navigation }) => {
  //     console.log(navigation.state.routes[0]);
  //     const drawerIndex = navigation.state.index;
  //     const drawerRouteName = navigation.state.routes[drawerIndex].routeName;
  //     let routeName = "";
  //     if (drawerRouteName === "Home") {
  //       tabIndex = navigation.state.routes[drawerIndex].index;
  //       routeName =
  //         navigation.state.routes[drawerIndex].routes[tabIndex].routeName;
  //     } else {
  //       routeName = navigation.state.routes[drawerIndex].routeName;
  //     }
  //     let title = "";
  //     titleChk = false;
  //     switch (routeName) {
  //       case "home":
  //         title = "Home";
  //         titleChk = false;
  //         break;
  //       default:
  //         titleChk = true;
  //         break;
  //     }

  //     return {
  //       title: title,
  //       headerStyle: {
  //         backgroundColor: Colors.lightBlueColor,
  //         borderBottomWidth: 0
  //       },
  //       headerTitleStyle: [
  //         { textAlign: "center" },
  //         UIFont.font(fonts.medium, fontSize.medium, colors.black)
  //       ],
  //       header: titleChk && null,
  //       headerLeft: (
  //         <ImageButton source={Images.key} onPress={() => navigation.pop()} />
  //       ),
  //       headerRight: (
  //         <ImageButton source={Images.key} onPress={() => alert("right")} />
  //       )
  //     };
  //   }
  // }
});

export { RouteConfig };
