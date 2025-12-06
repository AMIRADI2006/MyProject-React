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
        <Sidebar />

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
                <div className="flex w-fit justify-center items-center border border-gray-200 bg-white rounded-lg px-4">
                  <input className="pr-10 py-2 rounded-lg text-sm outline-none" placeholder="Search"/>
                    <svg className="size-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
              </div>

              <div className="relative">
                <button className="p-2 rounded-full bg-white border border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                </button>
                <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">30</span>
              </div>

              <div className="flex items-center gap-3">
                <img src="./images/Pages/resume/profile.png" alt="avatar" className="size-12" />
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
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm cursor-pointer hover:bg-blue-500">View resume</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm cursor-pointer hover:bg-neutral-100">Download PDF Resume</button>
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
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </span> About me</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add something about yourself</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ About me</button>
                    </div>
                  </section>

                  {/* Professional Skill */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                        </svg>
                      </span> Professional Skill</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add something about yourself</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Professional Skills</button>
                    </div>
                  </section>

                  {/* Work Experience */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                      </span>
                      Work Experience</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add something about yourself</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Professional Skills</button>
                    </div>
                  </section>

                  {/* Education */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                      </span>
                      Education</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add your Education</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Education</button>
                    </div>
                  </section>

                  {/* Links */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                      </span>Links</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add all your portfolio and social links here</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Add links</button>
                    </div>
                  </section>

                  {/* Languages */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                      </span>Languages</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add your Languages</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Languages</button>
                    </div>
                  </section>

                  {/* Preferences */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                      </span>Job Preferences</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center text-gray-500">
                      <p>Add your job preferences</p>
                      <button className="mt-3 text-blue-600 text-sm font-medium">+ Job preferences</button>
                    </div>
                  </section>

                  {/* Benefits */}
                  <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-10">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                      </span>Preferred Job Benefits</h3>
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

                    <button className="mt-4 w-full py-2 border border-blue-600 text-blue-600 rounded-md cursor-pointer hover:bg-blue-100">Upload resume</button>
                  </div>

                  {/* Resume Link / QR */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                    <h4 className="font-semibold mb-3">Your Resume Link</h4>
                    <div className="mx-auto w-40 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                      <div className="text-sm">QR</div>
                    </div>

                    <p className="text-blue-600 mt-3 break-words text-sm cursor-pointer">Joblin.com/u/LF-8752332</p>

                    <button className="w-full mt-3 py-2 border rounded-md cursor-pointer hover:bg-neutral-100">Copy link</button>

                    <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-500">Save</button>
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
