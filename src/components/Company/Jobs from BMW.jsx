import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';

export default function JobsBMW() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get("");
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
            {/*  Jobs From BMW */}
            <section className="container mt-12 xl:px-26">
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
                    sm:    md:grid-cols-2   lg:grid-cols-3    xl:grid-cols-3  2xl:   ">

                    {jobs.map((job) => (
                        <NewestJobsCard key={job.id} job={job} />
                    ))}

                </div>
            </section>
        </>
    )
}