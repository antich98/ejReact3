import "./App.css";
import Titulos from "./components/Titulos";
import Msg from "./components/Msg";

function App() {
  return (
    <div className="container-fluid">
      <Titulos tituloNuevo="my friend"/>
      <Msg/>
    </div>
  )
}

export default App;
