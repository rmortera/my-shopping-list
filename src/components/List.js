import { useState } from "react";
import Item from "./Item";

function List({ items, onToggleMarked, onDeleteItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "marked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.marked) - Number(b.marked));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            items={items}
            onToggleMarked={onToggleMarked}
            onDeleteItem={onDeleteItem}
            onClearList={onClearList}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="marked">Sort by marked status</option>
        </select>

        {sortedItems.length > 0 && (
          <button onClick={onClearList}>Clear list</button>
        )}
      </div>
    </div>
  );
}

export default List;
