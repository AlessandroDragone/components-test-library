import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function IconButton(props) {
  const handleClick = () => {
    if (!!props.callback) {
      props.callback(props.value);
    }
  };

  return (
    <TouchableOpacity onPress={handleClick} style={props.selected ? [style.container, style.selected] : style.container}>
      {props.children}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  selected: {
    transform: [{ scale: 1.3 }],
  },
});
