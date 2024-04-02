function Item({ item, onToggleMarked, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleMarked(item.id)}></input>
      <span style={item.marked ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
