// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.doubleBaseMargin,
    alignItems: "center"
    // justifyContent: "center"
    // backgroundColor: "yellow"
    // backgroundColor: Colors.background.primary
  },
  imageBackground: {},
  scroll: {
    flex: 1,
    backgroundColor: Colors.background.primary
  },
  textInput: { backgroundColor: Colors.background.quaternary },
  forgotPasswordButton: {
    backgroundColor: Colors.background.quaternary,
    width:
      Metrics.screenWidth - (Metrics.doubleBaseMargin + Metrics.baseMargin),
    paddingVertical: 10,
    borderRadius: Metrics.borderRadius,
    justifyContent: "center",
    alignItems: "center"
  }
});
