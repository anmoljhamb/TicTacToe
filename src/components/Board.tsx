import "./Board.scss";
import React, { useEffect, useMemo } from "react";

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
        gridTemplateColumns: `repeat(1fr, ${boardSize})`,
        gridTemplateRows: `repeat(1fr, ${boardSize})`,
    };

    return (
        <div className="board">
            {board.map((row, index) => {
                return (
                    <>
                        {row.map((cell, index) => {
                            return <div className="cell">{cell}</div>;
                        })}
                    </>
                );
            })}
        </div>
    );
};

export default Board;
