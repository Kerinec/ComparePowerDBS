import "./ActionsCard.css";
import Versus from "./Versus";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";
import { Context } from "../App";
import { useContext } from "react";
const ActionsCard = ({ numPower, powerRival, nextRound, setScore }) => {
    const { setVersusState } = useContext(Context);
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
                setVersusState("win");

                setScore((point) => {
                    return {
                        ...point,
                        score: point.score + 1,
                    };
                });
            } else {
                setVersusState("loose");
                setScore((point) => {
                    return {
                        highScore:
                            point.highScore < point.score
                                ? point.score
                                : point.highScore,
                        score: 0,
                    };
                });
            }
        }
        if (selection === "lower") {
            if (verificationNumStr() === "numPower") {
                setVersusState("loose");
                setScore((point) => {
                    return {
                        highScore:
                            point.highScore < point.score
                                ? point.score
                                : point.highScore,
                        score: 0,
                    };
                });
            } else {
                setVersusState("win");
                setScore((point) => {
                    return {
                        ...point,
                        score: point.score + 1,
                    };
                });
            }
        }
        nextRound();
    };
    const verificationNumStr = () => {
        let rightPowerValue = parseFloat(numPower);
        let leftPowerValue = parseFloat(powerRival);
        let rightPower = getTypePower(numPower);
        let leftPower = getTypePower(powerRival);
        if (rightPower === 0 && leftPower === 0) {
            let characterRightPower = numPower.replace(/[.,]/g, "");
            let characterLeftPower = powerRival.replace(/[.,]/g, "");
            rightPowerValue = parseInt(characterRightPower);
            leftPowerValue = parseInt(characterLeftPower);
        }
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

    return (
        <div className="actions-card-container">
            <button
                onClick={() => {
                    verificationWin("higther");
                }}
                className="actions-card"
            >
                Higher
                <FaAngleDoubleUp color="green" />
            </button>
            <button
                onClick={() => {
                    verificationWin("lower");
                }}
                className="actions-card"
            >
                Lower
                <FaAngleDoubleDown color="red" />
            </button>
        </div>
    );
};

export default ActionsCard;
