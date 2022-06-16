// Importing the required component
import Board from "./Board";
import Info from "./Info";

// Importing css files
import "./css/app.css";

// Importing state hook
import { useState } from "react";

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");

  const resetBoard = () => {
    setReset(true);
  };

  return (
    <div className="App">
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        {/* Display the current winner */}
        <div className="winner-text">{winner}</div>
        {/* Button used to reset the board */}
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Info />
    </div>
  );
}
export default App;
