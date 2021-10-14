import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");
  const [showSearchedItem, setShowSearchedItem] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  // const showSearchedItems = items.filter((item) => console.log(item))

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
      search={search}
      onCategoryChange={handleCategoryChange}
      onSearchChange={setSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
