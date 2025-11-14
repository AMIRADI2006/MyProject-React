import React, { useEffect } from "react";
import { useState } from 'react';
import JobsfromBMWCard from "./Jobs from BMW Card";


const initialBMW = [
    {
        id: 1,
        titel:'QA Engineer',
        type: 'Full-Time',
        location: 'Korstø',
        salary: '25 155',
        postedAgo: '1 hour ago',
    },
    {
        id: 2,
        titel:'Front-end Developer',
        type: 'Full-Time',
        location: 'Bergen',
        salary: '25 355',
        postedAgo: '1 hour ago',
    },
    {
        id: 3,
        titel:'UI/UX Designer',
        type: 'Full-Time',
        location: 'Trondheim',
        salary: '25 950',
        postedAgo: '1 hour ago',
    },
    {
        id: 4,
        titel:'Creative Director',
        type: 'Hybrid',
        location: 'Stavanger',
        salary: '25 155',
        postedAgo: '1 hour ago',
    },
    {
        id: 5,
        titel:'Copywriter',
        type: 'Junior',
        location: 'Mongstad',
        salary: '25 455',
        postedAgo: '1 hour ago',
    },
    {
        id: 6,
        titel:'Credit-Officer',
        type: 'Mid-level',
        location: 'Bergen',
        salary: '25 950',
        postedAgo: '1 hour ago',
    },
];


export default function JobsBMW() {

    const [bmws, setBmws] = useState(initialBMW);


    return (
        <>
            {/*  Jobs From BMW */}
            <h3 className="text-4xl font-bold -mb-3.5">Jobs from BMW</h3>
            <div className="flex justify-end text-blue-600 text-sm font-medium">
                <a className="flex items-center gap-0.5 cursor-pointer" href="#">See all
                    <svg className="size-6 w-4 mt-0.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </div>
            <div className="grid grid-cols-1 auto-cols-auto gap-4
                    sm:    md:grid-cols-2   lg:    xl:grid-cols-3  2xl:   ">

                {bmws.map((bmw) => (
                    <JobsfromBMWCard from BMW Card key={bmw.id} bmw={bmw} />
                ))}

            </div>
        </>
    )
}