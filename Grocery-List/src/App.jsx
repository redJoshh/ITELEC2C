import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import GroceryList from "./components/GroceryList.jsx";
import Stats from "./components/Stats.jsx";

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("Grocery-List");
    return saved ? JSON.parse(saved) : [];
  });

  const [sortBy, setSortBy] = useState("Date");

  let sortedItems;

  if (sortBy === "Date") sortedItems = items;

  if (sortBy === "Name") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "Quantity") {
    sortedItems = items.slice().sort((a, b) => Number(a.qty) - Number(b.qty));
  }

  useEffect(() => {
    localStorage.setItem("Grocery-List", JSON.stringify(items));
  }, [items]);

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleClearItems() {
    setItems([]);
  }

  const numberOfItems = items.length;
  const purchasedItems = items.filter((item) => item.purchased).length;

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleOnToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item,
      ),
    );
  }
  return (
    <div className="app">
      <Logo />
      <select
        name="sortBy"
        id="sortBy"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="Date">Date</option>
        <option value="Name">Name</option>
        <option value="Quantity">Quantity</option>
      </select>
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={sortedItems}
        onToggleItem={handleOnToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearItem={handleClearItems}
      />
      <Stats numberItems={numberOfItems} numberPurchased={purchasedItems} />
    </div>
  );
}
