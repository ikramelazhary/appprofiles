import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ListeProfils from "./ListeProfils";

function App() {
  const [profils, setProfils] = useState([
    {
      nom: "Douae",
      age: 25,
      profession: "Développeuse",
      image: require("./assets/images/developpeuse.jpg"), // Image importée depuis src
    },
    {
      nom: "Sarah",
      age: 30,
      profession: "Architecte",
      image: require("./assets/images/architecte.jpg"), // Image importée depuis src
    },
  ]);

  const ajouterProfil = (nouveauProfil) => {
    setProfils([...profils, nouveauProfil]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Liste des Profils</h1>
      <ListeProfils profils={profils} ajouterProfil={ajouterProfil} />
    </div>
  );
}

export default App;
