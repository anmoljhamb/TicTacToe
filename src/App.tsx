import { useState } from "react";
import "./App.scss";
import { Board } from "./components";

function App() {
    const [boardSize, setBoardSize] = useState<number>(3);

    return <Board boardSize={boardSize} />;
}

export default App;
