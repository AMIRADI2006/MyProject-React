import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white border-gray-200 rounded-2xl h-screen mt-8 ml-6 p-6 gap-6 shadow-sm">

      {/* Logo */}
      <div className="flex justify-center items-center gap-3">
        <img className="size-12" src="./images/Pages/resume/logo.png" alt="" />
        <div>
          <div className="font-semibold">Joblin</div>
          <div className="text-xs text-gray-400">Dashboard</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1">
        <p className="text-sm text-gray-500 mb-3">Main</p>
        <ul className="space-y-2">

          {/* BackHome */}
          <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
            <span className="w-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </span>
            <NavLink to={'/'} >Home</NavLink>
          </li>

          {/* Dashboard */}
          <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
            <span className="w-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75h-3A2.25 2.25 0 0 0 4.5 6v3a2.25 2.25 0 0 0 2.25 2.25h3A2.25 2.25 0 0 0 12 9V6a2.25 2.25 0 0 0-2.25-2.25Zm7.5 0h-3A2.25 2.25 0 0 0 12 6v3a2.25 2.25 0 0 0 2.25 2.25h3A2.25 2.25 0 0 0 19.5 9V6a2.25 2.25 0 0 0-2.25-2.25Zm-7.5 9h-3A2.25 2.25 0 0 0 4.5 14.25v3a2.25 2.25 0 0 0 2.25 2.25h3A2.25 2.25 0 0 0 12 17.25v-3A2.25 2.25 0 0 0 9.75 12.75Zm7.5 0h-3A2.25 2.25 0 0 0 12 14.25v3a2.25 2.25 0 0 0 2.25 2.25h3a2.25 2.25 0 0 0 2.25-2.25v-3a2.25 2.25 0 0 0-2.25-2.25Z" />
              </svg>
            </span>
            <span className="text-sm">Dashboard</span>
          </li>

          {/* My Profile */}
          <li className="flex items-center gap-3 p-2 rounded-md bg-gray-100 font-medium cursor-pointer">
            <span className="w-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0" />
              </svg>
            </span>
            <span className="text-sm">My Profile</span>
          </li>

          {/* Notifications */}
          <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
            <span className="w-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0h4.5Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25a5.25 5.25 0 1 1 10.5 0c0 1.273.402 2.324 1.034 3.24.486.698.716 1.367.716 2.01V15a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-1.5c0-.643.23-1.312.716-2.01A5.215 5.215 0 0 0 6.75 8.25Z" />
              </svg>
            </span>
            <span className="text-sm">Notification</span>
            <span className="ml-auto text-xs text-white bg-red-500 px-2 py-0.5 rounded-full">6</span>
          </li>

          {/* Message */}
          <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
            <span className="w-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 8.25v8.25a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 16.5V8.25m19.5 0A2.25 2.25 0 0 0 19.5 6H4.5A2.25 2.25 0 0 0 2.25 8.25m19.5 0v.243a2.25 2.25 0 0 1-1.078 1.935l-7.5 4.5a2.25 2.25 0 0 1-2.244 0l-7.5-4.5A2.25 2.25 0 0 1 2.25 8.493V8.25" />
              </svg>
            </span>
            <span className="text-sm">Message</span>
            <span className="ml-auto text-xs text-white bg-red-500 px-2 py-0.5 rounded-full">6</span>
          </li>

          {/* Account Setting */}
          <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
            <span className="w-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 0 0-.279-2.013l2.148-1.24-1.5-2.598-2.147 1.24a7.501 7.501 0 0 0-3.474-2.013V3h-3v2.376a7.5 7.5 0 0 0-3.474 2.013L5.127 5.149l-1.5 2.598 2.148 1.24A7.5 7.5 0 0 0 5.5 12c0 .701.093 1.38.279 2.013l-2.148 1.24 1.5 2.598 2.147-1.24a7.501 7.501 0 0 0 3.474 2.013V21h3v-2.376a7.501 7.501 0 0 0 3.474-2.013l2.147 1.24 1.5-2.598-2.148-1.24A7.501 7.501 0 0 0 19.5 12Z" />
              </svg>
            </span>
            <span className="text-sm">Account Setting</span>
          </li>

          {/* Activity */}
          <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
            <span className="w-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </span>
            <span className="text-sm">Activity</span>
          </li>

        </ul>
      </nav>

      {/* Footer Buttons */}
      <div className="mt-auto">

        {/* Logout */}
        <button className="w-full text-left text-red-500 font-medium flex items-center gap-3 p-2 rounded-md hover:bg-red-50">
          <span className="w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
          </span>
          Log out
        </button>

        {/* Help */}
        <button className="w-full text-left text-gray-600 mt-3 flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
          <span className="w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.88 9.88a3.25 3.25 0 1 1 4.24 4.24m-2.12 4.24h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span>
          Help
        </button>

      </div>
    </aside>
  );
}
