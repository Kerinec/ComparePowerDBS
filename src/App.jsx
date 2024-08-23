import { useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Versus from "./components/Versus";

function App() {
    return (
        <div className="app">
            <CharacterCard />
            <Versus />
            <CharacterCard />
        </div>
    );
}

export default App;
