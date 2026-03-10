import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");

  const [qty, setQty] = useState(1);

  // console.log(qty);

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim()) {
      return;
    }
    const newItem = { id: Date.now(), name, purchased: false, qty: qty };
    onAddItem(newItem);
    setName("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="qty">Quantity</label>
      <select
        name="qty"
        id="qty"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      >
        {Array.from({ length: 30 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit"> Add</button>
    </form>
  );
}
export default Form;
