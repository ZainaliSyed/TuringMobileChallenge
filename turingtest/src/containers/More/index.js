// @flow
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { View, FlatList, Alert, Image } from "react-native";
import { Text, Separator, ButtonView, ListItem, Modal } from "../../components";
import styles from "./styles";
import { Images, Metrics } from "../../theme";
import Utils from "../../util";

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreItems: [
        {
          title: "Settings",
          onPress: () => alert("setting"),
          rightImage: Images.navigate,
          navigate: "settings",
          descriptionInputText: false
        },
        {
          title: "About",
          //navigate: "about",
          onPress: () => alert("about"),
          rightImage: Images.navigate,
          descriptionInputText: false
        },
        {
          title: "Invites Friends to project_name",
          rightImage: Images.navigate,
          onPress: () => Utils.onShare("Title ", "Message"),
          descriptionInputText: false
        },
        {
          title: "Privacy Policy",
          //navigate: "policy",
          onPress: () => alert("privacy policy "),
          rightImage: Images.navigate,
          descriptionInputText: false
        },
        {
          title: "Logout",
          rightImage: Images.navigate,
          descriptionInputText: false,
          onPress: () => {
            this.logoutModal.show();
          }
        }
      ]
    }; // end of state
  }

  static propTypes = {};

  shouldComponentUpdate(nextProps: Object) {
    return !_.isEqual(nextProps, this.props);
  }

  _renderLogoutModal = () => {
    return (
      <Modal.Dialogue
        ref={ref => {
          this.logoutModal = ref;
        }}
        description="Do you really want to logout ?"
        title="Logout"
        isButton
        onPress={() => alert("logout")}
        // leftButtonTitle="No Thanks"
        // isCancelable
      />
    );
  };

  _renderItems = ({ item, index }) => {
    console.log("Items setting : ", item);
    return <ListItem item={item} />;
  };

  render() {
    const { moreItems } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={moreItems}
          style={styles.listStyle}
          renderItem={this._renderItems}
          ItemSeparatorComponent={() => <Separator />}
        />
        {this._renderLogoutModal()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  networkInfo: state.networkInfo
});
const actions = {};

export default connect(
  mapStateToProps,
  actions
)(More);
