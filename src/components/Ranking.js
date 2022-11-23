import React, { useState } from "react";

import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";
import { useMediaQuery } from "react-responsive";

function Ranking(props) {

    const isDesktop = useMediaQuery({ minWidth: 992 })

    const renderRow = () => {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
            </View>
        );
    }

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
        <View>
            <Text>
                Ranking
            </Text>

            <View style={mobile.table}>

                <View style={mobile.row}>
                    <Text style={mobile.textColumn}>Rank</Text>
                    <Text style={mobile.textColumn}>Nickname</Text>
                    <Text style={mobile.textColumn}>Vittorie</Text>
                    <Text style={mobile.textColumn}>Sconfitte</Text>
                    <Text style={mobile.textColumn}>Match</Text>
                </View>

                <View style={mobile.line} />

                {data.map((d, key) => {
                    return (
                        <View
                            style={mobile.row}
                            key={key}
                        >
                            <View>
                                <Text style={mobile.textRow}>{d.rank}</Text>
                            </View>

                            <View>
                                <Text style={mobile.textRow}>{d.nickname}</Text>
                            </View>

                            <View>
                                <Text style={mobile.textRow}>{d.vittorie}</Text>
                            </View>

                            <View>
                                <Text style={mobile.textRow}>{d.sconfitte}</Text>
                            </View>

                            <View>
                                <Text style={mobile.textRow}>{d.match}</Text>
                            </View>

                            <View style={mobile.line} />
                        </View>
                    )

                })}
            </View>

            <CustomButton
                label={'Gioca'}
                callback={goToHome}
                isDesktop={isDesktop}
            />
        </View>
    );
}

const mobile = StyleSheet.create({
    textColumn: {
        width: '20%',
        paddingVertical: 0,
        paddingHorizontal: 7,
        fontWeight: 'bold',
        fontSize: 'medium',
        textAlign: 'center',
    },
    textRow: {
        width: '20%',
        textAlign: 'center',
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
        height: 'fit-content',
        width: 'fit-content',
        minWidth: '25%',
        maxWidth: '95%',
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    line: {
        marginVertical: 0,
        marginHorizontal: 'auto',
        width: '95%',
        height: 2,
        backgroundColor: 'lightgray',
    },
});

const desktop = StyleSheet.create({

})

export default Ranking