import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [sneakerName, setSneakerName] = useState("");
  const [sneakerChosen, setSneakerChosen] = useState(false);
  const [sneaker, setSneaker] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    type: "",
  });

  const searchSneaker = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${sneakerName}`).then(
      (response) => {
        setSneaker({
          name: sneakerName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setSneakerChosen(true);
      }
    );
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Sneaker Information</h1>
        <input
          type="text"
          onChange={(e) => {
            setSneakerName(e.target.value);
          }}
        />
        <button onClick={searchSneaker}>Search Sneaker</button>
      </div>
      <div className="DisplaySection">
        {!sneakerChosen ? (
          <h1> Please choose a Sneaker </h1>
        ) : (
          <h1>{sneakerName}</h1>
        )}
      </div>
    </div>
  );
}

export default App;
