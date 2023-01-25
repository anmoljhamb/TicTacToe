import { useState } from "react";
import "./App.scss";
import { Board } from "./components";

function App() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [boardSize, setBoardSize] = useState<number>(3);

    return <Board boardSize={boardSize} />;
}

export default App;
