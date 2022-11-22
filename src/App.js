import logo from "./logo.svg";
import "./App.css";
import CustomInputBox from "./components/CustomInputBox";
import { View } from "react-native";
import { CustomButton } from "./components";

function App() {
  function log(e) {
    console.log(e);
  }
  return (
    <div className="App">
      <View style={{ height: "100px", width: "300px" }}>
        <CustomButton />
      </View>

      <CustomInputBox callbackChange={log} />
    </div>
  );
}

export default App;
