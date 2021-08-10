
import HomeScreen from "./components/ItemListContainer/HomeScreen";
import NavBar from "./components/NabBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-app">
        <HomeScreen greeting=" #TextoPocoOriginal" />
      </div>
    </div>
  );
}

export default App;
