
import HomeScreen from "./components/HomeScreen/HomeScreen";
import NavBar from "./components/NabBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-app">
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
