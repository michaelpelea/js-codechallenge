import Modal from "react-modal";
import SettingsSelector from "./components/settings/SettingsSelector";
import "./styles.css";

Modal.setAppElement("#root");

function App() {
  return <SettingsSelector />;
}

export default App;
