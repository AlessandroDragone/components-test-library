import React, { useState } from "react";

import { StyleSheet, View, Text, ScrollView } from "react-native";
import CustomButton from "./CustomButton";
import { useMediaQuery } from "react-responsive";

function Result(props) {

    const isDesktop = useMediaQuery({ minWidth: 992 })

    const goToRank = () => {
        if (!!props.callbackRank) {
            props.callbackRank();
        }
    }

    return (
        <View>

            <View style={mobile.header}>
                <CustomButton
                    label={'Classifica'}
                    callback={goToRank}
                    isDesktop={isDesktop}
                />
            </View>

            <View>
                <Image />

                <View>
                    <Text>Hai vinto/Hai perso</Text>
                    <Text>Risultati</Text>
                </View>
            </View>

            <View>
                <CustomButton
                    label={'Gioca ancora'}
                />

                <CustomButton
                    label={'Torna alla home'}
                />
            </View>

        </View>
    )
}

const mobile = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 20,
        right: 25,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});

const desktop = StyleSheet.create({

})

export default Result