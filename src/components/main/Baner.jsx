import React from "react";


export default function Baner() {
    return (
        <>
            {/* <!-- baner --> */}
            <section className="w-[99.9%] h-[511px] bg-blue-50 mt-[88px] relative -z-20">
                <img className="absolute" src="/images/vector/Vector_1.svg" alt="" />
                <img className="absolute bottom-0 right-5 -z-10" src="/images/vector/Vector_2.svg" alt="" />
                <img className="absolute bottom-20 right-[13%] -z-10" src="/images/vector/Vector_3.svg" alt="" />
                <img className="absolute bottom-0 right-[5%] -z-10" src="/images/vector/Vector_4.svg" alt="" />

                <div className="grid grid-cols-2">
                    <div className="mt-[131px] ml-[184px] space-y-6">
                        <h3 className="text-5xl font-bold">Are you employer?</h3>
                        <p className="text-neutral-600">You can find various solutions just by accessing our platform. Because
                            we are committed to maintaining the quality of user service</p>
                        <button className="w-72 h-14 bg-blue-600 text-white text-xl rounded-lg ">Post a job</button>
                    </div>
                    <img className="" src="/images/main-man.svg" alt="" />
                </div>
            </section>
        </>
    )
}