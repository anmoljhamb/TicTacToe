import "./Board.scss";
import React, { useMemo } from "react";

interface Props {
    boardSize: number;
}

const Board = ({ boardSize }: Props) => {
    let board: Array<Array<number>> = useMemo(() => {
        let tempBoard: Array<Array<number>> = [];

        for (let i = 0; i < boardSize; i++) {
            tempBoard.push([]);
            for (let j = 0; j < boardSize; j++) {
                tempBoard[i].push(0);
            }
        }
        return tempBoard;
    }, [boardSize]);

    console.log(board);

    const boardStyle = {
        gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
        gridTemplateRows: `repeat(${boardSize}, 1fr)`,
    };

    return (
        <div className="board" style={boardStyle}>
            {board.map((row, i) => {
                return (
                    <React.Fragment key={i}>
                        {row.map((cell, j) => {
                            return (
                                <div className="cell" key={j}>
                                    {cell}
                                </div>
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Board;
