import "./Versus.css";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Versus = ({ state, setVersusState }) => {
    let versusClass = "";
    let textVersus = <></>;
    if (state === "win") {
        versusClass = "versus-container win";
        textVersus = <FaCheckCircle />;
        setTimeout(() => {
            setVersusState("VS");
        }, 2000);
    }
    if (state === "loose") {
        versusClass = "versus-container loose";
        textVersus = <ImCross />;
        setTimeout(() => {
            setVersusState("VS");
        }, 2000);
    }
    if (state === "VS") {
        versusClass = "versus-container";
        textVersus = "VS";
    }
    return <div className={versusClass}>{textVersus}</div>;
};

export default Versus;
