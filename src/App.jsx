import { useState, useEffect } from "react"
import Cell from "./components/Cell.jsx"
function App() {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [go, setGo] = useState("circle");
    const [winningMessage, setWinningMessage] = useState(null);

     const message = "It is now " + go + "'s turn";
     function checkScore() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
         winningCombos.forEach(array => {
             let circleWins = array.every(cell => cells[cell] === "circle"); // check if all 3 are "circle"
             if (circleWins) {
                 setWinningMessage("Circle Wins!"); // show win message
             }
         });

         winningCombos.forEach(array => {
             let crossWins = array.every(cell => cells[cell] === "cross"); // check if all 3 are "cross"
             if (crossWins) {
                 setWinningMessage("Cross Wins!"); // show win message
             }
         });
     }
    useEffect(() => {
        checkScore()
    }, [cells]);
    return (
        <div className="app">
            <div className="gameboard">
                {cells.map((cell, id) => <Cell
                    cell = {cell}
                    key = {id}
                    id = {id}
                    go = {go}
                    setGo = {setGo}
                    setCells={setCells}
                    cells={cells}
                    winningMessage={winningMessage}
                />)}
            </div>
            <p>
                {winningMessage ? winningMessage : message}
            </p>

        </div>
    )
}

export default App;