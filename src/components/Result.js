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
                        <View style={mobile.imgContainer}>
                            <Image style={isDesktop ? [mobile.img, desktop.img] : mobile.img} source={props.imgWin} resizeMode={'contain'} />
                        </View>
                        :
                        <View style={mobile.imgContainer}>
                            <Image style={isDesktop ? [mobile.img, desktop.img] : mobile.img} source={props.imgLose} resizeMode={'contain'} />
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
                            <>
                                <Text
                                    style={isDesktop ? [mobile.text, desktop.text] : mobile.text}
                                >
                                    Hai perso!
                                </Text>
                                <Text
                                    style={isDesktop ? [mobile.text, desktop.text] : mobile.text}
                                >
                                    {props.penitence}
                                </Text>
                            </>
                    }
                    <Text
                        style={isDesktop ? [mobile.text, desktop.text] : mobile.text}
                    >
                        {props.username} - CPU:
                    </Text>
                    <Text
                        style={isDesktop ? [mobile.text, desktop.text] : mobile.text}
                    >
                        {props.userScore} - {props.cpuScore}
                    </Text>
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
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#c85260",
    },
    header: {
        position: 'absolute',
        top: 30,
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
        textAlign: 'center',
    },
    imgContainer: {
        width: '100%',
        marginTop: 75,
    },
    img: {
        height: 200,
        width: '100%',
    },
    winLoseContainer: {
        textAlign: 'center',
    },
    text: {
        color: '#3c5070',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: { width: 1, height: 3 },
        textShadowColor: '#ffe4e588',
        textShadowRadius: 1,
        margin: 0,
        marginTop: 10,
    },
    buttons: {
        justifyContent: 'space-evenly',
        height: 170,
        marginBottom: 50,
    },
});

const desktop = StyleSheet.create({
    img: {
        height: 300,
    },
    text: {
        fontSize: 45,
        marginTop: 30,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 120,
        justifyContent: 'center',
        gap: 50,
        height: 'auto',
        marginBottom: 0,
    },
})

export default Result