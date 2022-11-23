import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { GiPaper } from "react-icons/gi";

export default function IconButton(props) {
  const handleClick = () => {
    if (!!props.callback) {
      props.callback(props.value);
    }
  };

  return (
    <TouchableOpacity onPress={handleClick} style={style.container}>
      {props.children}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
