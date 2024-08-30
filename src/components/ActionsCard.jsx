import "./ActionsCard.css";
import Versus from "./Versus";

const ActionsCard = ({ numPower, powerRival, state }) => {
    const typePower = {
        Billion: 1,
        Trillion: 2,
        Quintillion: 3,
        Sextillion: 4,
        Septillion: 5,
        Googolplex: 6,
    };
    const verificationWin = (selection) => {
        if (selection === "higther") {
            if (verificationNumStr() === "numPower") {
                state("win");
            } else {
                state("loose");
            }
        }
        if (selection === "lower") {
            if (verificationNumStr() === "numPower") {
                state("loose");
            } else {
                state("win");
            }
        }
    };
    const verificationNumStr = () => {
        let rightPowerValue = parseFloat(numPower);
        let leftPowerValue = parseFloat(powerRival);
        let rightPower = getTypePower(numPower);
        let leftPower = getTypePower(powerRival);
        if (rightPower === 0 && leftPower === 0) {
            let characterRightPower = numPower.replace(/[.,]/g, '');
            let characterLeftPower = powerRival.replace(/[.,]/g, '');
            rightPowerValue = parseInt(characterRightPower);
            leftPowerValue = parseInt(characterLeftPower);
        }
        console.log("derecha", rightPowerValue);
        console.log("izquierda", leftPowerValue);
        if (rightPower === leftPower) {
            if (rightPowerValue > leftPowerValue) {
                return "numPower";
            } else {
                return "powerRival";
            }
        }
        if (rightPower > leftPower) {
            return "numPower";
        } else {
            return "powerRival";
        }
    };

    const getTypePower = (power) => {
        let str = "";
        if (power.includes("Billion") || power.includes("billion")) {
            str = "Billion";
        }
        if (power.includes("Trillion") || power.includes("trillion")) {
            str = "Trillion";
        }
        if (power.includes("Quintillion") || power.includes("quintillion")) {
            str = "Quintillion";
        }
        if (power.includes("Sextillion") || power.includes("sextillion")) {
            str = "Sextillion";
        }
        if (power.includes("Septillion") || power.includes("septillion")) {
            str = "Septillion";
        }
        if (power.includes("Googolplex") || power.includes("googolplex")) {
            str = "Googolplex";
        }
        if (str === "") {
            return 0;
        }
        return typePower[str];
    };
    verificationNumStr();
    verificationWin();

    return (
        <div className="actions-card-container">
            <button
                onClick={() => {
                    verificationWin("higther");
                }}
                className="actions-card-more"
            >
                Higher
            </button>
            <button
                onClick={() => {
                    verificationWin("lower");
                }}
                className="actions-card-less"
            >
                Lower
            </button>
        </div>
    );
};

export default ActionsCard;
