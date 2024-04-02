function Stats({ items }) {
  const numItems = items.length;
  const markedItems = items.filter((item) => item.marked);
  const totalItemsMarked = (markedItems.length / numItems) * 100;

  if (!numItems)
    return (
      <p className="stats">
        <em>Start adding items to your list!</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {totalItemsMarked === 100
          ? `You got everything you need, you can go to pay.`
          : `You have ${
              numItems === 1 ? numItems + " item" : numItems + " items"
            } on your list, and you already marked ${markedItems.length}`}
      </em>
    </footer>
  );
}

export default Stats;
