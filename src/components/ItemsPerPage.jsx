import RandomButton from "./RandomButton";

const ItemsPerPage = ({ itemsPerPage, setItemsPerPage, setCurrentPage }) => (
  <div className="flex justify-end p-3">
    <div className="p-3">
      <RandomButton />
    </div>
    <label className="mr-2 text-gray-700 font-medium">Items per page:</label>
    <select
      value={itemsPerPage}
      onChange={(e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
      }}
      className="border rounded px-3 py-1"
    >
      {[10, 20, 50].map((n) => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </select>
  </div>
);
export default ItemsPerPage;
