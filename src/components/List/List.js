import React, { useState } from 'react';
import './list.css';
import ListItem from "../ListItem/ListItem";

const List = () => {

    const [items, setItems] = useState([
        {text: "Learn Angular", id: 1},
        {text: "Learn React", id: 2},
        {text: "Learn Vue", id: 3}
    ]);

    const deleteItem = (id) => {
        const itemToRemove = items.findIndex(item => item.id === id);
        const newItems = [...items];
        newItems.splice(itemToRemove, 1);
        setItems(newItems);
    }

  return (
      <div className="list__container">
          <div className="list__container-content">
              <h1 className="list__container-title">Reminders</h1>
              {
                  items.map((item, index) => (
                      <ListItem text={item.text} onDelete={deleteItem} id={item.id} key={index}/>
                  ))
              }
          </div>
      </div>
  )

};

export default List;
