// @flow
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Image, FlatList, StatusBar } from "react-native";
import { Text, ButtonView, DrawerCard, Separator } from "../../components";
import styles from "./styles";

import { Metrics, Images, Colors, Fonts } from "../../theme";

const contrutorDrawer = [
  "My Projects",
  "View Tutorials",
  "Project’s History",
  "Change Password"
];

class CustomDrawer extends Component {
  _renderItems = ({ item, index }) => {
    let action;
    let drawerImage;
    if (index == 0 && item == contrutorDrawer[0]) {
      // action = () => alert("index", index);
      action = () => alert("");
      drawerImage = Images.key;
    } else if (index == 1 && item == contrutorDrawer[1]) {
      // action = () => alert("index", index);
      action = () => alert("");
      drawerImage = Images.key;
    } else if (index == 2 && item == contrutorDrawer[2]) {
      action = () => alert("index", index);
      drawerImage = Images.key;
    } else if (index == 3 && item == contrutorDrawer[3]) {
      action = () => alert("change password");
      drawerImage = Images.key;
    }
    return <DrawerCard icons={drawerImage} myText={item} onPress={action} />;
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.red,
          paddingHorizontal: Metrics.doubleBaseMargin

          // paddingVertical: Metrics.doubleBaseMargin
        }}
      >
        <StatusBar
          backgroundColor={Colors.red}
          barStyle="light-content"
          animated
        />
        <FlatList
          data={contrutorDrawer}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={this._renderItems}
        />
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(CustomDrawer);
