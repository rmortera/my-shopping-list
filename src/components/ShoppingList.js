import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Apples", packed: false },
//   { id: 2, description: "Milk", packed: false },
//   { id: 3, description: "Ham", packed: true },
//   { id: 4, description: "Lettuce", packed: false },
//   { id: 5, description: "Cereal", packed: false },
// ];

function ShoppingList() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems([...items, newItem]);
  }

  function handleToggleMarked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, marked: !item.marked } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items from your list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="shopping-list">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onToggleMarked={handleToggleMarked}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default ShoppingList;
