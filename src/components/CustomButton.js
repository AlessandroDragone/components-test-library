import React from "react";

import { TouchableOpacity, Text } from "react-native";
import style from "../styles/buttonStyle";

function CustomButton(props) {
  const handleClick = () => {
    if (!!props.callback) {
      props.callback();
    }
  };

  return (
    <TouchableOpacity style={style.button} onPress={handleClick}>
      <Text style={style.text}>{props.label}</Text>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  label: "Click",
};

export default CustomButton;
