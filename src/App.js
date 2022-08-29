import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [sneakerName, setSneakerName] = useState("");

  const searchSneaker = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${sneakerName}`).then(
      (response) => {
        console.log(response);
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
    </div>
  );
}

export default App;
