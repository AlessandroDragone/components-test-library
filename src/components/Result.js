import React, { useState } from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { useMediaQuery } from "react-responsive";

function Result(props) {

    const isDesktop = useMediaQuery({ minWidth: 992 })

    const goToRank = () => {
        if (!!props.callbackRank) {
            props.callbackRank();
        }
    }

    const goToPlay = () => {
        if (!!props.callbackPlay) {
            props.callbackPlay();
        }
    }

    const goToHome = () => {
        if (!!props.callbackHome) {
            props.callbackHome();
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
                {
                    props.win ?
                        <Image />
                        :
                        <Image />
                }

                <View>
                    {
                        props.win ?
                            <Text>Hai vinto!</Text>
                            :
                            <Text>Hai perso penitenza</Text>
                    }
                    <Text>Risultati</Text>
                </View>
            </View>

            <View>
                <CustomButton
                    label={'Gioca ancora'}
                    callback={goToPlay}
                />

                <CustomButton
                    label={'Torna alla home'}
                    callback={goToHome}
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