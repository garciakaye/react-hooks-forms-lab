import React, { useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit}) {
  const [newItem, setNewItem] =  useState({
    id: uuid(),
    name: "",
    category: "Produce",
  })

  function handleChange(event){
    // const name = event.target.name;
    // const value = event.target.value;
    setNewItem({
      ...newItem,
      [event.target.id]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("line 23", newItem)
    onItemFormSubmit({
      id: uuid(),
      ...newItem
    })
  }


  return (
    <form onSubmit={event => handleSubmit(event)} className="NewItem">
      <label>
        Name:
        <input 
        id="name"
        type="text" 
        onChange={handleChange}
        value={newItem.name}
       />
      </label>

      <label>
        Category:
        <select 
        id="category" 
        onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
