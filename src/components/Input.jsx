export default function Input({ label, defaultValue = "", type, placeholder, onChange }) {
  return (
    <div className="relative">
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className="peer w-full px-4.5 py-3 text-sm text-neutral-400 border border-gray-300 rounded-lg focus:border-gray-400 outline-none focus:text-neutral-700"/>

      <label
        className="absolute left-3 -translate-y-1/2 bg-white px-2 text-neutral-700 text-sm font-medium">
        {label}
      </label>
    </div>
  );
}
