function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <>
      <li className={item.purchased ? "purchased" : ""}>
        <span>{item.qty}</span>
        <span onClick={() => onToggleItem(item.id)}>{item.name}</span>
        <button onClick={() => onDeleteItem(item.id)}>X</button>
      </li>
    </>
  );
}

export default Item;
