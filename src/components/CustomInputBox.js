import React, { useState } from "react";

import { TextInput } from "react-native";
import style from "../styles/inputStyle";

function CustomInputBox(props) {
  const [state, setState] = useState({
    value: "",
  });

  function changeInput(e) {
    setState({
      value: e,
    });
  }

  function press() {
    if (!!props.callbackChange) props.callbackChange(state.value);
  }

  return (
    <TextInput
      style={style.inputbox}
      placeholder={props.placeholder}
      onChangeText={changeInput}
      value={state.value}
      onSubmitEditing={press}
      placeholderTextColor={"grey"}
    />
  );
}
export default CustomInputBox;
