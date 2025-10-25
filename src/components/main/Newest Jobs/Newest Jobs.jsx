import React from "react";
import { useState } from 'react';
import NewestJobsCard from "./Newest Jobs Card";


const initialJobs = [
    {
        id: 1,
        company: 'MIM',
        logo: '/images/Newest Jobs For You/img_1.png',
        type: 'Full-Time',
        location: 'Korstø',
        salary: '25 155',
        postedAgo: '1 hour ago',
    },
    {
        id: 2,
        company: 'M',
        logo: '/images/Newest Jobs For You/img_2.png',
        type: 'Full-Time',
        location: 'Bergen',
        salary: '25 355',
        postedAgo: '1 hour ago',
    },
    {
        id: 3,
        company: 'LOVECLIP',
        logo: '/images/Newest Jobs For You/img_3.png',
        type: 'Full-Time',
        location: 'Trondheim',
        salary: '25 950',
        postedAgo: '1 hour ago',
    },
    {
        id: 4,
        company: 'TYME',
        logo: '/images/Newest Jobs For You/img_4.png',
        type: 'Hybrid',
        location: 'Stavanger',
        salary: '25 155',
        postedAgo: '1 hour ago',
    },
    {
        id: 5,
        company: 'OB',
        logo: '/images/Newest Jobs For You/img_5.png',
        type: 'Junior',
        location: 'Mongstad',
        salary: '25 455',
        postedAgo: '1 hour ago',
    },
    {
        id: 6,
        company: 'TAINT',
        logo: '/images/Newest Jobs For You/img_6.png',
        type: 'Mid-level',
        location: 'Bergen',
        salary: '25 950',
        postedAgo: '1 hour ago',
    },
];


export default function NewestJobs() {

    const [jobs, setJobs] = useState(initialJobs);

    return (
        <>
            {/* <!-- Newest Jobs For You --> */}
            <section className="container text-center mt-12 xl:px-26">
                <h3 className="text-4xl font-bold -mb-3.5">Newest Jobs For You</h3>
                <div className="flex justify-end text-blue-600 text-sm font-medium">
                    <a className="flex items-center gap-0.5 cursor-pointer" href="#">More
                        <svg className="size-6 w-4 mt-0.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </div>
                <p className="mb-8 text-neutral-500">Get the fastest application soa that your name is above other</p>
                <div className="grid grid-cols-1 auto-cols-auto gap-4
            sm:    md:grid-cols-2   lg:grid-cols-3    xl:grid-cols-3  2xl:   ">

                    {jobs.map((job) => (
                        <NewestJobsCard key={job.id} job={job}/>
                    ))}

                </div>
            </section>
        </>
    )
}
