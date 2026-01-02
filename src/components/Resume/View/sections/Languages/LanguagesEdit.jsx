import { useState } from "react";

const proficiencyOptions = ["Beginner", "Intermediate", "Advanced", "Native"];

export default function LanguagesEdit({ languages, onSave, onCancel }) {
  const [list, setList] = useState(languages);
  const [inputName, setInputName] = useState("");
  const [inputProficiency, setInputProficiency] = useState("Beginner");

  const addLanguage = () => {
    const name = inputName.trim();
    if (name && !list.some(l => l.name.toLowerCase() === name.toLowerCase())) {
      setList([...list, { name, proficiency: inputProficiency }]);
      setInputName("");
      setInputProficiency("Beginner");
    }
  };

  const removeFromList = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6 mt-4">
      {/* ردیف ورودی نام زبان و سطح تسلط */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Language Name */}
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 z-10">
            Language Name
          </label>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addLanguage())}
            placeholder="e.g. English, French"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all placeholder:text-gray-300"
          />
        </div>

        {/* Proficiency Level */}
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 z-10">
            Proficiency
          </label>
          <select
            value={inputProficiency}
            onChange={(e) => setInputProficiency(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 appearance-none bg-white"
          >
            {proficiencyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* لیست زبان‌های اضافه شده (Tags) */}
      <div className="flex flex-wrap gap-3">
        {list.map((lang, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-md text-xs font-medium text-gray-700 shadow-sm"
          >
            <span>{lang.name} / {lang.proficiency}</span>
            <button
              onClick={() => removeFromList(index)}
              className="text-gray-400 hover:text-red-500 transition-colors font-bold text-base leading-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* دکمه Add Other مطابق با عکسی که می‌خواستی */}
      <button
        onClick={addLanguage}
        className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
      >
        <span className="text-xl">+</span> Add other
      </button>

      {/* دکمه‌های Save/Cancel */}
      <div className="flex justify-end gap-4 border-t pt-5">
        <button 
          onClick={onCancel} 
          className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(list)}
          className="bg-blue-600 text-white px-10 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition-all"
        >
          Save
        </button>
      </div>
    </div>
  );
}