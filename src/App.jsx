import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Vuelos y Más! ✈️ Tu viaje empieza aquí." />
    </>
  );
}

export default App;
