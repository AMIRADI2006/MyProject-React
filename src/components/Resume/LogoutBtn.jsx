import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/v1/logout");
    } catch (error) {
      console.log("Logout error:", error);
    }

    // پاک کردن توکن
    localStorage.removeItem("token");

    // حذف هدر از axios
    delete api.defaults.headers.Authorization;

    // رفتن به لاگین
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left text-red-500 font-medium flex items-center gap-3 p-2 rounded-md hover:bg-red-50 cursor-pointer">
      <span className="w-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
        </svg>
      </span>
      Log out
    </button>
  );
}
