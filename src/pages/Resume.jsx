import Sidebar from "../components/Resume/Sidebar";
export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="flex">

        {/* LEFT SIDEBAR */}
        {/* <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-gray-200 h-screen p-6 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">
              J
            </div>
            <div>
              <div className="font-semibold">Joblin</div>
              <div className="text-xs text-gray-400">Dashboard</div>
            </div>
          </div>

          <nav className="flex-1">
            <p className="text-sm text-gray-500 mb-3">Main</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <span className="w-6 text-center text-gray-500">▦</span>
                <span className="text-sm">Dashboard</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-md bg-gray-100 font-medium">
                <span className="w-6 text-center text-gray-500">👤</span>
                <span className="text-sm">My Profile</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <span className="w-6 text-center text-gray-500">🔔</span>
                <span className="text-sm">Notification</span>
                <span className="ml-auto text-xs text-white bg-red-500 px-2 py-0.5 rounded-full">6</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <span className="w-6 text-center text-gray-500">✉️</span>
                <span className="text-sm">Message</span>
                <span className="ml-auto text-xs text-white bg-red-500 px-2 py-0.5 rounded-full">6</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <span className="w-6 text-center text-gray-500">⚙️</span>
                <span className="text-sm">Account Setting</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <span className="w-6 text-center text-gray-500">⋯</span>
                <span className="text-sm">Activity</span>
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <button className="w-full text-left text-red-500 font-medium flex items-center gap-3 p-2 rounded-md hover:bg-red-50">
              <span>⎋</span> Log out
            </button>
            <button className="w-full text-left text-gray-600 mt-3 flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
              <span>❓</span> Help
            </button>
          </div>
        </aside> */}
        <Sidebar/>

        {/* MAIN AREA */}
        <div className="flex-1">
          {/* Topbar */}
          <header className="flex items-center justify-between p-6 bg-transparent">
            <div>
              <h1 className="text-2xl font-semibold">My Resume</h1>
              <p className="text-sm text-gray-500 mt-1">Updating your information will offer you the most relevent content</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    className="w-72 pl-4 pr-10 py-2 rounded-lg border border-gray-200 bg-white text-sm"
                    placeholder="Search"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                </div>
              </div>

              <div className="relative">
                <button className="p-2 rounded-full bg-white border border-gray-200">
                  🔔
                </button>
                <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">30</span>
              </div>

              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-3 py-1">
                <img src="./images/Pages/resume/profile.png" alt="avatar" className="w-8 h-8 rounded-full bg-gray-200" />
                <div className="text-sm">
                  <div className="font-medium">Kathryn Murphy</div>
                  <div className="text-xs text-gray-400">Kathrynmurphy@gmail.com</div>
                </div>
              </div>
            </div>
          </header>

          {/* Page content area */}
          <div className="px-6 pb-10">
            <div className="lg:flex lg:gap-6">

              {/* CENTER COLUMN */}
              <div className="flex-1">
                <div className="space-y-6">

                  {/* Profile Card */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="md:flex md:items-center md:gap-6">
                      <div className="w-28 h-28 rounded-lg border-2 border-dashed flex items-center justify-center text-gray-400">
                        <span className="text-3xl">📷</span>
                      </div>

                      <div className="flex-1 mt-4 md:mt-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <a className="text-blue-600 font-medium hover:underline">Kathryn Murphy</a>
                            <div className="text-sm text-gray-500 mt-1">Product Designer • THarward, Psychology</div>
                          </div>

                          <div className="flex gap-3">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">View resume</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm">Download PDF Resume</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span className="text-lg">📄</span>
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="text-xs text-gray-400">First name</p>
                        <p className="font-medium">Ana</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Last name</p>
                        <p className="font-medium">Amiri</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Email Address</p>
                        <p className="font-medium text-blue-600">anaamiri@gmail.com</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Mobile Number</p>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Marital Status</p>
                        <p className="font-medium">Single</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">City</p>
                        <p className="font-medium">Tehran</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Year of Birth</p>
                        <p className="font-medium">2005</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Gender</p>
                        <p className="font-medium">Female</p>
                      </div>
                    </div>
                  </section>

                  {/* About me */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span>👤</span> About me
                    </h3>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add something about yourself</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ About me</button>
                    </div>
                  </section>

                  {/* Professional Skill */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">💼 Professional Skill</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add something about yourself</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Professional Skills</button>
                    </div>
                  </section>

                  {/* Work Experience */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">📝 Work Experience</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add something about yourself</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Professional Skills</button>
                    </div>
                  </section>

                  {/* Education */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">🎓 Education</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add your Education</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Education</button>
                    </div>
                  </section>

                  {/* Links, Languages, Preferences, Benefits */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">🔗 Links</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add all your portfolio and social links here</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Add links</button>
                    </div>
                  </section>

                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">🗣️ Languages</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add your Languages</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Languages</button>
                    </div>
                  </section>

                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">⚙️ Job Preferences</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add your job preferences</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Job preferences</button>
                    </div>
                  </section>

                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-10">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">🎁 Preferred Job Benefits</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add your preferred job benefits</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Job benefits</button>
                    </div>
                  </section>

                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <aside className="w-full lg:w-80 mt-6 lg:mt-0">
                <div className="space-y-6">

                  {/* Resume Quality */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-semibold mb-4">Your Resume Quality</h4>
                    <div className="flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-8 border-gray-200 flex items-center justify-center text-xl font-bold">
                        0
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">Your resume is only 0% complete! Let's improve it</p>
                    <ul className="mt-3 space-y-2">
                      <li className="text-xs">
                        <span className="inline-block text-blue-600 text-[11px] border border-blue-100 px-2 py-0.5 rounded">+5%</span>
                        <span className="ml-2 text-xs text-gray-600">Complete your job title</span>
                      </li>
                      <li className="text-xs">
                        <span className="inline-block text-blue-600 text-[11px] border border-blue-100 px-2 py-0.5 rounded">+5%</span>
                        <span className="ml-2 text-xs text-gray-600">Complete personal information</span>
                      </li>
                      <li className="text-xs">
                        <span className="inline-block text-blue-600 text-[11px] border border-blue-100 px-2 py-0.5 rounded">+5%</span>
                        <span className="ml-2 text-xs text-gray-600">Add your work experience</span>
                      </li>
                    </ul>
                  </div>

                  {/* Upload */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-semibold mb-2">Upload your resume</h4>
                    <p className="text-xs text-gray-400 mb-4">You can attach a separate resume file here.</p>

                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400">
                      <div className="text-3xl">📤</div>
                      <p className="text-sm mt-2">Drag & Drop or Choose file</p>
                      <p className="text-xs text-gray-300 mt-1">To upload PDF MAX 10 MB</p>
                    </div>

                    <button className="mt-4 w-full py-2 border border-blue-600 text-blue-600 rounded-md">Upload resume</button>
                  </div>

                  {/* Resume Link / QR */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                    <h4 className="font-semibold mb-3">Your Resume Link</h4>
                    <div className="mx-auto w-40 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                      <div className="text-sm">QR</div>
                    </div>

                    <p className="text-blue-600 mt-3 break-words text-sm">Joblin.com/u/LF-8752332</p>

                    <button className="w-full mt-3 py-2 border rounded-md">Copy link</button>

                    <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom spacing */}
      <div className="h-8"></div>
    </div>
  );
}
