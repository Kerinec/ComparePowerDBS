import "./Versus.css";
const Versus = ({ state }) => {
    let versusClass = "";
    if (state === "win") {
        versusClass = "versus-container win";
    }
    if (state === "loose") {
        versusClass = "versus-container loose";
    }
    if (state === "VS") {
        versusClass = "versus-container";
    }

    return <div className={versusClass}>VS</div>;
};

export default Versus;
