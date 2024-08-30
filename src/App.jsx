import { useEffect, useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Versus from "./components/Versus";
import Score from "./components/Score";

function App() {
    const [characterData, setCharacterData] = useState({});
    const [character, setCharacter] = useState(undefined);
    const [saveNumber, setSaveNumber] = useState([]);
    const [versusState, setVersusState] = useState("VS");
    const [score, setScore] = useState({ score: 0, highScore: 0 });

    useEffect(() => {
        console.log("useEff fetch", characterData);
        fetchAllCharacter();
    }, []);
    useEffect(() => {
        console.log("useEff generate", characterData);
        if (character === undefined && Object.keys(characterData).length > 0) {
            generateCharacter();
        }
    }, [characterData]);

    const fetchAllCharacter = async () => {
        let response = await fetch(
            "https://dragonball-api.com/api/characters?limit=100"
        );
        let data = await response.json();
        let filterData = data.items.filter(
            (element) => element.ki !== "unknown"
        );
        setCharacterData(filterData);
    };
    const generateNextRound = () => {
        let nextRoundCharacter = {
            characterLeft: character.characterRight,
            characterRight: characterData[numRandom()],
        };
        setCharacter(nextRoundCharacter);
    };
    const numRandom = () => {
        let number = Math.round(Math.random() * characterData.length);
        if (number === characterData.length) {
            number = 0;
        }
        while (saveNumber.includes(number)) {
            number = Math.round(Math.random() * characterData.length);
            if (number === characterData.length) {
                number = 0;
            }
        }
        setSaveNumber([...saveNumber, number]);
        return number;
    };

    const generateCharacter = () => {
        let num1 = numRandom();
        let num2 = numRandom();
        while (num1 === num2) {
            num1 = numRandom();
        }
        setCharacter({
            characterLeft: characterData[num1],
            characterRight: characterData[num2],
        });
    };
    console.log("puntos", score);
    return (
        <div className="app">
            {character === undefined ? undefined : (
                <>
                    <CharacterCard
                        interaction={false}
                        name={character.characterLeft.name}
                        numPower={character.characterLeft.maxKi}
                        img={character.characterLeft.image}
                    />
                    <Versus state={versusState} setVersusState={setVersusState}/>
                    <CharacterCard
                        setScore={setScore}
                        nextRound={generateNextRound}
                        state={setVersusState}
                        interaction={true}
                        powerRival={character.characterLeft.maxKi}
                        name={character.characterRight.name}
                        numPower={character.characterRight.maxKi}
                        img={character.characterRight.image}
                    />
                    <Score score={score} />
                </>
            )}
        </div>
    );
}

export default App;
