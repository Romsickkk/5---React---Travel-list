import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Status from "./Components/Status";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const result = window.confirm("Are you shure you want clear the list?");

    if (result) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Status items={items} />
    </div>
  );
}
