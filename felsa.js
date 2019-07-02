import React from 'react' ;
export default function felsa (props) {
    return(
        <button 
        onClick={props.onSimpleClick}
        style={{backgroundColor : "blue"}}>
        {props.name}
        </button>


    )
}