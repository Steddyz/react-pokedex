import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <div>
          <h1>POKEDEX</h1>
        </div>
        <div className="random">Рандомный покемон</div>
      </div>
    </>
  );
}

export default App;
