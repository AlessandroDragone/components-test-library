import React from "react";

import {
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  View,
} from "react-native";

function CustomButton(props) {
  const handleClick = () => {
    if (!!props.callback) {
      props.callback();
    }
  };

  return (
    <TouchableOpacity
      disabled={props.disable}
      style={[mobile.button, props.disable && mobile.disable]}
      onPress={handleClick}
    >
      <View>
        <Text style={mobile.text}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  label: "Click",
  disable: false,
};

const mobile = StyleSheet.create({
  button: {
    backgroundColor: "#2F4858",
    border: "none",
    borderRadius: 30,
    paddingHorizontal: 35,
    paddingVertical: 15,
  },
  disable: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textAlign: 'center'
  },
});

export default CustomButton;
