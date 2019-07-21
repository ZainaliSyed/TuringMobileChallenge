// @flow
import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  container: {
    // backgroundColor: Colors.blue,
    // borderRadius: Metrics.borderRadius,
    // width:
    //   Metrics.screenWidth - (Metrics.doubleBaseMargin + Metrics.baseMargin),
    // justifyContent: "center",
    // alignItems: "center",
    // paddingVertical: Metrics.smallMargin,
    // marginBottom: Metrics.smallMargin

    backgroundColor: Colors.background.quaternary,
    width:
      Metrics.screenWidth - (Metrics.doubleBaseMargin + Metrics.baseMargin),
    paddingVertical: 10,
    borderRadius: Metrics.borderRadius,
    justifyContent: "center",
    alignItems: "center"
  }
});
