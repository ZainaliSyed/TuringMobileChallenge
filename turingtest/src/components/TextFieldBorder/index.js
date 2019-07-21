import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, Image } from "react-native";
import { Text, ButtonView } from "../";
import styles from "./styles";
import { Colors, Images, Metrics, ApplicationStyles } from "../../theme";
import Utils from "../../util";

export default class TextFieldBorder extends React.PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    error: PropTypes.string,
    reference: PropTypes.func,
    textFieldStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    onPress: PropTypes.func,
    showDropDownIcon: PropTypes.bool,
    onLayout: PropTypes.func,
    textFieldImage: PropTypes.object
  };

  static defaultProps = {
    style: {},
    reference: undefined,
    error: "",
    textFieldStyle: {},
    onPress: undefined,
    showDropDownIcon: false,
    onLayout: undefined
  };

  render() {
    const {
      style,
      label,
      error,
      reference,
      textFieldStyle,
      onPress,
      showDropDownIcon,
      onLayout,
      textFieldImage,
      ...rest
    } = this.props;

    return (
      <View style={[styles.container, style]} onLayout={onLayout}>
        <View style={[style.textContainer, textFieldStyle]}>
          {!_.isUndefined(textFieldImage) ? ( // check it tommorrow
            <Image
              resizeMode="contain"
              source={textFieldImage}
              style={{
                padding: Metrics.baseMargin,
                marginLeft: Metrics.baseMargin
              }}
              width={Metrics.images.small}
              height={Metrics.images.small}
            />
          ) : null}

          <TextInput
            selectionColor={Colors.success}
            placeholderTextColor={Colors.placeholder}
            underlineColorAndroid={Colors.transparent}
            style={styles.textInputStyle}
            {...rest}
            ref={
              reference
                ? ref => {
                    reference(ref);
                  }
                : null
            }
            editable={_.isUndefined(onPress)}
          />
        </View>
        {!_.isEmpty(error) && (
          <Text style={styles.errorStyle}>{error || " "}</Text>
        )}
      </View>
    );
  }
}
