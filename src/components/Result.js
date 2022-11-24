import React, { useState } from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { useMediaQuery } from "react-responsive";

function Result(props) {

    const isDesktop = useMediaQuery({ minWidth: 650 })

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

            <View style={mobile.result}>
                {
                    props.win ?
                        <View style={mobile.imgContainer}>
                            <Image source={props.imageWin} />
                        </View>
                        :
                        <View style={mobile.imgContainer}>
                            <Image source={props.imageLose} />
                        </View>
                }

                <View style={mobile.winLoseContainer}>
                    {
                        props.win ?
                            <Text>Hai vinto!</Text>
                            :
                            <Text>Hai perso! {props.penitence}</Text>
                    }
                    <Text>{props.username} - CPU : {props.userScore} - {props.cpuScore}</Text>
                </View>
            </View>

            <View style={mobile.buttons}>
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
    result : {
        width: '50%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 0,
        marginHorizontal: 'auto',
    },
});

const desktop = StyleSheet.create({

})

export default Result