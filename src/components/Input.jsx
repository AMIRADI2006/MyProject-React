import { useState } from "react";

export default function Input({
  label,
  defaultValue = "",
  type = "text",
  placeholder,
  onChange,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="relative">

      {/* ---------- Input ---------- */}
      <input
        type={isPassword && showPassword ? "text" : type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className={`peer w-full px-4.5 py-3 pr-12 text-sm rounded-lg outline-none 
          ${error
            ? "border border-red-500 focus:border-red-500 text-red-600"
            : "border border-gray-300 focus:border-gray-400 text-neutral-700"
          }
        `}
      />

      {/* ---------- Label ---------- */}
      <label
        className={`absolute left-3 -translate-y-1/2 bg-white px-2 text-sm font-medium
         ${error ? "text-red-600" : "text-neutral-700"}`}
      >
        {label}
      </label>

      {/* ---------- Eye Icon ---------- */}
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          {showPassword ? (
            // eye-off
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 3l18 18M10.584 10.587A2 2 0 0012 14a2 2 0 002-2c0-.47-.162-.9-.432-1.24M9.88 5.09A9.77 9.77 0 0112 5c5.523 0 10 7 10 7a19.64 19.64 0 01-3.49 4.73M6.1 6.1C3.99 7.69 2 12 2 12s4.477 7 10 7c1.045 0 2.05-.16 3-.45" />
            </svg>
          ) : (
            // eye
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M2 12s4.477-7 10-7 10 7 10 7-4.477 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      )}

      {/* ---------- Error Message ---------- */}
      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
