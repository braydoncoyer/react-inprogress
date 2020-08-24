import React from 'react';
import './listitem.css';

const ListItem = (props) => {

    return (
        <div className={"list-item"}>
            <span className={"list-item-text"}>{props.text}</span>
            <button className={"list-item-delete"} onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )

};

export default ListItem;