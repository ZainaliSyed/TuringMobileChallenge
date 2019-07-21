// NOTE: It's a application button
import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import { Text, ButtonView } from "../";
import styles from "./styles";
import { Colors, Images, Metrics, ApplicationStyles } from "../../theme";
import Utils from "../../util";

export default class AppButton extends React.PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    onPress: PropTypes.func
  };

  static defaultProps = {
    style: {},
    title: "Title"
  };

  render() {
    const { style, buttonTitle, onPress, ...rest } = this.props;
    return (
      <ButtonView style={[styles.container, style]} onPress={onPress}>
        <Text
          type="bold"
          size="medium"
          color="primary"
          style={{
            fontStyle: "normal",
            letterSpacing: 0
          }}
        >
          {buttonTitle}
        </Text>
      </ButtonView>
    );
  }
}
