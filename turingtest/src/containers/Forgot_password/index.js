// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import {
  View,
  Image,
  PermissionsAndroid,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  StatusBar
} from "react-native";

import { Images, Metrics, Fonts, Colors, Strings } from "../../theme";
import {
  Text,
  Loading,
  ButtonView,
  Button,
  Separator,
  TextFieldBorder,
  AppLogoText,
  CustomHeader,
  BoldHeading
} from "../../components";
import styles from "./styles";
import Utils from "../../util";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: {}
    };
  }
  componentWillMount() {
    Utils.keyboardDismiss();
  }

  componentDidMount() {
    Utils.keyboardDismiss();
  }

  onSubmit = () => {
    const errors = {};
    let emailValid = true;
    ["email"].forEach(name => {
      const value = this[name]._lastNativeText;
      if (name === "email") {
        if (value.length === 0) {
          emailValid = false;
          errors[name] = Strings.VALIDATION.email;
        } else if (!Utils.validateEmail(value)) {
          emailValid = false;
          errors[name] = Strings.VALIDATION.emailError;
        }
      }
    });
    this.setState({ errors });
    if (emailValid) {
      // this.props.onPress();
      alert("api hit");
    }
  };

  _onFocus = () => {
    const { errors = {} } = this.state;

    // eslint-disable-next-line
    for (const name in errors) {
      const ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  };

  render() {
    const { email, errors } = this.state;
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          alignItems: "center"
        }}
        overScrollMode="always"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        ref={ref => {
          this.scrollView = ref;
        }}
      >
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <ImageBackground
          source={Images.bg}
          // resizeMode="contain"
          style={{
            width: "100%",
            height: Metrics.screenHeight
          }}
        >
          <View style={styles.container}>
            <BoldHeading
              title="Forgot Password"
              style={{
                marginTop: Metrics.doubleBaseMargin * 3,
                marginBottom: Metrics.doubleBaseMargin * 2
              }}
            />

            <TextFieldBorder
              textFieldImage={Images.user}
              placeholder={Strings.PLACEHOLDER.email}
              value={email}
              onChangeText={email => this.setState({ email })}
              returnKeyType="done"
              onSubmitEditing={() => null}
              reference={ref => {
                this.email = ref;
              }}
              onFocus={this._onFocus}
              error={errors.email}
              textFieldStyle={{
                width:
                  Metrics.screenWidth -
                  (Metrics.doubleBaseMargin + Metrics.baseMargin),
                flexDirection: "row",
                alignItems: "center",
                borderColor: Colors.border,
                borderWidth: 1,
                borderRadius: Metrics.borderRadius
              }}
              autoCapitalize="none"
            />

            <ButtonView
              style={styles.forgotPasswordButton}
              onPress={this.onSubmit}
            >
              <Text
                style={{ justifyContent: "center", alignItems: "center" }}
                type="bold"
                size="large"
                color="primary"
              >
                FORGOT PASSWORD
              </Text>
            </ButtonView>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  networkInfo: state.networkInfo
});

const actions = {};

export default ForgotPassword;
