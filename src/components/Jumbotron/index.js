import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";
import Button from "../Button"

function Jumbotron (properties) {
    return(
        <div className="jumbotron"> 
            <h1>The Memory Game</h1>
            <p>Score: {properties.score}</p>

            <div onClick={() => properties.click()}>
                {properties.gameState === false &&
                    <div>
                        <div>Game Over!
                        </div>
                        <p />
                        <Button 
                        text = "New Game"
                        />
                    </div>
                }
            </div>

            {properties.gameState === true &&
                <div>Try not to select the same card.</div>
            }
        </div>
    )
}

export default Jumbotron;