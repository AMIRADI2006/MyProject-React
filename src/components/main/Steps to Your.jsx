import React from "react";


export default function StepstoYour(){
    return(
        <>
            {/* <!-- Steps to Your Dream Job --> */}
        <section className="container text-center mt-12 xl:px-26">
            <h3 className="text-4xl font-bold">Steps to Your Dream Job</h3>
            <p className="mt-3 mb-16 text-neutral-500">The last job offers Upload</p>
            <div className="grid grid-cols-1 auto-cols-auto gap-4
            sm:grid-cols-2    md:   lg:grid-cols-3    xl:  2xl:grid-cols-4">
                <div className="relative text-left pt-12 px-5 pb-6 border border-neutral-200 rounded-lg">
                    <div
                        className="absolute -top-7 flex items-center justify-center rounded-lg text-blue-600 text-xl size-14 bg-blue-50 pr-0.5 pb-0.5">
                        1</div>
                    <h5 className="font-medium text-lg">Create account</h5>
                    <p className="text-sm text-neutral-500">Start your journey today. Nulla facilisi. Aenean et tortor at
                        elit luctus.</p>
                </div>
                <div className="relative text-left pt-12 px-5 pb-6 border border-neutral-200 rounded-lg">
                    <div
                        className="absolute -top-7 flex items-center justify-center rounded-lg text-blue-600 text-xl size-14 bg-blue-50 pr-0.5 pb-0.5">
                        2</div>
                    <h5 className="font-medium text-lg">Create account</h5>
                    <p className="text-sm text-neutral-500">Start your journey today. Nulla facilisi. Aenean et tortor at
                        elit luctus.</p>
                </div>
                <div className="relative text-left pt-12 px-5 pb-6 border border-neutral-200 rounded-lg">
                    <div
                        className="absolute -top-7 flex items-center justify-center rounded-lg text-blue-600 text-xl size-14 bg-blue-50 pr-0.5 pb-0.5">
                        3</div>
                    <h5 className="font-medium text-lg">Create account</h5>
                    <p className="text-sm text-neutral-500">Start your journey today. Nulla facilisi. Aenean et tortor at
                        elit luctus.</p>
                </div>
                <div className="relative text-left pt-12 px-5 pb-6 border border-neutral-200 rounded-lg">
                    <div
                        className="absolute -top-7 flex items-center justify-center rounded-lg text-blue-600 text-xl size-14 bg-blue-50 pr-0.5 pb-0.5">
                        4</div>
                    <h5 className="font-medium text-lg">Create account</h5>
                    <p className="text-sm text-neutral-500">Start your journey today. Nulla facilisi. Aenean et tortor at
                        elit luctus.</p>
                </div>
            </div>

        </section>
        </>
    )
}