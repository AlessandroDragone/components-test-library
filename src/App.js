import "./App.css";
import CustomInputBox from "./components/CustomInputBox";
import { View } from "react-native";
import { CustomButton } from "./components";
import Home from "./components/Home";
import Ranking from "./components/Ranking";

function App() {
  function log(e) {
    console.log(e);
  }
  return (
    <div className="App">
      <Ranking />
    </div>
  );
}

export default App;
