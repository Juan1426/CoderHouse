
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"
import Clock from "./components/CompClase/Clock";
import ClickTracker from "./components/CompClase/ClickTracker";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
