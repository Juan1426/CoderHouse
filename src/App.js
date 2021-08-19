
import HomeScreen from "./components/ItemListContainer/HomeScreen";
import NavBar from "./components/NavBar/NavBar"
import Clock from "./components/CompClase/Clock";
import ClickTracker from "./components/CompClase/ClickTracker";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-app">
        <HomeScreen greeting=" #TextoPocoOriginal" />
      </div>
      <Clock />
      <ClickTracker />
    </div>
  );
}

export default App;
