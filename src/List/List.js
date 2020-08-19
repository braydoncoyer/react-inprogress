import React, { useState } from 'react';
import './list.css';

const List = () => {

    const [items, setItems] = useState([
        {text: "Learn Angular"},
        {text: "Learn React"},
        {text: "Learn Vue"},
        {text: "Learn Svelte"},
    ]);

  return (
      <div className="list__container">
          <div className="list__container-content">
              <h1 className="list__container-title">Reminders</h1>
              {
                  items.map((item, index) => (
                      <h4 key={index}>{item.text}</h4>
                  ))
              }
          </div>
      </div>
  )

};

export default List;
