import "./Score.css"




const Score = ({score}) =>{
    return(<div className="score-container">
        <div className="score">High score : {score.highScore}</div>
        <div className="score">Score : {score.score}</div>
    </div>)
}

export default Score