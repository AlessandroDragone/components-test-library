import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
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

let username = "";

function Home(props) {
  const isDesktop = useMediaQuery({ minWidth: 650 });

  const [state, setState] = useState({
    penitence: arrayPen[0],
  });

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
    let response = {
      username: username,
      penitence: state.penitence,
    };
    if (!!props.callbackPlay) {
      props.callbackPlay(response);
    }
  };

  return (
    <View
      style={
        isDesktop
          ? [style.mainContainer, desktopStyle.mainContainer]
          : style.mainContainer
      }
    >
      <View style={style.header}>
        <CustomButton
          label={"Classifica"}
          callback={goToRanking}
          isDesktop={isDesktop}
        />
      </View>

      <View style={style.container}>
        <Text style={isDesktop ? [style.title, desktopStyle.title] : style.title}>Sasso Carta Forbice</Text>
        <View style={style.imageContainer}>
          <Image
            style={isDesktop ? [style.image, desktopStyle.image] : style.image}
            source={props.image}
            resizeMode={'contain'}
          />
        </View>

        <View style={style.inputContainer}>
          <CustomInputBox
            placeholder={"Inserisci un nickname"}
            callbackChange={setUsername}
            isDesktop={isDesktop}
            style={style.inputBox}
          />
          <CustomButton
            label={"Gioca"}
            callback={goToPlay}
            isDesktop={isDesktop}
          />
        </View>

        <Text style={isDesktop ? [style.penitence, desktopStyle.penitence] : style.penitence}>{state.penitence}</Text>

        <View style={{marginHorizontal: 'auto'}}>
          <CustomButton
            label={"Genera penitenza casuale"}
            callback={setPenitence}
            isDesktop={isDesktop}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#c85260",
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  header: {
    position: "absolute",
    zIndex: 1,
    top: 30,
    right: 25,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    marginVertical: 0,
  },
  title: {
    marginTop: 50,
    paddingTop: 40,
    color: "#3c5070",
    fontSize: 35,
    textAlign: "center",
    textShadowOffset: { width: 3, height: 1 },
    textShadowColor: "#ffe4e5",
    textShadowRadius: 1,
    fontWeight: "bold",
  },
  inputBox: {
    marginBottom: 15,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    overflow: "hidden",
  },
  penitence: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 15,
  },
});

const desktopStyle = StyleSheet.create({
  mainContainer: {
    marginHorizontal: "auto",
  },
  inputContainer: {
    flexDirection: "row",
  },
  image: {
    height: 400,
  },
  title: {
    fontSize: 45,
  },
  penitence: {
    fontSize: 35
  },
});

export default Home;
