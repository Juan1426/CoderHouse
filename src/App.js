/*Components*/
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from "./components/Footer/Footer";

//import Clock from "./components/CompClase/Clock";
//import ClickTracker from "./components/CompClase/ClickTracker";


/*Context*/
import { CartProvider } from "./context/CartContext";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { UIContextProvider } from "./context/UIContext";

/*React-router-dom*/
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

/*Styles*/
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"




function App() {
  return (
    
    <>
     <UIContextProvider>
        <CartProvider>

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

            <Route exact path="/cart">
                <CartScreen/>
            </Route>

            <Footer />

          </BrowserRouter>

        </CartProvider>
      </UIContextProvider>
    </>
  );
}

export default App;
