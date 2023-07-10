export default function Stats({ items }) {
  const numLength = items.length;
  if (!numLength) {
    return (
      <p className="footer">
        <em>Start Adding some items to your Packing List</em>
      </p>
    );
  }
  const numPacket = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacket / numLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go "
          : `👜You have ${items.length} items on your list , and you already packed{" "}
        ${numPacket} , ${percentage}%`}
      </em>
    </footer>
  );
}
