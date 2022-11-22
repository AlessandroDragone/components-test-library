import React, { useState } from "react";

import { TextInput } from "react-native";
import StyleSheet from 'react-native-media-query';

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
      style={styles.inputbox}
      dataSet={{ media: ids.inputbox }}
      placeholder={props.placeholder}
      onChangeText={changeInput}
      value={state.value}
      placeholderTextColor={"grey"}
    />
  );
}

const { ids, styles } = StyleSheet.create({
  inputbox: {
    backgroundColor: '#ffffff',
    paddingHorizontal: "20px",
    paddingVertical: "15px",
    fontSize: "20px",
    fontFamily: "combo",
    textAlign: "center",
    borderRadius: "20px",
    borderWidth: 1,
    '@media (min-width: 1000px)': {
      paddingHorizontal: "50px",
      paddingVertical: "15px",
    },
  },
});

export default CustomInputBox;
