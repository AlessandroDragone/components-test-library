import React, { useState } from "react";

import { StyleSheet, View, Text, ScrollView } from "react-native";
import CustomButton from "./CustomButton";
import { useMediaQuery } from "react-responsive";

function Ranking(props) {

    const isDesktop = useMediaQuery({ minWidth: 650 })

    const goToHome = () => {
        if (!!props.callbackHome) {
            props.callbackHome();
        }
    }

    return (
        <View style={isDesktop ? [mobile.rankingContainer, desktop.rankingContainer] : mobile.rankingContainer}>

            <Text
                style={isDesktop ? [mobile.gameTitle, desktop.gameTitle] : mobile.gameTitle}
            >
                Sasso Carta Forbice
            </Text>

            <Text style={mobile.title}>
                Classifica
            </Text>
            <View style={mobile.scrollViewContainer}>

                <View style={mobile.row}>
                    <View style={mobile.viewRow}>
                        <Text style={isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn}>Rank</Text>
                    </View>
                    <View style={mobile.viewRow}>
                        <Text style={isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn}>Nome</Text>
                    </View>
                    <View style={mobile.viewRow}>
                        <Text style={isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn}>Vittorie</Text>
                    </View>
                    <View style={mobile.viewRow}>
                        <Text style={isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn}>Sconfitte</Text>
                    </View>
                    <View style={mobile.viewRow}>
                        <Text style={isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn}>Match</Text>
                    </View>
                </View>

            <ScrollView style={mobile.table}>
                {!!props.data &&
                    props.data.map((d, key) => {
                        return (
                            <View key={key}>
                                <View style={mobile.line} />
                                <View style={mobile.row}>
                                    <View style={mobile.viewRow}>
                                        <Text style={isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow}>#{key+1}</Text>
                                    </View>

                                    <View style={mobile.viewRow}>
                                        <Text style={isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow}>{d.nickname}</Text>
                                    </View>

                                    <View style={mobile.viewRow}>
                                        <Text style={isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow}>{d.vittorie}</Text>
                                    </View>

                                    <View style={mobile.viewRow}>
                                        <Text style={isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow}>{d.sconfitte}</Text>
                                    </View>

                                    <View style={mobile.viewRow}>
                                        <Text style={isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow}>{d.match}</Text>
                                    </View>
                                </View>
                            </View>
                        )

                    })}
            </ScrollView>
            </View>

            <CustomButton
                label={'Home'}
                callback={goToHome}
                isDesktop={isDesktop}
            />
        </View>
    );
}

const mobile = StyleSheet.create({
    rankingContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#c85260",
    },
    scrollViewContainer: {
        maxHeight: 350,
        overflow: 'hidden',
        backgroundColor: '#f0f8ff',
        border: 'none',
        shadowOffset: { height: 10, width: 15 },
        shadowRadius: 6,
        shadowColor: 'rgba(0, 0, 0, 0.349)',
        borderRadius: 25,
        marginBottom: 25,
        width: '95%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 25
    },
    textColumn: {
        paddingHorizontal: 7,
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
    },
    textRow: {
        fontSize: 12,
        textAlign: 'center',
    },
    viewRow: {
        width: '20%',
    },
    table: {
        marginVertical: 15,
        marginHorizontal: 'auto',
        flexDirection: 'column',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    line: {
        marginVertical: 0,
        marginHorizontal: 'auto',
        width: '95%',
        height: 2,
        backgroundColor: 'lightgray',
    },
    gameTitle: {
        marginTop: 30,
        marginBottom: 30,
        paddingTop: 20,
        color: '#3c5070',
        fontSize: 35,
        fontWeight: 'bold',
        textShadowOffset: { width: 3, height: 1 },
        textShadowColor: '#ffe4e5',
        textShadowRadius: 1,
        textAlign: 'center'
    },
});

const desktop = StyleSheet.create({
    textColumn: {
        fontSize: 'medium',
    },
    textRow: {
        fontSize: 'medium',
    },
    rankingContainer: {
        width: 650,
        marginVertical: 0,
        marginHorizontal: 'auto',
    },
    gameTitle: {
        fontSize: 45,
    },
})

export default Ranking