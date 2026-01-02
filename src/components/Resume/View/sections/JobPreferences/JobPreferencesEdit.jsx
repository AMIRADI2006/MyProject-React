import { useState } from "react";

export default function JobPreferencesEdit({ preferences, onSave, onCancel }) {
  const [list, setList] = useState(preferences);

  // فرم فعلی
  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState("");
  const [contracts, setContracts] = useState({
    fulltime: false,
    parttime: false,
    remote: false,
    internship: false,
  });
  const [seniority, setSeniority] = useState({
    entry: false,
    specialist: false,
    manager: false,
    seniorManager: false,
  });

  const addPreference = () => {
    const newPrefs = [];

    // اضافه کردن salary اگر پر شده
    if (category.trim() && salary.trim()) {
      newPrefs.push({
        type: "salary",
        category: category.trim(),
        amount: salary.trim(),
      });
    }

    // اضافه کردن contractها
    if (contracts.fulltime) newPrefs.push({ type: "contract", value: "Full-time" });
    if (contracts.parttime) newPrefs.push({ type: "contract", value: "Part-time" });
    if (contracts.remote) newPrefs.push({ type: "contract", value: "Remote" });
    if (contracts.internship) newPrefs.push({ type: "contract", value: "Internship" });

    // اضافه کردن seniority
    if (seniority.entry) newPrefs.push({ type: "seniority", value: "Entry-level" });
    if (seniority.specialist) newPrefs.push({ type: "seniority", value: "Specialist" });
    if (seniority.manager) newPrefs.push({ type: "seniority", value: "Manager" });
    if (seniority.seniorManager) newPrefs.push({ type: "seniority", value: "Senior-Manager" });

    if (newPrefs.length > 0) {
      setList([...list, ...newPrefs]);

      // ریست فرم
      setCategory("");
      setSalary("");
      setContracts({ fulltime: false, parttime: false, remote: false, internship: false });
      setSeniority({ entry: false, specialist: false, manager: false, seniorManager: false });
    }
  };

  const removeFromList = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="space-y-6 mb-6">
        {/* Job Category & Salary */}
        <div>
          <label className="block text-sm font-medium mb-2">Job Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Input"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-400 mb-4"
          />

          <label className="block text-sm font-medium mb-2">Minimum Salary Amount</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Input"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-400"
          />
          <p className="text-xs text-gray-500 mt-1">Amount is by dollar / Monthly</p>
        </div>

        {/* Acceptable Contract */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Acceptable Contract</h4>
            <div className="space-y-3">
              {["fulltime", "parttime", "remote", "internship"].map((key) => (
                <label key={key} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={contracts[key]}
                    onChange={(e) =>
                      setContracts({ ...contracts, [key]: e.target.checked })
                    }
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    {key === "fulltime" ? "Full-time" :
                     key === "parttime" ? "Part-time" :
                     key === "remote" ? "Remote" : "Internship"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Seniority Level */}
          <div>
            <h4 className="text-sm font-medium mb-3">Seniority Level:</h4>
            <div className="space-y-3">
              {["entry", "specialist", "manager", "seniorManager"].map((key) => (
                <label key={key} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={seniority[key]}
                    onChange={(e) =>
                      setSeniority({ ...seniority, [key]: e.target.checked })
                    }
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    {key === "entry" ? "Entry-level" :
                     key === "specialist" ? "Specialist" :
                     key === "manager" ? "Manager" : "Senior-Manager"}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* --- تغییر دکمه در اینجا اعمال شد --- */}
        <button
          onClick={addPreference}
          disabled={!category && !salary && !Object.values(contracts).some(v => v) && !Object.values(seniority).some(v => v)}
          className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors disabled:opacity-50"
        >
          <span className="text-xl">+</span> Add other
        </button>
      </div>

      {/* نمایش preferenceهای اضافه شده */}
      {list.length > 0 && (
        <div className="space-y-3 border-t pt-6">
          {list.map((pref, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
              <span className="text-sm font-medium text-gray-700">
                {pref.type === "salary" ? `${pref.category}/${pref.amount}$` : pref.value}
              </span>
              <button
                onClick={() => removeFromList(index)}
                className="text-gray-500 hover:text-red-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-end gap-3 mt-6">
        <button onClick={onCancel} className="text-gray-600 hover:text-gray-800 text-sm px-4 py-2">
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