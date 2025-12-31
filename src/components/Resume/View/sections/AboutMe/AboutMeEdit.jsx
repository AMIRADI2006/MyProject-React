import { useState } from "react";

export default function AboutMeEdit({ value, onSave }) {
  const [text, setText] = useState(value || "");

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Describe Yourself
      </label>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={512}
        placeholder="write about yourself"
        className="w-full min-h-[120px] rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none outline-none focus:border-gray-400"
      />

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-400">
          {text.length}/512
        </span>

        <button
          onClick={() => onSave(text)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500 cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}
