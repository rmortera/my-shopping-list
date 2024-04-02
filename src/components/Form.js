import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: crypto.randomUUID(),
      description,
      marked: false,
    };

    onAddItems(newItem);

    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to buy?</h3>

      <input
        type="text"
        placeholder="Enter item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add item</button>
    </form>
  );
}

export default Form;
