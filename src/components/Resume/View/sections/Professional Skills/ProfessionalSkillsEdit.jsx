import { useState } from "react";

export default function ProfessionalSkillsEdit({ skills, onSave, onCancel }) {
  const [input, setInput] = useState("");
  const [currentSkills, setCurrentSkills] = useState(skills);
  const [error, setError] = useState("");


  const addSkill = () => {
    const normalized = input.trim();

    if (!normalized) return;

    if (currentSkills.includes(normalized)) {
      setError("This skill already exists");
      return;
    }

    setCurrentSkills([...currentSkills, normalized]);
    setInput("");
    setError(""); // پاک شدن خطا بعد از موفقیت
  };


  return (
    <div className="space-y-6 mt-4">
      <div className="relative">
        <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 z-10">
          Professional Skills
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // {می تونیم برای اضافه کردن اسکیل از اینتر هم روی کیبورد استفاده کنیم}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}  
          placeholder=""
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all placeholder:text-gray-300"
        />
        {error && (
          <p className="text-sm text-red-500 mt-1">
            {error}
          </p>
        )}

      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {currentSkills.map((skill) => (
          <span key={skill} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
            {skill}
            <button
// {فقط اون اسکیل هایی رو نگه دار که برابر اسکیل انتخاب‌شده نیستن}
              onClick={() => setCurrentSkills(currentSkills.filter(s => s !== skill))}
              className="text-gray-500 hover:text-red-600 font-bold cursor-pointer"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <button
        onClick={addSkill}
        className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors cursor-pointer"
      >
        <span className="text-xl">+</span> Add other
      </button>

      
      <div className="flex justify-end gap-3 border-t pt-5">
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 text-sm font-medium cursor-pointer">
          Cancel
        </button>

        <button
          disabled={!currentSkills.length}
          onClick={() => onSave(currentSkills)}
          className={`px-10 py-2 rounded-lg text-sm font-bold shadow-md cursor-pointer
            ${!currentSkills.length ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
          Save
        </button>

      </div>
    </div>
  );
}