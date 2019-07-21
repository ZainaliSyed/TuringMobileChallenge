// @flow

import React from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { View, Image } from "react-native";
import { ButtonView, Text } from "../";
import styles from "./styles";
import { Colors, Images } from "../../theme";

export default class ListItem extends React.PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    item: PropTypes.object,
    image: PropTypes.object,
    onPress: PropTypes.func
  };

  static defaultProps = {
    onPress: () => null,
    style: {},
    image: Images.navigate
  };

  render() {
    const { item } = this.props;
    return (
      <ButtonView style={styles.container} onPress={() => item.onPress()}>
        <View style={{ flex: 1 }}>
          <Text type="regular" size="large" color="black">
            {item.title}
          </Text>
        </View>
        <Image source={item.rightImage} />
      </ButtonView>
    );
  }
}
