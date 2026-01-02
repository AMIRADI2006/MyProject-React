export default function WorkExperienceEmpty({ onAdd }) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
      <p>Add your work experience</p>
      <button
        onClick={onAdd}
        className="mt-3 text-blue-600 text-sm font-medium cursor-pointer"
      >
        + Work Experience
      </button>
    </div>
  );
}