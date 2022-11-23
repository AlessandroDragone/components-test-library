import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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
                    style={style.inputContainer}
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
                    style={style.penitence}
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

const style = StyleSheet.create({
    header: {
        position: 'absolute',
        top: '20px',
        right: '25px',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    container: {
        width: '90%',
        marginVertical: 0,
        marginHorizontal: 'auto',
        gap: '30px',
    },
    title: {
        marginTop: '50px',
        paddingTop: '40px',
        color: '#3c5070',
        fontSize: '40px',
        textShadow: '1px 3px 0 #ffe4e5, 1px 13px 5px #ffe4e5',
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
    },
    penitence: {
        color: 'white',
        fontSize: '25px',
    },
})

export default Home