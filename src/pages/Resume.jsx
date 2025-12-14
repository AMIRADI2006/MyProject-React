import { useState, useEffect } from "react";
import LSidebar from "../components/Resume/View/L Sidebar";
import RSidebar from "../components/Resume/View/R Sidebar";
import MainResume from "../components/Resume/View/MainResume";
import api from "../api/axios";


export default function Resume() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // تابع async برای گرفتن داده
    const fetchData = async () => {
      try {
        const response = await api.get("/v1/personal-info"); // درخواست به بک‌اند
        setData(response.data.data); // ذخیره داده‌ها در state
      }
      catch (err) {
        setError(err.message); // ذخیره خطا
      }
    };

    fetchData();
  }, []); // [] یعنی فقط یک بار اجرا می‌شود


  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return <div className="p-6">Loading...</div>;
  }

  return (

    <div className="min-h-screen bg-gray-50 text-gray-800 pt-8 pl-6">
      <div className="flex">
        <LSidebar />

        {/* MAIN AREA */}
        <div className="flex-1">
          {/* Topbar */}
          <header className="flex items-center justify-between p-6 bg-transparent">
            <div>
              <h1 className="text-2xl font-semibold">My Resume</h1>
              <p className="text-sm text-gray-500 mt-1">Updating your information will offer you the most relevent content</p>
            </div>

            <div className="flex items-center gap-4">
              {/* SearchBox */}
              <div className="hidden md:block">
                <div className="flex w-fit justify-center items-center border border-gray-200 bg-white rounded-lg px-4">
                  <input className="pr-10 py-2 rounded-lg text-sm outline-none" placeholder="Search" />
                  <svg className="size-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
              </div>
              {/* BellButton */}
              <div className="relative">
                <button className="p-2 rounded-full bg-white border border-gray-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                </button>
                <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">30</span>
              </div>
              {/* User and Email */}
              <div className="flex items-center gap-3">
                <img src="./images/Pages/resume/profile.webp" alt="avatar" className="size-12 rounded-2xl border-2 border-blue-400" />
                <div className="text-sm">
                  <div className="font-medium">{data.first_name} {data.last_name}</div>
                  <div className="text-xs text-gray-400">{data.email}</div>
                </div>
              </div>
            </div>
          </header>

          {/* Page content area */}
          <div className="px-6 pb-10">
            <div className="lg:flex lg:gap-6">

              {/* CENTER COLUMN */}
              <section className="flex-1">
                <div className="space-y-6">
                  <MainResume />
                </div>
              </section>


              {/* RIGHT SIDEBAR */}
              <RSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom spacing */}
      <div div className="h-8" ></div >
    </div >
  );
}
