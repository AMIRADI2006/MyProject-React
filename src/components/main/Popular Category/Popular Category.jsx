import React from "react";
import { useState } from 'react';
import PopularCategoryCard from "./Popular Category Card";


const initialCategories = [
    { id: 1, title: 'Wordpress Developer', jobs: 72, icon: "/images/Popular Category/wordpress.png" },
    { id: 2, title: 'Software Developer', jobs: 121, icon: "/images/Popular Category/Laptop.png" },
    { id: 3, title: 'Software Tester', jobs: 63, icon: "/images/Popular Category/user.png" },
    { id: 4, title: 'Graphic Designer', jobs: 58, icon: "/images/Popular Category/pen.png" },
    { id: 5, title: 'Team Leader', jobs: 35, icon: "/images/Popular Category/users-group.png" },
    { id: 6, title: 'UX Designer', jobs: 96, icon: "/images/Popular Category/search.png" },
    { id: 7, title: 'Project Manager', jobs: 78, icon: "/images/Popular Category/brush.png" },
    { id: 8, title: 'UI Designer', jobs: 64, icon: "/images/Popular Category/edit.png" },
];

export default function PopularCategory() {

    const [categories, setCategories] = useState(initialCategories);

    return (
        <>
            {/* <!-- Popular Category --> */}
            <section className="container text-center mt-12">
                <h3 className="text-4xl font-bold">Popular Category</h3>
                <p className="mt-3 mb-8 text-neutral-500">The last job offers Upload</p>
                <div className="grid grid-cols-1 auto-cols-auto gap-4       
            sm:grid-cols-2    md:   lg:grid-cols-3    xl:  2xl:grid-cols-4   min-xl:px-26">

                    {categories.map((cat) => (
                        <PopularCategoryCard key={cat.id} titel={cat.title} description={cat.jobs+" Job available"} pic_url={cat.icon} />
                    ))}

                </div>
            </section>
        </>
    )
}


