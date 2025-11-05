import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import PopularCategoryCard from "./Popular Category Card";


export default function PopularCategory() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get("http://127.0.0.1:8000/api/v1/category");
                console.log(data);
                const allData = data.data.map((cat) => ({
                    id: cat.id,
                    title: cat.title,
                    jobs: cat.jobs,
                    icon: cat.icon,
                }));
                setCategories(allData);
            }
            catch (error) {
                console.log('خوردی به ارور خوشکل', error.message);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            {/* <!-- Popular Category --> */}
            <section className="container text-center mt-12">
                <h3 className="text-4xl font-bold">Popular Category</h3>
                <p className="mt-3 mb-8 text-neutral-500">The last job offers Upload</p>
                <div className="grid grid-cols-1 auto-cols-auto gap-4       
            sm:grid-cols-2    md:   lg:grid-cols-3    xl:  2xl:grid-3cols-4   min-xl:px-26">

                    {categories.map((cat) => (
                        <PopularCategoryCard key={cat.id} cat={cat} />
                    ))}

                </div>
            </section>
        </>
    )
}
