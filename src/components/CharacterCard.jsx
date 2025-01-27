import "./CharacterCard.css";
import ActionsCard from "./ActionsCard";
const CharacterCard = ({
    interaction,
    name,
    numPower,
    img,
    powerRival,
    nextRound,
    setScore,
}) => {
    return (
        <div className="character-card-container">
            <img className="character-card-img" src={img} alt="" />
            <div className="character-card-name">{name}</div>
            <div className="character-card-title-power">Power</div>
            {interaction ? (
                <ActionsCard
                    numPower={numPower}
                    powerRival={powerRival}
                    nextRound={nextRound}
                    setScore={setScore}
                />
            ) : (
                <div className="character-card-power">{numPower}</div>
            )}
        </div>
    );
};

export default CharacterCard;
