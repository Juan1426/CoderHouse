
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import Clock from "./components/CompClase/Clock";
import ClickTracker from "./components/CompClase/ClickTracker";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    
    <div>
      <BrowserRouter>

        <NavBar />

        <Route exact path="/">
            <ItemListContainer/>
        </Route>
        <Route exact path="/category/:catId">
            <ItemListContainer/>
        </Route>

        <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
