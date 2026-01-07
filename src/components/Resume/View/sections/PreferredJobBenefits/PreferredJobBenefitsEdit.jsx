import { useState } from "react";

const availableBenefits = [
  "Promotion Opportunity",
  "Transportation Service",
  "Flexible Working Hour",
  "Insurance",
  "Bonus",
  "Gym Membership",
  "Remote Work",
  "Training & Development",
  "Health Insurance",
  "Paid Leave",
];

export default function PreferredJobBenefitsEdit({ selectedBenefits, onSave, onCancel }) {
  const [selected, setSelected] = useState(selectedBenefits);

  const toggleBenefit = (benefit) => {
    if (selected.includes(benefit)) {
      setSelected(selected.filter(b => b !== benefit));
    } else {
      setSelected([...selected, benefit]);
    }
  };

  return (
    <div>
      <div className="space-y-4 mb-6">
        {availableBenefits.map((benefit) => (
          <label key={benefit} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(benefit)}
              onChange={() => toggleBenefit(benefit)}
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-sm text-gray-700">{benefit}</span>
          </label>
        ))}
      </div>

      {/* نمایش مزایای انتخاب‌شده فعلی */}
      {selected.length > 0 && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
          <p className="text-sm font-medium text-gray-800 mb-3">Selected Benefits:</p>
          <div className="flex flex-wrap gap-3">
            {selected.map((benefit) => (
              <span
                key={benefit}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
              >
                {benefit}
                <button
                  onClick={() => toggleBenefit(benefit)}
                  className="text-gray-500 hover:text-red-600text-gray-400 hover:text-red-600 font-bold cursor-pointer hover:scale-150 transition-all"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="text-gray-600 hover:text-gray-800 text-sm px-4 py-2 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(selected)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-500 cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}