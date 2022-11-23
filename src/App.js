import "./App.css";
import CustomInputBox from "./components/CustomInputBox";
import { View } from "react-native";
import { CustomButton, Play } from "./components";
import Home from "./components/Home";
import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  function log(e) {
    console.log(e);
  }
  return (
    <div className="App">
      <Play
        username={"marco"}
        paper={<GiPaper color="pink" size={isDesktop ? 100 : 80} />}
        scissor={<GiScissors color="pink" size={isDesktop ? 100 : 80} />}
        rock={<GiRock color="pink" size={isDesktop ? 100 : 80} />}
      />
    </div>
  );
}

export default App;
