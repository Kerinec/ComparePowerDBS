import "./Versus.css";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Context } from "../App";
import { useContext } from "react";

const Versus = () => {
    const { setVersusState, versusState } = useContext(Context);
    let versusClass = "";
    let textVersus = <></>;
    if (versusState === "win") {
        versusClass = "versus-container win";
        textVersus = <FaCheckCircle />;
        setTimeout(() => {
            setVersusState("VS");
        }, 2000);
    }
    if (versusState === "loose") {
        versusClass = "versus-container loose";
        textVersus = <ImCross />;
        setTimeout(() => {
            setVersusState("VS");
        }, 2000);
    }
    if (versusState === "VS") {
        versusClass = "versus-container";
        textVersus = "VS";
    }
    return <div className={versusClass}>{textVersus}</div>;
};

export default Versus;
