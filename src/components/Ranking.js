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
                    <h3>Rank</h3>
                    <h3>Nickname</h3>
                    <h3>Vittorie</h3>
                    <h3>Sconfitte</h3>
                    <h3>Match</h3>
                </View>

                {data.map((d, key) => {
                    return (
                        <View
                            style={mobile.row}
                            key={key}
                        >
                            <View>
                                <Text>{d.rank}</Text>
                            </View>

                            <View>
                                <Text>{d.nickname}</Text>
                            </View>

                            <View>
                                <Text>{d.vittorie}</Text>
                            </View>

                            <View>
                                <Text>{d.sconfitte}</Text>
                            </View>

                            <View>
                                <Text>{d.match}</Text>
                            </View>
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
    table: {
        marginVertical: 15,
        marginHorizontal: 'auto',
        backgroundColor: '#f0f8ff',
        border: 'none',
        shadowOffset: {height: 10, width: 15},
        shadowColor: 'rgba(0, 0, 0, 0.349)',
        borderRadius: '25',
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
});

const desktop = StyleSheet.create({

})

export default Ranking