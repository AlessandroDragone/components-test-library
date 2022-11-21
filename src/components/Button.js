import React from "react";

import { View, TouchableOpacity, Text } from "react-native-web";

function Button(props) {

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

Button.defaultProps = {
    label: "Click",
}

export default Button