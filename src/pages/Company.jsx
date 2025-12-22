import { useRef, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import JobsBMW from "../components/Company/Jobs from BMW";
import Menubar from "../components/Menubar";

export default function Company() {
    const [hamber, setHamber] = useState(false);

    //دکمه ذخیره
    const [btnSave, setBtnSave] = useState(false);
    //دکمه نمایش بیشتر که در حالت موبایل دیده می شه
    const [seemore, setSeemore] = useState(false);

    //دکمه افضایش لایک
    const [plas, setPlas] = useState(5);
    //برای اینکه فقط یک بار کلیک بشه
    const [offplas, setOfplas] = useState(false); // Plas وضعیت دکمه

    //مثل بالایه
    const [mines, setMines] = useState(0);
    const [offmines, setOfmines] = useState(false); // Mines وضعیت دکمه

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
                {/* <!-- header_top --> */}
                <section
                    className="flex items-center justify-between border border-neutral-400 rounded-lg bg-white relative z-50 p-4 mt-12 mx-26
                    max-sm:mx-6  max-md:mx-12  max-lg:mx-16">
                    <img src="/images/Logo_joblin.svg" alt="logo-joblin" />
                    <Navbar />
                    <div className="flex items-center gap-5">
                        <div className="flex gap-7  
                        max-sm:     max-md:        max-lg:hidden        max-xl:gap-2    ">
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
                    <button onClick={() => setHamber(!hamber)} className="hidden  max-lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 cursor-pointer hidden   max-lg:block">
                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </section>
                <div className={`absolute -left-[200px] top-0  ${hamber ? "fixed left-0 transition-all z-50" : "transition-all"}`}>
                    <Menubar />
                </div>

                {/* <!-- header_content --> */}
                <section className="flex flex-col items-center">
                    <div className='mt-20'>
                        <img className='mx-auto rounded-2xl max-sm:hidden' src="/images/Pages/Company/Header_baner.png" alt="baner" />
                    </div>
                    {/* header_content-BMW */}
                    <div className='flex relative w-fit bg-white border border-neutral-200 rounded-lg gap-[60px] py-[43px] px-[54px] mx-auto -mt-20 z-20
                    max-sm:mx-6 max-sm:mt-0 max-sm:flex-col  max-md:mx-12  max-lg:mx-16 max-lg:py-6 max-lg:px-7 '>
                        <img src="/images/Pages/Company/Logo_BMW.png" alt="BMW" className="h-fit my-auto max-sm:size-[80%] max-sm:mx-auto" />
                        <div className='grid grid-rows-2'>
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-[32px] font-bold -mt-2.5">BMW</h2>
                                    <a href="https://www.bmw.com/en/index.html" className="flex items-center gap-1 text-blue-600 cursor-pointer text-xs">
                                        <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                        BMW.com</a>
                                </div>
                                <div className='flex gap-2 items-start'>
                                    <button className='h-8 bg-blue-600 hover:bg-blue-500 text-white px-4 rounded-lg text-sm cursor-pointer'>Follow</button>
                                    <button className="hover:text-blue-500 transition-colors mt-[3px] size-6 cursor-pointer"
                                        onClick={() => setBtnSave(!btnSave)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor"
                                            className={`${btnSave ? "fill-blue-500" : ""}`}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                        </svg>
                                    </button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        className=" hover:text-blue-500 transition-colors mt-[5px] size-5 cursor-pointer" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 justify-between items-center gap-x-12.5 space-y-5
                            max-sm:min-w-60     max-md:gap-6     max-lg:grid-cols-2 max-lg:gap-x-36     xl:     2xl:        '>
                                <div>
                                    <h5 className="text-sm text-neutral-600">Location</h5>
                                    <span className="text-neutral-700">Germany</span>
                                </div>
                                {/* <div className='w-[1px] h-[55px] bg-neutral-200'></div> */}
                                <div>
                                    <h5 className="text-sm text-neutral-600">Company size</h5>
                                    <span className="text-neutral-700">1000</span>
                                </div>
                                {/* <div className='w-[1px] h-[55px] bg-neutral-200'></div> */}
                                <div>
                                    <h5 className="text-sm text-neutral-600">Email</h5>
                                    <span className="text-neutral-700">BMW@gmail.com</span>
                                </div>
                                {/* <div className='w-[1px] h-[55px] bg-neutral-200'></div> */}
                                <div>
                                    <h5 className="text-sm text-neutral-600 -mt-5">Phone</h5>
                                    <span className="text-neutral-700">+1 98482346</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header >
            <main>
                {/*  Navigation Buttons */}
                <div className="flex mb-8 mt-12 text-xl border-b border-b-neutral-300 mx-26  max-lg:mx-16
                max-sm:text-sm max-sm:flex-wrap max-sm:mx-6 max-sm:border-none max-sm:gap-2 max-md:mx-0 max-lg:text-base  ">
                    <button onClick={() => scrollTo(infoRef)} className="px-6 py-2 hover:text-blue-500 transition hover:border-b cursor-pointer
                    max-sm:px-2 max-sm:border max-sm:border-neutral-300 max-sm:rounded max-sm:hover:border-blue-500">
                        About Company
                    </button>
                    <button onClick={() => scrollTo(peopleRef)} className="px-6 py-2 hover:text-blue-500 transition hover:border-b cursor-pointer
                    max-sm:px-2 max-sm:border max-sm:border-neutral-300 max-sm:rounded max-sm:hover:border-blue-500">
                        People at BMW
                    </button>
                    <button onClick={() => scrollTo(overviewRef)} className="px-6 py-2 hover:text-blue-500 transition hover:border-b cursor-pointer
                    max-sm:px-2 max-sm:border max-sm:border-neutral-300 max-sm:rounded max-sm:hover:border-blue-500">
                        Overview
                    </button>
                    <button onClick={() => scrollTo(jobsRef)} className="px-6 py-2 hover:text-blue-500 transition hover:border-b cursor-pointer
                    max-sm:px-2 max-sm:border max-sm:border-neutral-300 max-sm:rounded max-sm:hover:border-blue-500">
                        Jobs From BMW
                    </button>
                </div>

                {/*  Company Informations */}
                <section ref={infoRef} className="px-26
                max-sm:px-6  max-md:px-12  max-lg:px-16">
                    <h2 className="text-[28px] font-bold mb-4">Company Informations</h2>
                    <p className={`text-gray-700 leading-relaxed mb-6 ${seemore ? "max-sm:line-clamp-none" : "max-sm:line-clamp-2"}`}>
                        BMW is synonymous with engineering excellence, consistently setting the standard for precision, performance, and technological innovation across its entire range of vehicles. Driven by a customer-centric approach, the brand seamlessly integrates dynamic handling, powerful engine performance, and sophisticated design to deliver a truly premium and exhilarating driving experience. Beyond performance, BMW is deeply committed to sustainability, focusing on the development of electric mobility solutions, eco-friendly manufacturing processes, and reducing its overall environmental footprint. This commitment to a greener future is reflected in the company’s continued efforts to lead the automotive industry into a smarter, more sustainable era. Rooted in a rich heritage of German craftsmanship, BMW remains dedicated to delivering timeless style, engineering mastery, and a driving experience that continuously redefines what it means to be a leader in luxury automobiles.
                    </p>
                    <div className="text-right mb-3 text-white sm:hidden">
                        <button className="bg-blue-500 px-2 rounded cursor-pointer hover:bg-blue-400"
                            onClick={() => setSeemore(!seemore)}>
                            {seemore ? 'No More' : 'See More'}</button>
                    </div>
                    <img src="/images/Pages/Company/company-meeting.png" alt="BMW team meeting" className="w-full rounded shadow" />
                </section>

                {/*  People at BMW */}
                <section ref={peopleRef} className="mt-[88px] px-26 
                max-sm:px-6  max-md:px-12  max-lg:px-16">
                    <h2 className="text-[28px] font-bold mb-4">People at BMW</h2>
                    <div className="grid grid-cols-1 gap-6 mt-[72px] transition-all
                    sm:grid-cols-2    md:   lg:grid-cols-3    xl:grid-cols-4   2xl:grid-cols-5   max-2xl:gap-y-12">
                        {[
                            { name: "Cameron Williamson", role: "Product Designer", pic: "/images/Pages/Company/People/1.png" },
                            { name: "Cody Fisher", role: "UI Designer", pic: "/images/Pages/Company/People/2.png" },
                            { name: "Brooklyn Simmons", role: "Frontend Developer", pic: "/images/Pages/Company/People/3.png" },
                            { name: "Kristin Watson", role: "Backend Developer", pic: "/images/Pages/Company/People/4.png" },
                            { name: "Darrell Steward", role: "UX Designer", pic: "/images/Pages/Company/People/5.png" },
                        ].map((person, index) => (
                            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg text-center border border-neutral-200 cursor-pointer 
                            hover:shadow shadow-blue-500">
                                <img src={person.pic} className="w-20 h-20 mx-auto mb-2 bg-gray-200 rounded-full -mt-14" />
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

                {/*  Overview */}
                <section ref={overviewRef} className="mt-[88px] px-26
                max-sm:px-6  max-md:px-12  max-lg:px-16">
                    <h2 className="text-[28px] font-bold mb-4">Overview</h2>
                    <div className="grid grid-cols-1   gap-6
                    sm:    md:grid-cols-2   lg:    xl:   2xl:grid-cols-3">
                        {[
                            {
                                name: "Leslie Alexander",
                                comment: "When I sent in my application to Sandro, I was simply hoping for a chance. What I got was a masterclass in how to run a thoughtful, respectful, and inspiring hiring process. From the way they asked questions to the way they listened—every detail reflected.",
                                pic: "/images/Pages/Company/Overview/1.png"
                            },
                            {
                                name: "Wade Warren",
                                comment: "Taint stood out to me because of their communication and transparency. I always knew where I stood, what the next steps were, and what they were looking for. More importantly, I felt like they truly wanted a two-way dialogue—not just to assess.",
                                pic: "/images/Pages/Company/Overview/2.png"
                            },
                            {
                                name: "Ronald Richards",
                                comment: "I’ve always believed that the best companies are the ones that make you feel seen, even before you join them. That was exactly my experience with Taint. The interview wasn’t just about evaluating me—it was about helping me evaluate them, too. ",
                                pic: "/images/Pages/Company/Overview/3.png"
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded shadow">
                                <div className="flex justify-between">
                                    <div className="flex gap-4">
                                        <img className="size-7 mt-1" src="/images/Pages/Company/Overview/image.png" alt="" />
                                        <div className="flex gap-2 items-center">
                                            <img src={item.pic} className="size-10 bg-gray-300 rounded-full" />
                                            <div className="leading-0.5">
                                                <h3 className="text-lg font-medium">{item.name}</h3>
                                                <span className="text-xs text-neutral-400">Job Seeker</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="fill-amber-400 size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <span className="text-xs">4.5</span>
                                    </div>
                                </div>
                                <p className=" mt-2">{item.comment}</p>
                                <div className="flex gap-6 mt-3">
                                    <div className="flex gap-1 items-center">
                                        <button className="cursor-pointer" onClick={() => { setPlas(plas + 1); setOfplas(true); }} disabled={offplas} >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                            </svg>
                                        </button>
                                        <span className="">{plas}</span>
                                    </div>
                                    <span className="block w-px bg-black"></span>
                                    <div className="flex gap-1 items-center">
                                        <button className="cursor-pointer" onClick={() => { setMines(mines + 1); setOfmines(true); }} disabled={offmines} >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                            </svg>
                                        </button>
                                        <span className="">{mines}</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>

                {/*  Jobs From BMW */}
                <section ref={jobsRef} className=" mt-[88px] px-26 
                max-sm:px-6  max-md:px-12  max-lg:px-16">
                    <JobsBMW />
                </section>
            </main>

            <Footer />

        </>
    )
}