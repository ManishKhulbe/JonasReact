import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList  from "./PackingList";
import  Stats  from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((prevItem) => [...prevItem, item]);
  }
  function handleRemoveItem(selectedItem) {
    let updatedItems = items.filter((item) => item.id !== selectedItem.id);
    setItems(updatedItems);
  }
  function handleUpdateItem(selectedItem) {
    let updatedItem = items.filter((item) => {
      if (item.id === selectedItem.id) {
        item.packed = !selectedItem.packed;
      }
      return item;
    });

    setItems(updatedItem);
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        handleRemoveItem={handleRemoveItem}
        handleUpdateItem={handleUpdateItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
