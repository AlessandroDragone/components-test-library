import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GiRock } from "react-icons/gi";
import { GiPaper } from "react-icons/gi";
import { GiScissors } from "react-icons/gi";
import IconButton from "./IconButton";
import { useMediaQuery } from "react-responsive";

function Play(props) {
  const [state, setState] = useState({
    cpuPoint: 0,
    playerPoint: 0,
  });

  const isDesktop = useMediaQuery({ minWidth: 992 });

  const nav = () => {};

  return (
    <View style={style.container}>
      <Text>Sasso Carta Forbice</Text>
      <Text>
        Punteggio: {props.username} {state.playerPoint} - {state.playerPoint}{" "}
        CPU
      </Text>
      <Text>Scegli la tua giocata:</Text>
      <View style={style.iconContainer}>
        <IconButton isDesktop={isDesktop}>
          <GiPaper color="pink" size={isDesktop ? 100 : 50} />
        </IconButton>
        <IconButton isDesktop={isDesktop}>
          <GiScissors color="pink" size={isDesktop ? 100 : 50} />
        </IconButton>
        <IconButton isDesktop={isDesktop}>
          <GiRock color="pink" size={isDesktop ? 100 : 50} />
        </IconButton>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    gap: 30,
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Play;
