import { useState } from "react";

const levels = ["Beginner", "Intermediate", "Advanced", "Native"];

export default function LanguagesEdit({ languages, onSave, onCancel }) {
  const [list, setList] = useState([...languages]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Beginner");

  const addLanguage = () => {
    if (!name.trim()) return;

    const exists = list.some(
      l => l.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) return;

    setList([...list, { name: name.trim(), proficiency: level }]);
    setName("");
    setLevel("Beginner");
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">
            Language Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="English"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">
            Proficiency Level
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm bg-white outline-none cursor-pointer"
          >
            {levels.map(l => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {list.map((lang, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm"
          >
            {lang.name}/{lang.proficiency}
            <button
              onClick={() => setList(list.filter((_, idx) => idx !== i))}
              className="text-gray-400 hover:text-red-600 font-bold cursor-pointer hover:scale-150 transition-all"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Add other */}
      <button
        onClick={addLanguage}
        className="flex items-center gap-2 text-blue-600 text-sm font-medium cursor-pointer"
      >
        <span className="text-xl">+</span> Add other
      </button>

      {/* Actions */}
      <div className="flex justify-end gap-4 border-t pt-4">
        <button onClick={onCancel} className="text-gray-500 text-sm cursor-pointer">
          Cancel
        </button>
        <button
          onClick={() => onSave(list)}
          className="bg-blue-600 text-white px-8 py-2 rounded-lg text-sm cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}
