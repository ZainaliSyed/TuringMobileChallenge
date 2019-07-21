import React from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { View, Image, TouchableOpacity, StatusBar } from "react-native";

import { Button, ButtonView, Text, Separator } from "../../";
import styles from "./styles";
import { Metrics, Colors, Images } from "../../../theme";
import { cps } from "redux-saga/effects";

export default class Dialogue extends React.PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isButton: PropTypes.bool,
    buttonTitle: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: "Title",
    description: "description",
    isButton: false,
    buttonTitle: "Title",
    onPress: () => null
  };

  state = {
    isVisible: false
  };

  show() {
    this.setState({ isVisible: true });
  }

  hide = () => {
    this.setState({
      isVisible: false
    });
  };
  _renderButton(title) {
    const { onPress } = this.props;
    return (
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <ButtonView
          onPress={() => this.hide()}
          style={[styles.buttonContainer, { marginRight: Metrics.smallMargin }]}
        >
          <Text type="light" color="primary" size="normal">
            Cancel
          </Text>
        </ButtonView>
        <ButtonView onPress={onPress} style={styles.buttonContainer}>
          <Text type="light" color="primary" size="normal">
            Logout
          </Text>
        </ButtonView>
      </View>
    );
  }

  _renderModalContent(title, desc) {
    const { isButton, buttonTitle } = this.props;
    return (
      <View style={styles.modalContainer}>
        <Text
          // style={{ marginBottom: 15 }}
          type="bold"
          color="secondary"
          size="xLarge"
        >
          {title}
        </Text>
        <Separator />
        <Text
          style={{ marginVertical: 15 }}
          type="regular"
          color="secondary"
          size="medium"
        >
          {desc}
        </Text>
        {isButton ? this._renderButton(buttonTitle) : null}
      </View>
    );
  }

  render() {
    const { description, title } = this.props;
    const { isVisible } = this.state;

    return (
      <Modal
        isVisible={isVisible}
        style={styles.modal}
        // animationIn="fadeIn"
        // animationOut="fadeOut"
        onBackdropPress={this.hide}
        onBackButtonPress={this.hide}
      >
        {this._renderModalContent(title, description)}
      </Modal>
    );
  }
}
