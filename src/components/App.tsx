import React from "react";
import { SpecieCard } from "./SpecieCard";

const App: React.FC = () => {
  return (
    <div>
      <h2>Kim Rune</h2>
      <SpecieCard name="Eridani Empire" />
      <SpecieCard name="Hydran Progress" />
      <SpecieCard name="Planta" />
      <SpecieCard name="Descendantd of Draco" />
      <SpecieCard name="Mechanema" />
      <SpecieCard name="Orion Hegemony" />
      <SpecieCard name="Terran" />
      <SpecieCard name="Ancients" />
      <SpecieCard name="Guardians" />
      <SpecieCard name="Galactic Center" />
    </div>
  );
};

export default App;
