import { useState } from "react";

export default function LinksEdit({ links, onSave, onCancel }) {
  const [list, setList] = useState([...links]);
  const [inputUrl, setInputUrl] = useState("");

  const addLink = () => {
    const trimmed = inputUrl.trim();
    if (!trimmed) return;
    if (list.some(l => l.url === trimmed)) return;

    setList([...list, { url: trimmed }]);
    setInputUrl("");
  };

  const getPlatformName = (url) => {
    if (url.includes("dribbble")) return "Dribbble";
    if (url.includes("instagram")) return "Instagram";
    if (url.includes("behance")) return "Behance";
    if (url.includes("linkedin")) return "LinkedIn";
    if (url.includes("github")) return "GitHub";
    return "Link";
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">
          Social Media
        </label>
        <input
          type="url"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addLink())}
          placeholder="Input"
          className="w-full border rounded-lg px-4 py-3 text-sm outline-none"
        />
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-3">
        {list.map((link, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm"
          >
            {getPlatformName(link.url)}
            <button
              onClick={() => setList(list.filter((_, i) => i !== index))}
              className="text-gray-400 hover:text-red-600 font-bold cursor-pointer hover:scale-150 transition-all"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <button
        onClick={addLink}
        className="flex items-center gap-2 text-blue-600 text-sm font-medium cursor-pointer"
      >
        <span className="text-xl">+</span> Add other
      </button>

      <div className="flex justify-end gap-4 border-t pt-5">
        <button onClick={onCancel} className="text-gray-400 text-sm cursor-pointer">
          Cancel
        </button>
        <button
          onClick={() => onSave(list)}
          className="bg-blue-600 text-white px-10 py-2 rounded-lg text-sm font-bold cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}
