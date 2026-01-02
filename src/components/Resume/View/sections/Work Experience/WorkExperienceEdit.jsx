import { useState } from "react";

export default function WorkExperienceEdit({ experiences, onSave, onCancel }) {
  const [list, setList] = useState([...experiences]);

  // فیلدهای فرم
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);
  const [description, setDescription] = useState("");

  const addExperience = () => {
    if (!jobTitle || !companyName || !startDate) return;

    const period = isCurrent
      ? `${startDate} - Present`
      : `${startDate} - ${endDate || "Present"}`;

    const newExp = {
      jobTitle,
      companyName,
      period,
      description: description.trim(),
    };

    setList([...list, newExp]);

    // ریست فرم
    setJobTitle("");
    setCompanyName("");
    setStartDate("");
    setEndDate("");
    setIsCurrent(false);
    setDescription("");
  };

  const removeFromList = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {/* ردیف اول: عنوان شغل و نام شرکت */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 z-10">
            Job Title
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder=""
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 z-10">
            Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder=""
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* ردیف دوم: تاریخ‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 z-10">
            Start Date
          </label>
          <input
            type="month"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 z-10">
            End Date
          </label>
          <input
            type="month"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={isCurrent}
            className="w-full border rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-300"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-600 -mt-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isCurrent}
          onChange={(e) => setIsCurrent(e.target.checked)}
          className="rounded text-blue-600 size-4"
        />
        I currently work here
      </label>

      {/* ردیف سوم: توضیحات */}
      <div className="relative">
        <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 z-10">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write your responsibilities and achievements"
          className="w-full border rounded-lg px-4 py-3 text-sm min-h-[120px] resize-none outline-none focus:border-blue-500"
        />
        <div className="text-right text-[10px] text-gray-400 mt-1">
          {description.length}/512
        </div>
      </div>

      {/* لیست تجربیات اضافه شده */}
      <div className="space-y-3">
        {list.map((exp, index) => (
          <div key={index} className="flex justify-between items-center p-4 border rounded-xl bg-white relative group border-gray-100 shadow-sm">
            <div>
              <div className="font-bold text-gray-700 text-sm">{exp.jobTitle}</div>
              <div className="text-xs text-gray-400">{exp.companyName} | {exp.period}</div>
            </div>
            <button 
              onClick={() => removeFromList(index)}
              className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* دکمه افزودن مورد جدید */}
      <button
        onClick={addExperience}
        disabled={!jobTitle || !companyName || !startDate}
        className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 disabled:opacity-50 cursor-pointer"
      >
        <span className="text-xl">+</span> Add other
      </button>

      {/* دکمه‌های عملیاتی نهایی */}
      <div className="flex justify-end gap-4 border-t pt-5 mt-4">
        <button 
          onClick={onCancel} 
          className="text-gray-400 hover:text-gray-600 text-sm font-medium cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(list)}
          className="bg-blue-600 text-white px-10 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-md cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}