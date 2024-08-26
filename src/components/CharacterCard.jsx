import "./CharacterCard.css";
import ActionsCard from "./ActionsCard";
const CharacterCard = ({interaction}) => {
    return (
        <div className="character-card-container">
            <img
                className="character-card-img"
                src="https://dragonball-api.com/characters/dodoria.webp"
                alt=""
            />
            <div className="character-card-name">"Goku"</div>
            <div className="character-card-title-power">Power</div>
            {interaction ? (
                <ActionsCard />
            ) : (
                <div className="character-card-power">80000</div>
            )}
        </div>
    );
};

export default CharacterCard;
