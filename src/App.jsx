import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import data from "./assets/data.json";

function App() {
  const [show, setShow] = useState("");
  const [movieId, setMovieId] = useState("");

  return (
    <div className={show}>
      <Menu data={data} setShow={setShow} setMovieId={setMovieId} />
      <Main movieId={movieId} data={data} />
      {show === "" && <span>Merci de choisir un film</span>}
    </div>
  );
}

export default App;
