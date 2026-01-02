import { useState } from "react";

export default function LinksEdit({ links, onSave, onCancel }) {
  const [list, setList] = useState(links);
  const [inputUrl, setInputUrl] = useState("");

  const addLink = () => {
    const trimmed = inputUrl.trim();
    if (trimmed && !list.some(l => l.url === trimmed)) {
      setList([...list, { url: trimmed }]);
      setInputUrl("");
    }
  };

  const removeFromList = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  // کمکی برای نمایش نام پلتفرم در لیست اضافه شده
  const getPlatformName = (url) => {
    if (url.includes("dribbble.com")) return "Dribbble";
    if (url.includes("instagram.com")) return "Instagram";
    if (url.includes("behance.net")) return "Behance";
    if (url.includes("linkedin.com")) return "LinkedIn";
    if (url.includes("github.com")) return "GitHub";
    return "Link";
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Social Media</label>
      <div className="flex gap-2 mb-6">
        <input
          type="url"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addLink())}
          placeholder="https://"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-400"
        />
        <button
          onClick={addLink}
          disabled={!inputUrl.trim()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-500 disabled:opacity-50"
        >
          Add
        </button>
      </div>

      {/* لیست لینک‌های اضافه شده */}
      {list.length > 0 && (
        <div className="space-y-3 mb-6">
          {list.map((link, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
              <span className="text-sm text-gray-700">
                {getPlatformName(link.url)} • {link.url}
              </span>
              <button
                onClick={() => removeFromList(index)}
                className="text-gray-400 hover:text-red-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-end gap-3">
        <button onClick={onCancel} className="text-gray-600 hover:text-gray-800 text-sm">
          Cancel
        </button>
        <button
          onClick={() => onSave(list)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-500"
        >
          Save
        </button>
      </div>
    </div>
  );
}