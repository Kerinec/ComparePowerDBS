import "./ActionsCard.css";

const ActionsCard = ({ numPower, powerRival }) => {
    const verificationWin = () => {
        let characterRightPower = numPower.replace(/\./g, "");
        let characterLeftPower = powerRival.replace(/\./g, "");
        console.log(characterRightPower)
        console.log(
            `personaje derecha ${parseInt(
                characterRightPower
            )} personaje izquierda ${parseInt(characterLeftPower)}`
        );
        if (parseInt(characterRightPower) > parseInt(characterLeftPower)) {
            console.log("win");
        } else {
            console.log("loose");
        }
    };
    verificationWin();

    return (
        <div className="actions-card-container">
            <button className="actions-card-more">Higher</button>
            <button className="actions-card-less">Lower</button>
        </div>
    );
};

export default ActionsCard;
