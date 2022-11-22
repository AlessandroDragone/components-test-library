import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import StyleSheet from 'react-native-media-query';
import CustomButton from "./CustomButton";
import CustomInputBox from "./CustomInputBox";

const arrayPen = [
    "Offri da bere a tutti",
    "Bevi 2 shot di fila",
    "Fai 10 piegamenti",
    "Mangia un peperoncino intero",
    "Dire uno scioglilingua",
    "Contare a ritroso da 980 a 100",
    "Salta la corda per 2 minuti",
    "Mimare un proverbio",
    "Imita il verso di 3 animali",
];

function Home(props) {

    const [state, setState] = useState({
        penitence: arrayPen[0],
    })

    let username = '';

    const nav = () => {

    }

    const setUsername = (e) => {
        username = e
    }

    const setPenitence = () => {
        let rand = Math.floor(Math.random() * arrayPen.length);

        if (state.penitence !== arrayPen[rand]) {
            setState({
                penitence: arrayPen[rand],
            });
        } else {
            setPenitence();
        }
    }

    return (
        <View>
            <View
                style={styles.header}
                dataSet={{ media: ids.header }}
            >
                <CustomButton
                    label={'Classifica'}
                    callback={nav}
                />
            </View>

            <View
                style={styles.container}
                dataSet={{ media: ids.container }}
            >
                <Text
                    style={styles.title}
                    dataSet={{ media: ids.title }}
                >
                    Sasso Carta Forbice
                </Text>

                <Image
                    source={props.image}
                />

                <View
                    style={styles.inputContainer}
                    dataSet={{ media: ids.inputContainer }}
                >
                    <CustomInputBox
                        placeholder={'Inserisci'}
                        callbackChange={setUsername}
                    />
                    <CustomButton
                        label={"Gioca"}
                        callback={nav}
                    />
                </View>

                <Text
                    style={styles.penitence}
                    dataSet={{ media: ids.penitence }}
                >
                    {state.penitence}
                </Text>
                <CustomButton
                    label={"Genera penitenza casuale"}
                    callback={setPenitence}
                />
            </View>
        </View>
    );
}

const { ids, styles } = StyleSheet.create({
    header: {
        position: 'absolute',
        top: '20px',
        right: '25px',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        '@media (min-width: 1000px)': {
            position: 'absolute',
            top: '50px',
            right: '25px',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
    },
    container: {
        width: '90%',
        marginVertical: 0,
        marginHorizontal: 'auto',
        gap: '30px',
        '@media (max-width: 767px)': {
            width: '90%',
        },
    },
    title: {
        marginTop: '50px',
        paddingTop: '40px',
        color: '#3c5070',
        fontSize: '40px',
        textShadow: '1px 3px 0 #ffe4e5, 1px 13px 5px #ffe4e5',
        '@media (min-width: 1000px)': {
            fontSize: '60px',
        },
    },
    inputContainer: {
        width: '100%',
        marginVertical: 0,
        marginHorizontal: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        overflow: 'hidden',
        '@media (max-width: 767px)': {
            marginBottom: '10px',
            flexDirection: 'column',
        },
    },
    penitence: {
        color: 'white',
        fontSize: '25px',
        '@media (min-width: 1000px)': {
            fontSize: '35px',
        },
    },
})

export default Home