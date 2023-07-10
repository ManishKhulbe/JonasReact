export function Item({ item, handleRemoveItem, handleUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => handleUpdateItem(item)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleRemoveItem(item)}>❎</button>
    </li>
  );
}
