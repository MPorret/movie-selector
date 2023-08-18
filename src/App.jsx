import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import data from "./assets/data.json";

function App() {
  const [movieId, setMovieId] = useState("");

  const movieChosen = data.find((movie) => movie.id === movieId);
  console.log(movieChosen);

  return (
    <div
      style={{
        backgroundImage: `url(${movieChosen && movieChosen.background})`,
        backgroundSize: "cover",
      }}
    >
      <Menu data={data} setMovieId={setMovieId} />
      {movieChosen && <Main movieChosen={movieChosen} />}
      {!movieChosen && <span>Merci de choisir un film</span>}
    </div>
  );
}

export default App;
