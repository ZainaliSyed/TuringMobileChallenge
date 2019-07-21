// @flow
import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  container: {
    marginBottom: Metrics.baseMargin
  },
  labelStyle: { marginBottom: Metrics.smallMargin },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Metrics.smallMargin
  },
  textInputStyle: {
    flex: 1,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    color: Colors.text.pink,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.light,
    opacity: 0.5,
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0
  },
  errorStyle: {
    color: "red",
    fontSize: Fonts.size.xxSmall,
    fontFamily: Fonts.type.regular
  }
});
