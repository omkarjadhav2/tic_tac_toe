import React from "react";
import '../App.css'

const Square = (props) =>{
    return (
        <div className="w-[100px] h-[100px] bg-green-200 m-1 text-center " onClick={props.onClick}>
          <p className="text-4xl font-bold text-white mt-5">{props.value}</p>
        </div>
    )
}

export default Square;