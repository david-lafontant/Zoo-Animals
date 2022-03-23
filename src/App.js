import "./App.css";
import Zoo from "./components/zoo/zoo";
import AnimalDetail from "./components/animalDetail/animalDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Zoo />} />
        <Route path="/Zoo" element={<Zoo />} />
        <Route path="/AnimalDetail" element={<AnimalDetail />} />
      </Routes>
    </div>
  );
}

export default App;
