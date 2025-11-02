import React from "react";


export default function TopCompanies() {
    return (
        <>
            {/* <!-- Top companies --> */}
            <section className="container text-center mt-12 xl:px-26">
                <h3 className="text-4xl font-bold -mb-3.5">Top companies</h3>
                <div className="flex justify-end text-blue-600 text-sm font-medium">
                    <a className="flex items-center gap-0.5 cursor-pointer" href="#">More
                        <svg className="size-6 w-4 mt-0.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </div>
                <p className="mb-8 text-neutral-500">The last job offers Upload</p>

                <div className="grid grid-cols-1 auto-cols-auto gap-4
            sm:    md:grid-cols-2   lg:    xl:  2xl:grid-cols-3">
                    <div className="flex   text-left p-4 border border-neutral-200 rounded-lg space-x-2">
                        <img className="w-16 h-16 rounded-xl" src="/images/Top companies/img_1.png" alt="" />
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <h5 className="text-xl font-medium">Bergen</h5><span>4.5</span>
                            </div>
                            <span className="block text-xs text-neutral-500 -mt-1">Bergen</span>
                            <div className="flex gap-2 text-xs">
                                <a className="text-blue-600 py-1 px-2 border border-blue-600 rounded-sm" href="#">Global</a>
                                <a className="text-green-600 py-1 px-2 border border-green-600 rounded-sm" href="#">Hiring</a>
                            </div>
                            <p className="text-neutral-800 text-xs">Sandro is a French fashion brand known for its chic,
                                contemporary collections, offering men.</p>
                            <div className="text-xs text-neutral-600 space-x-2 text-center">
                                <span>50 Jobs</span><span>103.98K Reviewes</span><span>88.1K Salaries</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex   text-left p-4 border border-neutral-200 rounded-lg space-x-2">
                        <img className="w-16 h-16 rounded-xl" src="/images/Top companies/img_2.png" alt="" />
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <h5 className="text-xl font-medium">Bergen</h5><span>4.5</span>
                            </div>
                            <span className="block text-xs text-neutral-500 -mt-1">Bergen</span>
                            <div className="flex gap-2 text-xs">
                                <a className="text-blue-600 py-1 px-2 border border-blue-600 rounded-sm" href="#">Global</a>
                                <a className="text-green-600 py-1 px-2 border border-green-600 rounded-sm" href="#">Hiring</a>
                            </div>
                            <p className="text-neutral-800 text-xs">Sandro is a French fashion brand known for its chic,
                                contemporary collections, offering men.</p>
                            <div className="text-xs text-neutral-600 space-x-2 text-center">
                                <span>50 Jobs</span><span>103.98K Reviewes</span><span>88.1K Salaries</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex   text-left p-4 border border-neutral-200 rounded-lg space-x-2">
                        <img className="w-16 h-16 rounded-xl" src="/images/Top companies/img_3.png" alt="" />
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <h5 className="text-xl font-medium">Bergen</h5><span>4.5</span>
                            </div>
                            <span className="block text-xs text-neutral-500 -mt-1">Bergen</span>
                            <div className="flex gap-2 text-xs">
                                <a className="text-blue-600 py-1 px-2 border border-blue-600 rounded-sm" href="#">Global</a>
                                <a className="text-green-600 py-1 px-2 border border-green-600 rounded-sm" href="#">Hiring</a>
                            </div>
                            <p className="text-neutral-800 text-xs">Sandro is a French fashion brand known for its chic,
                                contemporary collections, offering men.</p>
                            <div className="text-xs text-neutral-600 space-x-2 text-center">
                                <span>50 Jobs</span><span>103.98K Reviewes</span><span>88.1K Salaries</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}