import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import NewestJobsCard from "./Newest Jobs Card";

//     {
//         id: 1,
//         company: 'MIM',
//         logo: '/images/Newest Jobs For You/img_1.png',
//         type: 'Full-Time',
//         location: 'Korstø',
//         salary: '25 155',
//         postedAgo: '1 hour ago',
//     },
//     {
//         id: 2,
//         company: 'M',
//         logo: '/images/Newest Jobs For You/img_2.png',
//         type: 'Full-Time',
//         location: 'Bergen',
//         salary: '25 355',
//         postedAgo: '1 hour ago',
//     },
//     {
//         id: 3,
//         company: 'LOVECLIP',
//         logo: '/images/Newest Jobs For You/img_3.png',
//         type: 'Full-Time',
//         location: 'Trondheim',
//         salary: '25 950',
//         postedAgo: '1 hour ago',
//     },
//     {
//         id: 4,
//         company: 'TYME',
//         logo: '/images/Newest Jobs For You/img_4.png',
//         type: 'Hybrid',
//         location: 'Stavanger',
//         salary: '25 155',
//         postedAgo: '1 hour ago',
//     },
//     {
//         id: 5,
//         company: 'OB',
//         logo: '/images/Newest Jobs For You/img_5.png',
//         type: 'Junior',
//         location: 'Mongstad',
//         salary: '25 455',
//         postedAgo: '1 hour ago',
//     },
//     {
//         id: 6,
//         company: 'TAINT',
//         logo: '/images/Newest Jobs For You/img_6.png',
//         type: 'Mid-level',
//         location: 'Bergen',
//         salary: '25 950',
//         postedAgo: '1 hour ago',
//     },
// ];


export default function NewestJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get("http://127.0.0.1:8000/api/v1/job");
                console.log(data);
                const allData = data.data.map((job) => ({
                    id: job.id,
                    company: job.company,
                    logo: job.logo,
                    type: job.type,
                    location: job.location,
                    salary: job.salary,
                    postedAgo: job.postedAgo,
                }));
                setJobs(allData);
            }
            catch (error) {
                console.log('خوردی به ارور خوشکل', error.message);
            }
        }
        fetchData();
    }, []);

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
                        <NewestJobsCard key={job.id} job={job} />
                    ))}

                </div>
            </section>
        </>
    )
}
