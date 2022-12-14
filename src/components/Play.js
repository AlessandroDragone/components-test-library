import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
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
  let stack = [props.paper, props.scissor, props.rock, null];

  const [state, setState] = useState({
    cpuPoint: 0,
    playerPoint: 0,
    playerChoice: null,
    resultMessage: "",
    cpuIconChoice: null,
    playerIconChoice: null,
    selected: {
      rock: false,
      paper: false,
      scissor: false,
    },
  });

  const isDesktop = useMediaQuery({ minWidth: 650 });

  function handleChoice(e) {
    console.log(e);

    let rock = false;
    let paper = false;
    let scissor = false;

    switch (e) {
      case 0:
        paper = true;
        break;
      case 1:
        scissor = true;
        break;
      case 2:
        rock = true;
        break;
    }

    setState({
      ...state,
      playerChoice: e,
      selected: {
        rock: rock,
        paper: paper,
        scissor: scissor,
      }
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
    let playerPoint = state.playerPoint;
    let cpuPoint = state.cpuPoint;
    let message = "";
    switch (result) {
      case "w":
        playerPoint++;
        message = "Hai vinto!";
        break;
      case "l":
        cpuPoint++;
        message = "Hai perso!";

        break;
      default:
        message = "Pareggio!";
        break;
    }
    console.log(state.playerChoice, IAchoice, result);

    let playerChoice = state.playerChoice

    if (cpuPoint === 3 || playerPoint === 3) {
      let result = {
        cpu: cpuPoint,
        playerPoint: playerPoint,
      };

      playerChoice = 3;
      IAchoice = 3;
      cpuPoint = 0;
      playerPoint = 0;
      message = '';

      props.callbackResult(result);
    }

    setState({
      ...state,
      cpuIconChoice: stack[IAchoice],
      playerIconChoice: stack[playerChoice],
      resultMessage: message,
      playerPoint: playerPoint,
      cpuPoint: cpuPoint,
      playerChoice: null,
      selected: {
        rock: false,
        paper: false,
        scissor: false,
      },
    });
  }

  return (
    <View style={style.container}>
      <Text style={isDesktop ? [style.title, desktop.title] : style.title}>Sasso Carta Forbice</Text>
      <Text style={isDesktop ? [style.text, style.score, desktop.text] : [style.text, style.score]}>Punteggio:</Text>
      <Text style={isDesktop ? [style.text, style.score, desktop.text] : [style.text, style.score]}>
        {props.username} {state.playerPoint} - {state.cpuPoint} CPU
      </Text>
      <Text style={isDesktop ? [style.text, desktop.text] : style.text}>Scegli la tua giocata:</Text>
      <View style={style.iconContainer}>
        <IconButton isDesktop={isDesktop} value={0} callback={handleChoice} selected={state.selected.paper}>
          {props.paper}
        </IconButton>
        <IconButton isDesktop={isDesktop} value={1} callback={handleChoice} selected={state.selected.scissor}>
          {props.scissor}
        </IconButton>
        <IconButton isDesktop={isDesktop} value={2} callback={handleChoice} selected={state.selected.rock}>
          {props.rock}
        </IconButton>
      </View>

      <View style={style.button}>
        <CustomButton
          label={"Conferma"}
          callback={confirmChoice}
          disable={state.playerChoice !== null ? false : true}
        />
      </View>
      {!!state.playerIconChoice && (
        <View style={style.resultContainer}>
          {state.playerIconChoice}
          <View style={style.iconRotated}>{state.cpuIconChoice}</View>
        </View>
      )}
      <View>
        <Text style={isDesktop ? [style.text, style.score, desktop.text] : [style.text, style.score]}>{state.resultMessage}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#c85260",
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    marginTop: 50,
    color: "#3c5070",
    fontSize: 35,
    textShadowOffset: { width: 3, height: 1 },
    textShadowColor: "#ffe4e5",
    textShadowRadius: 1,
    fontWeight: "bold",
  },
  text: {
    marginVertical: 20,
    color: "white",
    fontSize: 25,
  },
  score: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    marginVertical: 40,
  },
  iconRotated: {
    transform: [{ rotateY: "180deg" }],
  },
  resultContainer: {
    flexDirection: "row",
  },
});

const desktop = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  text: {
    fontSize: 35,
  },
})

export default Play;
