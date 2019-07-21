// @flow
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "../../components";
import styles from "./styles";

class Notifications extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Notification Screens</Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Notifications);
