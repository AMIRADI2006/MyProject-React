export default function WorkExperienceView({ experiences, onEdit }) {
  return (
    <div className="relative">
      {/* دکمه ویرایش کل بخش */}
      <button
        onClick={onEdit}
        className="absolute -top-10 right-0 text-blue-600 hover:text-blue-800 transition-colors"
        title="Edit Section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      </button>

      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm group">
            <div className="font-bold text-gray-800 text-sm">{exp.jobTitle}</div>
            <div className="text-xs text-gray-500 mt-1 font-medium">
              {exp.companyName} | {exp.period}
            </div>
            {exp.description && (
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}