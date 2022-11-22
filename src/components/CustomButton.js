import React from "react";

import { View, TouchableOpacity, Text } from "react-native";

function CustomButton(props) {

    const handleClick = () => {
        if(!!props.callback){
            props.callback()
        }
    }

    return (
        <TouchableOpacity onPress={handleClick}>
            <View>
                <Text>
                    {props.label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

CustomButton.defaultProps = {
    label: "Click",
}

export default CustomButton