import React, { useState, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GiRock } from "react-icons/gi";
import { GiPaper } from "react-icons/gi";
import { GiScissors } from "react-icons/gi";
import IconButton from "./IconButton";
import { useMediaQuery } from "react-responsive";
import CustomButton from "./CustomButton";

let lastIAPlays = [];
const res = [
  ["p", "w", "l"],
  ["l", "p", "w"],
  ["w", "l", "p"],
];

function Play(props) {
  let IAinput = useRef(null);

  const [state, setState] = useState({
    cpuPoint: 0,
    playerPoint: 0,
    playerChoice: null,
    CPUChoice: null,
  });

  const isDesktop = useMediaQuery({ minWidth: 992 });

  function handleChoice(e) {
    console.log(e);
    setState({
      ...state,
      playerChoice: e,
    });
  }

  function handleIAPlay() {
    let local_play = Math.floor(Math.random() * 3);
    if (lastIAPlays.length < 2) {
      lastIAPlays.push(local_play);
      IAinput.value = local_play;
      return local_play;
    } else {
      if (local_play === lastIAPlays[0] && lastIAPlays[0] === lastIAPlays[1]) {
        return handleIAPlay(local_play);
      } else {
        lastIAPlays.shift();
        lastIAPlays.push(local_play);
        IAinput.value = local_play;
        return local_play;
      }
    }
  }

  function confirmChoice() {
    let IAchoice = handleIAPlay();
    let result = res[IAchoice][state.playerChoice];
    console.log(state.playerChoice, IAchoice, result);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Sasso Carta Forbice</Text>
      <Text style={[style.text, style.score]}>
        Punteggio: {props.username} {state.playerPoint} - {state.playerPoint}{" "}
        CPU
      </Text>
      <Text style={style.text}>Scegli la tua giocata:</Text>
      <View style={style.iconContainer}>
        <IconButton isDesktop={isDesktop} value={0} callback={handleChoice}>
          <GiPaper color="pink" size={isDesktop ? 100 : 80} />
        </IconButton>
        <IconButton isDesktop={isDesktop} value={1} callback={handleChoice}>
          <GiScissors color="pink" size={isDesktop ? 100 : 80} />
        </IconButton>
        <IconButton isDesktop={isDesktop} value={2} callback={handleChoice}>
          <GiRock color="pink" size={isDesktop ? 100 : 80} />
        </IconButton>
      </View>
      <View style={style.button}>
        <CustomButton
          label={"Conferma"}
          callback={confirmChoice}
          disable={state.playerChoice !== null ? false : true}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    marginTop: 50,
    paddingTop: 40,
    color: "#3c5070",
    fontSize: 35,
  },
  text: {
    marginVertical: 30,
    color: "white",
    fontSize: 25,
  },
  score: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: 40,
  },
});

export default Play;
