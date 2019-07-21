// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.doubleBaseMargin,
    alignItems: "center"
    //backgroundColor: "red"
    // backgroundColor: Colors.background.primary
  },
  imageBackground: {},
  scroll: {
    flex: 1
    // backgroundColor: "red"
    // backgroundColor: Colors.background.primary
  },
  textInput: { backgroundColor: Colors.background.quaternary }
});
