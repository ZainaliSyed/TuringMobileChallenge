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
  ImageBackground
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
  CustomHeader
} from "../../components";
import styles from "./styles";
import Utils from "../../util";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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
    let firstName = true;
    let lastName = true;
    let emailValid = true;
    let passwordValid = true;
    ["email", "password", "firstName", "lastName"].forEach(name => {
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
      } else if (name === "firstName") {
        if (value.length === 0) {
          firstName = false;
          errors[name] = Strings.VALIDATION.firstName;
        }
      } else if (name === "lastName") {
        if (value.length === 0) {
          lastName = false;
          errors[name] = Strings.VALIDATION.lastName;
        }
      }
    });
    this.setState({ errors });
    if (passwordValid && emailValid && firstName && lastName) {
      // this.props.onPress();
      alert(" Sign up api hit");
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
    const { firstName, lastName, email, password, errors } = this.state;
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
        <ImageBackground
          source={Images.bg}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={styles.container}>
            <BoldHeading
              title="Sign Up"
              style={{
                marginVertical: Metrics.doubleBaseMargin * 2
              }}
            />
            <TextFieldBorder
              placeholder={Strings.PLACEHOLDER.firstName}
              value={firstName}
              onChangeText={firstName => this.setState({ firstName })}
              returnKeyType="next"
              onSubmitEditing={() => this.lastName.focus()}
              reference={ref => {
                this.firstName = ref;
              }}
              onFocus={this._onFocus}
              error={errors.firstName}
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
            <TextFieldBorder
              placeholder={Strings.PLACEHOLDER.lastName}
              value={lastName}
              onChangeText={lastName => this.setState({ lastName })}
              returnKeyType="next"
              onSubmitEditing={() => this.lastName.focus()}
              reference={ref => {
                this.lastName = ref;
              }}
              onFocus={this._onFocus}
              error={errors.lastName}
              textFieldStyle={{
                width:
                  Metrics.screenWidth -
                  (Metrics.doubleBaseMargin + Metrics.baseMargin),
                flexDirection: "row",
                alignItems: "center",
                borderColor: Colors.border,
                borderWidth: 1,
                borderRadius: Metrics.borderRadius
                // marginVertical: Metrics.baseMargin
              }}
              autoCapitalize="none"
            />
            <TextFieldBorder
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
              textFieldStyle={{
                width:
                  Metrics.screenWidth -
                  (Metrics.doubleBaseMargin + Metrics.baseMargin),
                flexDirection: "row",
                alignItems: "center",
                borderColor: Colors.border,
                borderWidth: 1,
                borderRadius: Metrics.borderRadius
                // marginVertical: Metrics.baseMargin
              }}
              autoCapitalize="none"
            />
            <TextFieldBorder
              placeholder={Strings.PLACEHOLDER.password}
              value={password}
              onChangeText={password => this.setState({ password })}
              returnKeyType="done"
              onSubmitEditing={() => null}
              reference={ref => {
                this.password = ref;
              }}
              secureTextEntry
              onFocus={this._onFocus}
              error={errors.password}
              textFieldStyle={{
                width:
                  Metrics.screenWidth -
                  (Metrics.doubleBaseMargin + Metrics.baseMargin),
                flexDirection: "row",
                alignItems: "center",
                borderColor: Colors.border,
                borderWidth: 1,
                borderRadius: Metrics.borderRadius
                // marginBottom: Metrics.baseMargin
                // marginVertical: Metrics.baseMargin / 2
              }}
              autoCapitalize="none"
            />
            <ButtonView
              style={{
                backgroundColor: Colors.background.quaternary,
                width:
                  Metrics.screenWidth -
                  (Metrics.doubleBaseMargin + Metrics.baseMargin),
                paddingVertical: 10,
                borderRadius: Metrics.borderRadius,
                justifyContent: "center",
                alignItems: "center",
                marginTop: Metrics.smallMargin,
                marginBottom: Metrics.doubleBaseMargin
              }}
              // onPress={() => {
              //   // Actions.home()
              //   // Actions.mainTabBar();
              //   // alert("Sign Up Api");
              // }}
              onPress={this.onSubmit}
            >
              <Text
                style={{ justifyContent: "center", alignItems: "center" }}
                type="bold"
                size="large"
                color="primary"
              >
                SIGN UP
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

export default SignUp;
