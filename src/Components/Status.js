export default function Status({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀</em>
      </p>
    );
  }
  const totalItemsLength = items.length;
  const totalPackedLength = items.filter((item) => item.packed).length;
  const totalPackedProcentage = Math.round(
    (totalPackedLength / totalItemsLength) * 100
  );

  return (
    <footer className="stats">
      <em>
        {totalPackedProcentage === 100
          ? "You got everithing! Ready to go ✈️ "
          : `💼 You have ${totalItemsLength} items on your list, and you allready
        packed ${totalPackedLength} (${totalPackedProcentage}%)`}
      </em>
    </footer>
  );
}
