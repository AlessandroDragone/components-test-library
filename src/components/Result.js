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
        <View style={mobile.container}>

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
                        <View
                            style={isDesktop ? [mobile.imgContainer, desktop.imgContainer] : mobile.imgContainer}
                        >
                            <Image style={mobile.img} source={props.imgWin} />
                        </View>
                        :
                        <View
                            style={isDesktop ? [mobile.imgContainer, desktop.imgContainer] : mobile.imgContainer}
                        >
                            <Image style={mobile.img} source={props.imgLose} />
                        </View>
                }

                <View style={mobile.winLoseContainer}>
                    {
                        props.win ?
                            <Text
                                style={isDesktop ? [mobile.text, desktop.text] : mobile.text}
                            >
                                Hai vinto!
                            </Text>
                            :
                            <Text
                                style={isDesktop ? [mobile.text, desktop.text] : mobile.text}
                            >
                                Hai perso! {props.penitence}
                            </Text>
                    }
                    <Text style={mobile.text}>{props.username} - CPU : {props.userScore} - {props.cpuScore}</Text>
                </View>
            </View>

            <View
                style={isDesktop ? [mobile.buttons, desktop.buttons] : mobile.buttons}
            >
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
    container: {
        backgroundColor: "#c85260",
    },
    header: {
        position: 'absolute',
        top: 20,
        right: 20,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    result: {
        width: '50%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 0,
        marginHorizontal: 'auto',
        marginTop: '120',
        textAlign: 'center',
    },
    imgContainer: {
        height: 100,
        width: 100,
        marginTop: 120,
    },
    img: {
        height: '100%',
    },
    winLoseContainer: {
        marginTop: '120',
        textAlign: 'center',
    },
    text: {
        color: '#3c5070',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowOffset: { width: 1, height: 3 },
        textShadowColor: '#ffe4e588',
        margin: 0,
        marginTop: 30,
    },
    buttons: {
        marginTop: 120,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

const desktop = StyleSheet.create({
    imgContainer: {
        height: 300,
        width: 300,
    },
    text: {
        fontSize: 45,
    },
    buttons: {
        justifyContent: 'center',
        gap: 50,
    },
})

export default Result