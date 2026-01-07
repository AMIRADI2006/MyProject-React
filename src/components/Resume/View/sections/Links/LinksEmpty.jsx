export default function LinksEmpty({ onAdd }) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg py-10 text-center text-gray-500">
      <p>Add all your portfolio and social links here</p>
      <button
        onClick={onAdd}
        className="mt-4 flex items-center justify-center gap-2 text-blue-600 text-sm font-medium mx-auto cursor-pointer"
      >
        <span className="text-xl">+</span> Add links
      </button>
    </div>
  );
}
