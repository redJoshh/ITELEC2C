import { useState } from "react";
import Item from "./Item";

function GroceryList({ items, onToggleItem, onDeleteItem, onClearItem }) {
  return (
    <div className="grocery-list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <button onClick={() => confirm("Are you sure?") && onClearItem()}>
        Clear List{" "}
      </button>
    </div>
  );
}

export default GroceryList;
