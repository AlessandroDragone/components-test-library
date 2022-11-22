import "./App.css";
import CustomInputBox from "./components/CustomInputBox";
import { View } from "react-native";
import { CustomButton } from "./components";
import Home from "./components/Home";

function App() {
  function log(e) {
    console.log(e);
  }
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
