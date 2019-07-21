import React from "react";
import PropTypes from "prop-types";
import { Image, ImageBackground, View } from "react-native";
import { Images, Metrics } from "../../theme";
import { Text } from "../";

const TabIcon = ({ title, focused }) => {
  console.log("TabIcons Components  title : ", title, "focused : ", focused);
  return (
    <View
      style={{
        justifyContent: "center"
      }}
    >
      <Image
        resizeMode="contain"
        // style={{
        //   width: Metrics.icon[title === "event" ? "large" : "normal"],
        //   height: Metrics.icon[title === "event" ? "large" : "normal"]
        // }}
        style={{
          width: Metrics.icons.normal,
          height: Metrics.icons.normal
        }}
        source={
          Images[
            (title + (focused ? "_active" : "_inactive")).toLocaleLowerCase()
          ]
        }
      />
    </View>
  );
};

// return (
//   <ImageBackground
//     resizeMode="contain"
//     // style={{
//     //   width: Metrics.icon[title === "event" ? "large" : "normal"],
//     //   height: Metrics.icon[title === "event" ? "large" : "normal"]
//     // }}
//     style={{
//       width: Metrics.icons.normal,
//       height: Metrics.icons.normal
//     }}
//     source={
//       Images[
//         (title + (focused ? "_active" : "_inactive")).toLocaleLowerCase()
//       ]
//     }
//   >
//     {/* {renderBadgeCount(badgeChatCount)} */}
//     <View style={{ backgroundColor: "blue" }}>
//       <Text type="regular" size="small" color="white">
//         Chat
//       </Text>
//     </View>
//   </ImageBackground>
// );

TabIcon.propTypes = {
  title: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
};

export default TabIcon;
