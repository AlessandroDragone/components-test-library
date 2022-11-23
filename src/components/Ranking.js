import React, { useState } from "react";

import { StyleSheet, View, Text, ScrollView } from "react-native";
import CustomButton from "./CustomButton";
import { useMediaQuery } from "react-responsive";

function Ranking(props) {

    const isDesktop = useMediaQuery({ minWidth: 992 })

    const goToHome = () => {
        if (!!props.callbackHome) {
            props.callbackHome();
        }
    }

    const data = [
        {
            rank: 1,
            nickname: 'alex',
            vittorie: 1,
            sconfitte: 2,
            match: 3
        },
        {
            rank: 2,
            nickname: 'marco',
            vittorie: 1,
            sconfitte: 2,
            match: 3
        },
        {
            rank: 3,
            nickname: 'gianluca',
            vittorie: 1,
            sconfitte: 2,
            match: 3
        },
    ];

    return (
        <View style={isDesktop ? [mobile.rankingContainer, desktop.rankingContainer] : mobile.rankingContainer}>

            <View
                style={mobile.header}
            >
                <CustomButton
                    label={'Classifica'}
                    callback={goToHome}
                    isDesktop={isDesktop}
                />
            </View>

            <Text
                style={mobile.gameTitle}
            >
                Sasso Carta Forbice
            </Text>

            <Text style={mobile.title}>
                Ranking
            </Text>

            <ScrollView style={mobile.table}>

                <View style={mobile.row}>
                    <View style={mobile.viewRow}>
                        <Text style={isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn}>Rank</Text>
                    </View>
                    <View style={mobile.viewRow}>
                        <Text style={isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn}>Nickname</Text>
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

                {data.map((d, key) => {
                    return (
                        <View key={key}>
                            <View style={mobile.line} />
                            <View style={mobile.row}>
                                <View style={mobile.viewRow}>
                                    <Text style={isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow}>{d.rank}</Text>
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

            <CustomButton
                label={'Gioca'}
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
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
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
        backgroundColor: '#f0f8ff',
        border: 'none',
        shadowOffset: { height: 10, width: 15 },
        shadowRadius: 6,
        shadowColor: 'rgba(0, 0, 0, 0.349)',
        borderRadius: 25,
        flex: 1,
        flexDirection: 'column',
        width: '95%',
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
        marginTop: 50,
        marginBottom: 50,
        paddingTop: 20,
        color: '#3c5070',
        fontSize: 40,
        textShadowOffset: { width: 3, height: 1 },
        textShadowColor: '#ffe4e5'
    },
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
})

export default Ranking