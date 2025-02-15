import React from "react";
import Square from "./square";
import '../App.css';
import { useState } from "react";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isxturn, Setxturn] = useState(true);

    const Checkwinner = () => {
        const winnerlist = [
            [0, 1, 2],
            [0, 4, 8],
            [0, 3, 6],
            [3, 4, 5],
            [6, 7, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6]
        ];
        for (let winner of winnerlist) {
            const [a, b, c] = winner;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    const iswinner = Checkwinner();

    const handleClick = (index) => {
        if (state[index] || iswinner) return; 
        const copystate = [...state];
        copystate[index] = isxturn ? "X" : "O";
        setState(copystate);
        Setxturn(!isxturn);
    };

    const Handlereset = () => {
        setState(Array(9).fill(null));
        Setxturn(true);
    };

    return (
        <div className="board_container">
            {iswinner ? (
                <>
                   <p className="text-white text-2xl"> {iswinner} won the game </p>
                    <button
                        className="bg-white text-gray-500 w-20 h-10 mt-5"
                        onClick={Handlereset}
                    >
                        Reset
                    </button>
                </>
            ) : (
                <>
                    <div className="flex flex-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="flex flex-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="flex flex-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>

                    <button
                        className="bg-white text-gray-500 w-20 h-10 mt-5"
                        onClick={Handlereset}
                    >
                        Reset
                    </button>
                </>
            )}
        </div>
    );
};

export default Board;
