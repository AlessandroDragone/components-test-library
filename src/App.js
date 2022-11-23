import "./App.css";
import CustomInputBox from "./components/CustomInputBox";
import { View } from "react-native";
import { CustomButton, Play } from "./components";
import Home from "./components/Home";

function App() {
  function log(e) {
    console.log(e);
  }
  return (
    <div className="App">
      <Play username={"marco"} />
    </div>
  );
}

export default App;
