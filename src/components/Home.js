import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import CustomInputBox from "./CustomInputBox";
import { useMediaQuery } from "react-responsive";

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

    const isDesktop = useMediaQuery({minWidth: 992})

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
                style={style.header}
            >
                <CustomButton
                    label={'Classifica'}
                    callback={nav}
                />
            </View>

            <View
                style={style.container}
            >
                <Text
                    style={style.title}
                >
                    Sasso Carta Forbice
                </Text>

                <Image
                    source={props.image}
                />

                <View
                    style={isDesktop ? [style.inputContainer, desktopStyle.inputContainer] : style.inputContainer}
                >
                    <CustomInputBox
                        placeholder={'Inserisci'}
                        callbackChange={setUsername}
                        isDesktop={isDesktop}
                    />
                    <CustomButton
                        label={"Gioca"}
                        callback={nav}
                        isDesktop={isDesktop}
                    />
                </View>

                <Text
                    style={style.penitence}
                >
                    {state.penitence}
                </Text>
                <CustomButton
                    label={"Genera penitenza casuale"}
                    callback={setPenitence}
                    isDesktop={isDesktop}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    header: {
        position: 'absolute',
        zIndex: 1,
        top: 20,
        right: 25,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    container: {
        width: '90%',
        marginVertical: 0,
        marginHorizontal: 'auto',
        gap: 30,
    },
    title: {
        marginTop: 50,
        paddingTop: 40,
        color: '#3c5070',
        fontSize: 40,
    },
    inputContainer: {
        width: '100%',
        marginVertical: 0,
        marginHorizontal: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        overflow: 'hidden',
    },
    penitence: {
        color: 'white',
        fontSize: 25,
    },
})

const desktopStyle = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row'
    }
})

export default Home