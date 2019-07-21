// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.doubleBaseMargin,
    alignItems: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  emailAddressTextField: {
    width:
      Metrics.screenWidth - (Metrics.doubleBaseMargin + Metrics.baseMargin),
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: Metrics.borderRadius,
    marginTop: Metrics.baseMargin
  },
  passwordAddressTextField: {
    width:
      Metrics.screenWidth - (Metrics.doubleBaseMargin + Metrics.baseMargin),
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: Metrics.borderRadius
  },
  scroll: {
    flex: 1,
    backgroundColor: Colors.background.primary
  },
  textInput: { backgroundColor: Colors.background.quaternary },
  forgotPassword: {
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0
  },
  guestContainer: {
    // backgroundColor: "yellow",
    paddingVertical: Metrics.baseMargin,
    marginTop: Metrics.baseMargin
  }
});
