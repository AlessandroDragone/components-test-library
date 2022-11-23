import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { GiPaper } from "react-icons/gi";

export default function IconButton(props) {
  const handleClick = () => {
    if (!!props.callback) {
      props.callback();
    }
  };

  return (
    <TouchableOpacity onPress={handleClick}>{props.children}</TouchableOpacity>
  );
}