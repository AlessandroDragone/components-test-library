import React from "react";

import { TouchableOpacity, Text, Platform } from "react-native";
import StyleSheet from 'react-native-media-query';

function CustomButton(props) {
    const handleClick = () => {
        console.log(Platform)
        if (!!props.callback) {
            props.callback();
        }
    };

    return (
        <TouchableOpacity
            style={styles.button}
            dataSet={{ media: ids.button }}
            onPress={handleClick}
        >
            <Text
                style={styles.text}
                dataSet={{ media: ids.text }}
            >
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}

CustomButton.defaultProps = {
    label: "Click",
};

const {ids, styles} = StyleSheet.create({
    button: {
        backgroundColor: "#2F4858",
        border: "none",
        borderRadius: "30px",
        paddingHorizontal: "35px",
        paddingVertical: "15px",
        '@media (min-width: 1000px)': {
            paddingHorizontal: "40px",
            paddingVertical: "20px",
        },
    },
    text: {
        fontWeight: "bold",
        fontFamily: "combo",
        fontSize: "20px",
        color: "white",
        '@media (min-width: 1000px)': {
            fontSize: '20px',
        },
    },
});

export default CustomButton;