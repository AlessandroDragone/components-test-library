import React, { useState } from "react";
import { Stylesheet, View } from "react-native";
import CustomButton from "./CustomButton";

function Play(props) {

    const nav = () => {
        
    }

    return(
        <View>
            <View>
                <CustomButton
                    label={'Classifica'}
                    callback={nav}
                />
            </View>                        
        </View>
    );
}

export default Play