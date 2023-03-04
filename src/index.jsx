import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { palettes } from "./palettes";
import Palette from "./components/Palette";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((paletteData) => (
          <Palette
            key={paletteData.name}
            image={paletteData.image}
            name={paletteData.name}
            attributionUrl={paletteData.attribution.url}
            attributionName={paletteData.attribution.name}
            colors={paletteData.colors}
            description={paletteData.description}
            direction={paletteData.direction}
          />
        ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
