import React from 'react';

const List = (props) => {
    return(
        <div className="card">
        <p>{props.text}</p>
        <div onClick={props.click}>delete</div>
        </div>
    )
}

export default List