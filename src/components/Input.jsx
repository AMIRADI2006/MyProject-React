export default function Input({
  label,
  defaultValue = "",
  type = "text",
  placeholder,
  onChange,
  error, // ✅ prop جدید
}) {
  return (
    <div className="relative">

      {/* ---------- Input ---------- */}
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className={`peer w-full px-4.5 py-3 text-sm rounded-lg outline-none 
          ${error
            ? "border border-red-500 focus:border-red-500 text-red-600"
            : "border border-gray-300 focus:border-gray-400 text-neutral-700"
          }
        `}
      />

      {/* ---------- Label ---------- */}
      <label
        className={`absolute left-3 -translate-y-1/2 bg-white px-2 text-sm font-medium
         ${error ? "text-red-600" : "text-neutral-700"}`}>
        {label}
      </label>

      {/* ---------- Error Message ---------- */}
      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
