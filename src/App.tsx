import Card from "./components/Card";
import "./App.css";
import actividades from "./assets/Activities.json";

function App() {
  console.log(actividades);
  return (
    <div className="App">
      <div className="cards-container">
        {actividades.emociones.map((act, index) => (
          <Card category="emociones" challenge={act} key={index} />
        ))}
        {actividades.actividades_fisicas.map((act, index) => (
          <Card category="actividades_fisicas" challenge={act} key={index} />
        ))}
        {actividades.relajacion.map((act, index) => (
          <Card category="relajacion" challenge={act} key={index} />
        ))}
        {actividades.habilidades_sociales.map((act, index) => (
          <Card category="habilidades_sociales" challenge={act} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
