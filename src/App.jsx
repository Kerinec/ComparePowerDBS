import { useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Versus from "./components/Versus";
import Score from "./components/Score";

function App() {
    return (
        <div className="app">
            <CharacterCard interaction={false}/>
            <Versus />
            <CharacterCard interaction={true}/>
            <Score />
        </div>
    );
}

export default App;
