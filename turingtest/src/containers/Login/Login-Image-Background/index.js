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
  WebView,
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
  BoldHeading,
  MenuDetailButton,
  AppButton
} from "../../components";
import styles from "./styles";
import Utils from "../../util";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    let passwordValid = true;
    ["email", "password"].forEach(name => {
      const value = this[name]._lastNativeText;
      if (name === "password") {
        if (value.length === 0) {
          passwordValid = false;
          errors[name] = Strings.VALIDATION.password;
        }
      } else if (name === "email") {
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
    if (passwordValid && emailValid) {
      // this.props.onPress();
      // alert("api hit");
      // Actions.mainTabBar();
      alert("home");
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
    const { email, password, errors } = this.state;
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
        <ImageBackground source={Images.bg} style={styles.imageBackground}>
          <View style={styles.container}>
            <AppLogoText
              style={{
                marginTop: Utils.isPlatformAndroid()
                  ? Metrics.smallMargin
                  : Metrics.doubleBaseMargin * 2
              }}
            />

            <BoldHeading title="Login to your Account" />
            <TextFieldBorder
              textFieldImage={Images.emailRed}
              placeholder={Strings.PLACEHOLDER.email}
              value={email}
              onChangeText={email => this.setState({ email })}
              returnKeyType="next"
              onSubmitEditing={() => this.password.focus()}
              reference={ref => {
                this.email = ref;
              }}
              keyboardType="email-address"
              onFocus={this._onFocus}
              error={errors.email}
              textFieldStyle={styles.emailAddressTextField}
              autoCapitalize="none"
            />
            <TextFieldBorder
              textFieldImage={Images.key}
              placeholder={"Password"}
              value={password}
              onChangeText={password => this.setState({ password })}
              returnKeyType="done"
              secureTextEntry
              onSubmitEditing={() => null}
              reference={ref => {
                this.password = ref;
              }}
              onFocus={this._onFocus}
              error={errors.password}
              textFieldStyle={styles.passwordAddressTextField}
              autoCapitalize="none"
            />

            <AppButton buttonTitle="New Login" onPress={() => Actions.home()} />

            <ButtonView
              style={{
                paddingVertical: Metrics.baseMargin
              }}
              onPress={() => Actions.forgotPassword()}
            >
              <Text
                type="light"
                size="medium"
                color="black"
                style={styles.forgotPassword}
              >
                Forgot Password?
              </Text>
            </ButtonView>

            <ButtonView
              style={styles.guestContainer}
              onPress={() => alert("login as guest")}
            >
              <Text type="light" size="medium" color="tertiary">
                Sign Up
              </Text>
              <Separator
                style={{
                  backgroundColor: Colors.red,
                  marginTop: Metrics.smallMargin
                }}
              />
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

export default Login;
