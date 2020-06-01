import React from 'react';
import './ListElement.css';

function ListElement(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.source}</h2>
            <h2>{props.dest}</h2>
            <button type="button" value="Request?.."> Request?</button>
        </div>
    )
}

export default ListElement
