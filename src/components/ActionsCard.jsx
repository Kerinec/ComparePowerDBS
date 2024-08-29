import "./ActionsCard.css";

const ActionsCard = ({ numPower, powerRival }) => {
    const typePower = {
        Billion: 1,
        Trillion: 2,
        Quintillon: 3,
        Sextillon: 4,
        Septillion: 5,
        Googolplex: 6,
    };
    const verificationWin = (selection) => {
        if (selection === "higther") {
            if (verificationNumStr() === "numPower") {
                console.log("you win");
            } else {
                console.log("you loose");
            }
        }
        if (selection === "lower") {
            if (verificationNumStr() === "numPower") {
                console.log("you loose");
            } else {
                console.log("you win");
            }
        }
    };
    const verificationNumStr = () => {
        let characterRightPower = numPower.replace(/\./g, "");
        let characterLeftPower = powerRival.replace(/\./g, "");

        let rightPowerValue = parseInt(characterRightPower);
        let leftPowerValue = parseInt(characterLeftPower);

        let rightPower = getTypePower(characterRightPower);
        let leftPower = getTypePower(characterLeftPower);

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
        if (power.includes("Quintillion") || power.includes("quintillon")) {
            str = "Quintillion";
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
