import React from "react";

import { TouchableOpacity, Text, Platform, StyleSheet } from "react-native";

function CustomButton(props) {
    const handleClick = () => {
        if (!!props.callbackLog) {
            props.callbackLog(Platform.OS)
        }
        
        if (!!props.callback) {
            props.callback();
        }
    };

    return (
        <TouchableOpacity
            style={style.button}
            onPress={handleClick}
        >
            <Text
                style={style.text}
            >
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}

CustomButton.defaultProps = {
    label: "Click",
};

const style = StyleSheet.create({
    button: {
        backgroundColor: "#2F4858",
        border: "none",
        borderRadius: 30,
        paddingHorizontal: 35,
        paddingVertical: 15,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
});

export default CustomButton;