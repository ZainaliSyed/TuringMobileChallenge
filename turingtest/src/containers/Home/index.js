// @flow
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "../../components";
import styles from "./styles";
import { Metrics, Colors } from "../../theme";

class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginVertical: Metrics.doubleBaseMargin * 2
          }}
          type="Extrabold"
          size="xxLarge"
          color="black"
        >
          Home Screen
        </Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Home);
