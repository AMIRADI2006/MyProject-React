import { useState } from "react";

export default function EducationEdit({ educations, onSave, onCancel }) {
  const [list, setList] = useState([...educations]);

  const [field, setField] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("Bachelor’s");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isStudying, setIsStudying] = useState(false);
  const [description, setDescription] = useState("");

  const levels = ["Associate", "Bachelor’s", "Master’s", "PHD and Higher"];

  const addEducation = () => {
    if (!field || !university || !startDate) return;

    const period = isStudying
      ? `${startDate.slice(0, 4)} - Present`
      : `${startDate.slice(0, 4)} - ${endDate?.slice(0, 4) || "Present"}`;

    setList([
      ...list,
      {
        degree: `${degree} degree of ${field}`,
        university,
        location: "Tehran",
        period,
        description,
      },
    ]);

    setField("");
    setUniversity("");
    setDescription("");
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Field Of Study" value={field} onChange={setField} />
        <Input label="University Name" value={university} onChange={setUniversity} />
      </div>

      {/* Degree */}
      <div>
        <p className="font-medium mb-3">Degree Level</p>
        <div className="flex flex-wrap gap-6">
          {levels.map(l => (
            <label key={l} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                checked={degree === l}
                onChange={() => setDegree(l)}
                className="accent-blue-600"
              />
              {l}
            </label>
          ))}
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="date" label="Start Date Of Study" onChange={setStartDate} />
        <Input type="date" label="End Date Of Study" onChange={setEndDate} disabled={isStudying} />
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-600">
        <input type="checkbox" checked={isStudying} onChange={e => setIsStudying(e.target.checked)} />
        Still studying
      </label>

      {/* Description */}
      <div className="relative">
        <label className="text-sm">Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full border rounded-lg p-3 mt-1 resize-none min-h-[100px]"
        />
        <div className="text-right text-[10px] text-gray-400">{description.length}/512</div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {list.map((edu, i) => (
          <div key={i} className="p-4 border rounded-xl flex justify-between">
            <div>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-xs text-gray-500">
                {edu.university}, {edu.location} | {edu.period}
              </p>
            </div>
            <button className="text-gray-500 hover:text-red-600 font-bold cursor-pointer"  onClick={() => setList(list.filter((_, idx) => idx !== i))}>✕</button>
          </div>
        ))}
      </div>

      <button onClick={addEducation} className="text-blue-600 text-sm flex gap-1 items-center cursor-pointer">
        <span className="text-xl">+</span> Add other
      </button>

      <div className="flex justify-end gap-4 border-t pt-4">
        <button onClick={onCancel} className="text-gray-400 cursor-pointer">Cancel</button>
        <button onClick={() => onSave(list)} className="bg-blue-600 text-white px-8 py-2 rounded-lg cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", disabled }) {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">{label}</label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={e => onChange(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 text-sm"
      />
    </div>
  );
}
