import Navbar from '../Navbar';


export default function Header() {

    return (
        <>
            <header className="bg-[#EFF5FF] h-screen pt-12 px-26">
                {/* <!-- header_top --> */}
                <section
                    className="flex items-center justify-between border border-neutral-400 rounded-lg bg-white relative z-50 mt-0 p-4">
                    <img src="/images/Logo_joblin.svg" alt="logo-joblin" />
                    <Navbar/>
                    <div className="flex items-center gap-5">
                        <div className="flex gap-7">
                            <svg className="size-6 cursor-pointer hover:text-blue-500 transition-colors"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <svg className="size-6 cursor-pointer hover:text-blue-500 transition-colors"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </div>

                        <a className="hover:text-blue-500 transition-colors" href="#">Employer</a>
                        <div className="w-0.5 h-7 bg-neutral-400 mr-2"></div>
                        <a href="#"
                            className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                            </svg>Sign Up</a>
                    </div>
                </section>
                {/* <!-- header_content --> */}
                <section className="grid grid-cols-2 mt-0">
                    {/* <!-- header_content-left --> */}
                    <div className="space-y-8">
                        <h2 className="mt-[136px] text-7xl font-extrabold max-w-xl">Your Future Starts with <span
                            className="text-blue-600">Joblin!</span></h2>
                        <p>Discover jobs that match your skills and passion.Type and explore!</p>
                        <div
                            className="flex items-center gap-5 w-fit bg-white border border-r-0 border-neutral-400 rounded-lg pl-4">

                            <div className="flex items-center gap-2 text-neutral-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <input className="outline-none " type="text" placeholder="Job title or keywords" />
                            </div>

                            <div className="h-5 mr-0.5 border-r-2 border-neutral-400"></div>

                            <div className="flex items-center gap-2 text-neutral-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <input className="outline-none " type="text" placeholder="location" />
                            </div>

                            <button
                                className="flex items-center text-white bg-blue-600 cursor-pointer py-2 px-4 gap-2 border border-blue-600 rounded-tr-lg rounded-br-lg hover:bg-blue-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                Search
                            </button>
                        </div>
                        <div className="flex">
                            <img src="/images/people.png" alt="" />
                            <p>Over <span className="text-blue-600">999+</span> jobseeker are successfully hired</p>
                        </div>
                    </div>
                    {/* <!-- header_content-right --> */}
                    <div>
                        <img className="w-2xl relative -right-28 -top-5" src="/images/header-women.svg" alt="" />
                    </div>
                </section>
            </header>
        </>
    )
}