// کمکی برای گرفتن نام پلتفرم و رنگ آیکون
const getPlatformInfo = (url) => {
  if (url.includes("dribbble.com")) {
    return { name: "Dribbble", color: "#EA4C89" };
  }
  if (url.includes("instagram.com")) {
    return { name: "Instagram", color: "#E4405F" };
  }
  if (url.includes("behance.net")) {
    return { name: "Behance", color: "#1769FF" };
  }
  if (url.includes("linkedin.com")) {
    return { name: "LinkedIn", color: "#0077B5" };
  }
  if (url.includes("github.com")) {
    return { name: "GitHub", color: "#333" };
  }
  return { name: "Link", color: "#666" };
};

export default function LinksView({ links, onEdit, onRemove }) {
  return (
    <div className="relative">
      <button
        onClick={onEdit}
        className="absolute top-0 right-0 text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      </button>

      <div className="flex flex-wrap gap-3">
        {links.map((link, index) => {
          const { name, color } = getPlatformInfo(link.url);
          return (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill={color}>
                <circle cx="12" cy="12" r="10" />
              </svg>
              {name}
              <button
                onClick={() => onRemove(index)}
                className="text-gray-500 hover:text-red-600  cursor-pointer "
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}