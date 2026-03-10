function Stats({ numberItems, numberPurchased }) {
  return (
    <footer className="stats">
      You have {numberItems} items, and you purchased {numberPurchased} items.
    </footer>
  );
}

export default Stats;
