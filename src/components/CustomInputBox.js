import React, { useState } from "react";

import { TextInput, StyleSheet } from "react-native";

function CustomInputBox(props) {
  const [state, setState] = useState({
    value: "",
  });

  function changeInput(e) {
    setState({
      value: e,
    });

    if (!!props.callbackChange) props.callbackChange(e);
  }

  return (
    <TextInput
      style={style.inputbox}
      placeholder={props.placeholder}
      onChangeText={changeInput}
      value={state.value}
      placeholderTextColor={"grey"}
    />
  );
}

const style = StyleSheet.create({
  inputbox: {
    backgroundColor: '#ffffff',
    paddingHorizontal: "20px",
    paddingVertical: "15px",
    fontSize: "20px",
    fontFamily: "combo",
    textAlign: "center",
    borderRadius: "20px",
    borderWidth: 1,
  },
});

export default CustomInputBox;
