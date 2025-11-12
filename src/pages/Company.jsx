import { useRef } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Company() {

    const infoRef = useRef(null);
    const peopleRef = useRef(null);
    const overviewRef = useRef(null);
    const jobsRef = useRef(null);

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header>
                {/* wrapper_header-top */}
                <section className='pt-12 px-26'>
                    {/* <!-- header_top --> */}
                    <section
                        className="container flex items-center justify-between border border-neutral-400 rounded-lg bg-white relative z-50 mt-0">
                        <img src="/images/Logo_joblin.svg" alt="logo-joblin" />
                        <Navbar />
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
                </section>
                {/* <!-- header_content --> */}
                <section>
                    <div className='mt-20'>
                        <img className='mx-auto rounded-2xl' src="/images/Pages/Company/Header_baner.png" alt="baner" />
                    </div>
                    {/* header_content-BMW */}
                    <div className='relative w-fit flex bg-white border border-neutral-200 rounded-lg gap-[60px] py-[43px] px-[54px] mx-auto -mt-[80px] z-20'>
                        <img src="/images/Pages/Company/Logo_BMW.png" alt="BMW" />
                        <div className='grid grid-rows-2'>
                            <div className='flex justify-between'>
                                <div>
                                    <h2>BMW</h2>
                                    <span>BMW.com</span>
                                </div>
                                <div className='flex gap-2 items-start'>
                                    <button className='h-8 bg-blue-600 text-white px-4 rounded-lg text-sm'>Follow</button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        className=" hover:text-blue-500 transition-colors mt-[3px] size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    className=" hover:text-blue-500 transition-colors mt-[5px] size-5" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-[716px] flex justify-between items-center'>
                                <div>
                                    <h5>Location</h5>
                                    <span>Germany</span>
                                </div>
                                <div className='w-[1px] h-[55px] bg-neutral-200'></div>
                                <div>
                                    <h5>Company size</h5>
                                    <span>1000</span>
                                </div>
                                <div className='w-[1px] h-[55px] bg-neutral-200'></div>
                                <div>
                                    <h5>Email</h5>
                                    <span>BMW@gmail.com</span>
                                </div>
                                <div className='w-[1px] h-[55px] bg-neutral-200'></div>
                                <div>
                                    <h5>Phone</h5>
                                    <span>+1 98482346</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                {/* Company Informations */}
                {/* <section className='px-26'>
                    <div className='container'>
                        <div className="flex flex-wrap gap-4 mb-6">
                            {[
                                { label: "About Company", ref: aboutRef },
                                { label: "People at BMW", ref: peopleRef },
                                { label: "Overview", ref: overviewRef },
                                { label: "Jobs From BMW", ref: jobsRef },
                            ].map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.ref)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                    </div>
                </section> */}

                <div className="px-26 mx-auto">
                    {/* 🔹 Navigation Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8 justify-center">
                        <button onClick={() => scrollTo(infoRef)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                            About Company
                        </button>
                        <button onClick={() => scrollTo(peopleRef)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                            People at BMW
                        </button>
                        <button onClick={() => scrollTo(overviewRef)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                            Overview
                        </button>
                        <button onClick={() => scrollTo(jobsRef)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                            Jobs From BMW
                        </button>
                    </div>

                    {/* 🔹 Company Informations */}
                    <section ref={infoRef} className="mb-16">
                        <h2 className="text-2xl font-bold mb-4">Company Informations</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            BMW is synonymous with engineering excellence, consistently setting the standard for precision, performance, and technological innovation across its entire range of vehicles. Driven by a customer-centric approach, the brand seamlessly integrates dynamic handling, powerful engine performance, and sophisticated design to deliver a truly premium and exhilarating driving experience. Beyond performance, BMW is deeply committed to sustainability, focusing on the development of electric mobility solutions, eco-friendly manufacturing processes, and reducing its overall environmental footprint. This commitment to a greener future is reflected in the company’s continued efforts to lead the automotive industry into a smarter, more sustainable era. Rooted in a rich heritage of German craftsmanship, BMW remains dedicated to delivering timeless style, engineering mastery, and a driving experience that continuously redefines what it means to be a leader in luxury automobiles.
                        </p>
                        <img src="/images/Pages/Company/company-meeting.png" alt="BMW team meeting" className="w-full rounded shadow" />
                    </section>

                    {/* 🔹 People at BMW */}
                    <section ref={peopleRef} className="mb-16">
                        <h2 className="text-2xl font-bold mb-4">People at BMW</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { name: "Cameron Williamson", role: "Product Designer", pic: "/images/Pages/Company/People/1.png" },
                                { name: "Cody Fisher", role: "UI Designer", pic: "/images/Pages/Company/People/2.png" },
                                { name: "Brooklyn Simmons", role: "Frontend Developer", pic: "/images/Pages/Company/People/3.png" },
                                { name: "Kristin Watson", role: "Backend Developer", pic: "/images/Pages/Company/People/4.png" },
                                { name: "Darrell Steward", role: "UX Designer", pic: "/images/Pages/Company/People/5.png" },
                            ].map((person, index) => (
                                <div key={index} className="flex flex-col items-center bg-white p-4 rounded shadow text-center">
                                    <img src={person.pic} className="w-20 h-20 mx-auto mb-2 bg-gray-200 rounded-full" />
                                    <h3 className="font-semibold">{person.name}</h3>
                                    <p className="text-sm text-gray-500">{person.role}</p>
                                    <div className="flex items-center gap-4 mt-4">
                                        <img className="size-6" src="/images/Pages/Company/People/in.png" alt="in" />
                                        <img className="size-6" src="/images/Pages/Company/People/bal.png" alt="in" />
                                        <img className="size-6" src="/images/Pages/Company/People/insta.png" alt="in" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 🔹 Overview */}
                    <section ref={overviewRef} className="mb-16">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: "Leslie Alexander", comment: "BMW is a great place to work with a lot of opportunities." },
                                { name: "Wade Warren", comment: "The company culture is very supportive and inclusive." },
                                { name: "Ronald Richards", comment: "I enjoy the challenges and the team spirit here." },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-4 rounded shadow">
                                    <div className="w-16 h-16 mb-2 bg-gray-300 rounded-full" />
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{item.comment}</p>
                                    <div className="mt-2 text-yellow-400">⭐ 4.5</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 🔹 Jobs From BMW */}
                    <section ref={jobsRef} className="mb-16">
                        <h2 className="text-2xl font-bold mb-4">Jobs From BMW</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                "QA Engineer",
                                "Front-end Developer",
                                "UI/UX Designer",
                                "Creative Director",
                                "Copywriter",
                                "Credit Officer",
                                "Software Engineer",
                            ].map((job, index) => (
                                <div key={index} className="bg-white p-4 rounded shadow">
                                    <div className="text-lg font-semibold mb-2">{job}</div>
                                    <p className="text-sm text-gray-500">Location: Canada</p>
                                    <p className="text-sm text-gray-500">Salary: 25,955 / Month</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-right">
                            <a href="#" className="text-blue-600 hover:underline">See all jobs</a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>

        </>
    )
}