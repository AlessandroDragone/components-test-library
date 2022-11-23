import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, StatusBar } from "react-native";
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
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const [state, setState] = useState({
    penitence: arrayPen[0],
  });

  let username = "";

  const setUsername = (e) => {
    username = e;
  };

  const setPenitence = () => {
    let rand = Math.floor(Math.random() * arrayPen.length);

    if (state.penitence !== arrayPen[rand]) {
      setState({
        penitence: arrayPen[rand],
      });
    } else {
      setPenitence();
    }
  };

  const goToRanking = () => {
    if (!!props.callbackRank) {
      props.callbackRank();
    }
  };

  const goToPlay = () => {
    if (!!props.callbackPlay) {
      props.callbackPlay();
    }
  };

    return (
        <View style={isDesktop ? [style.mainContainer, desktopStyle.mainContainer] : style.mainContainer}>
            <View
                style={style.header}
            >
                <CustomButton
                    label={'Classifica'}
                    callback={goToRanking}
                    isDesktop={isDesktop}
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
                <View style={style.imageContainer}>
                <Image
                    style={isDesktop ? [style.image, desktopStyle.image] : style.image}
                    source={props.image}
                />
                </View>

        <View style={style.inputContainer}>
          <CustomInputBox
            placeholder={"Inserisci"}
            callbackChange={setUsername}
            isDesktop={isDesktop}
          />
          <CustomButton
            label={"Gioca"}
            callback={goToPlay}
            isDesktop={isDesktop}
          />
        </View>

        <Text style={style.penitence}>{state.penitence}</Text>
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
    mainContainer: {
        flex:1,
        marginTop: 15,
        height: StatusBar.currentHeight - 15,
    },  
    imageContainer: {
        width: '100%',
    },  
    image: {
        width: Dimensions.get('window').width,
        height: 300,
    },
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
        flex: 1,
        marginVertical: 0,
        marginHorizontal: 'auto',
    },
    title: {
        marginTop: 50,
        paddingTop: 40,
        color: '#3c5070',
        fontSize: 40,
        textAlign: 'center'
    },
    inputContainer: {
        width: '100%',
        marginVertical: 10,
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
        textAlign: 'center'
    },
})

const desktopStyle = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row'
    },
    image: {
        width: '500px'
    },
    mainContainer: {
        width: '650px'
    }
})


export default Home