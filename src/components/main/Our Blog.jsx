import React from "react";

export default function OurBlog(){
    return(
        <>
        {/* <!-- Our Blog: Your Path to Career Success --> */}
        <section className="container text-center mt-12 xl:px-26">
            <h3 className="text-4xl font-bold -mb-3.5">Our Blog: Your Path to Career Success</h3>
            <div className="flex justify-end text-blue-600 text-sm font-medium">
                <a className="flex items-center gap-0.5 cursor-pointer" href="#">More
                    <svg className="size-6 w-4 mt-0.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </div>
            <p className="mb-8 text-neutral-500">Stay updated with the latest trends in hiring and career success</p>

            <div className="grid justify-items-center gap-4 
            sm:     md:     lg:grid-cols-2     xl:    2xl:grid-cols-3  ">
                <div className="w-[400px] border rounded-lg border-neutral-100 shadow">
                    <img src="/images/Our Blog Your Path to Career Success/img_1.png" alt=""/>
                    <div className="p-4 space-y-3 text-left">
                        <div className="text-xs text-neutral-500 space-x-2">
                            <a className="py-0.5 px-2 border border-neutral-500 rounded-sm" href="#">Job Market</a>
                            <a className="py-0.5 px-2 border border-neutral-500 rounded-sm" href="#">Career</a>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <span>By Mona Amiri</span>
                            <span className="block w-1 h-1 bg-neutral-500 rounded-lg"></span>
                            <span>13 Mar 2025</span>
                        </div>
                        <h5 className="text-xl font-medium">When Should You Change Your Job?</h5>
                        <p className="line-clamp-3 text-sm text-neutral-500">A professional resume increases your chances of
                            getting hired. This article covers key tips like
                            choosing the right format, highlighting skills, and writing concisely. Following these
                            principles makes your resume more attractive to employer.
                        </p>
                    </div>
                </div>
                <div className="w-[400px] text-left border rounded-lg border-neutral-100 shadow">
                    <img src="/images/Our Blog Your Path to Career Success/img_2.png" alt=""/>
                    <div className="p-4 space-y-3">
                        <div className="text-xs text-neutral-500 space-x-2">
                            <a className="py-0.5 px-2 border border-neutral-500 rounded-sm" href="#">Job Market</a>
                            <a className="py-0.5 px-2 border border-neutral-500 rounded-sm" href="#">Career</a>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <span>By Mona Amiri</span>
                            <span className="block w-1 h-1 bg-neutral-500 rounded-lg"></span>
                            <span>13 Mar 2025</span>
                        </div>
                        <h5 className="text-xl font-medium">When Should You Change Your Job?</h5>
                        <p className="line-clamp-3 text-sm text-neutral-500">A professional resume increases your chances of
                            getting hired. This article covers key tips like
                            choosing the right format, highlighting skills, and writing concisely. Following these
                            principles makes your resume more attractive to employer.
                        </p>
                    </div>
                </div>
                <div className="w-[400px] text-left border rounded-lg border-neutral-100 shadow">
                    <img src="/images/Our Blog Your Path to Career Success/img_3.png" alt=""/>
                    <div className="p-4 space-y-3">
                        <div className="text-xs text-neutral-500 space-x-2">
                            <a className="py-0.5 px-2 border border-neutral-500 rounded-sm" href="#">Job Market</a>
                            <a className="py-0.5 px-2 border border-neutral-500 rounded-sm" href="#">Career</a>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <span>By Mona Amiri</span>
                            <span className="block w-1 h-1 bg-neutral-500 rounded-lg"></span>
                            <span>13 Mar 2025</span>
                        </div>
                        <h5 className="text-xl font-medium">When Should You Change Your Job?</h5>
                        <p className="line-clamp-3 text-sm text-neutral-500">A professional resume increases your chances of
                            getting hired. This article covers key tips like
                            choosing the right format, highlighting skills, and writing concisely. Following these
                            principles makes your resume more attractive to employer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}