export default function EducationEmpty({ onAdd }) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg py-10 text-center text-gray-500">
      <p>Add your Education</p>
      <button
        onClick={onAdd}
        className="mt-4 text-blue-600 text-sm font-medium flex items-center justify-center gap-1 mx-auto cursor-pointer"
      >
        <span className="text-xl">+</span> Education
      </button>
    </div>
  );
}
