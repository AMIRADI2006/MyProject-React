import React from "react";
import NewestJobsCard from "./Newest Jobs Card";


export default function NewestJobs(){

    var product_1={
        name : 'MIM',
        titel : 'President of Sales',
        category : 'Full-Time',
        location : 'Korstø',
        price : '25 25',
        pic_url : '../src/images/Newest Jobs For You/img_1.png'
    }
    var product_2={
        name : 'MIM',
        titel : 'Web Designer',
        category : 'Full-Time',
        location : 'Bergen',
        price : '25 35',
        pic_url : '../src/images/Newest Jobs For You/img_2.png'
    }
    var product_3={
        name : 'LOVECLIP',
        titel : 'Nursing Assistant',
        category : 'Full-Time',
        location : 'Trondheim',
        price : '25 55',
        pic_url : '../src/images/Newest Jobs For You/img_3.png'
    }
    var product_4={
        name : 'TYME',
        titel : 'Marketing Coordinator',
        category : 'Hybrid',
        location : 'Stavanger',
        price : '25 15',
        pic_url : '../src/images/Newest Jobs For You/img_4.png'
    }
    var product_5={
        name : 'OB',
        titel : 'Dog Trainer',
        category : 'Junior',
        location : 'Mongstad',
        price : '25 45',
        pic_url : '../src/images/Newest Jobs For You/img_5.png'
    }
    var product_6={
        name : 'TAINT',
        titel : 'Medical Assistant',
        category : 'Mid-Level',
        location : 'Bergen',
        price : '25 95',
        pic_url : '../src/images/Newest Jobs For You/img_6.png'
    }

    return(
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

                {/* product_1 */}
                <NewestJobsCard name={product_1.name} titel={product_1.titel} 
                category={product_1.category} location={product_1.location} price={product_1.price} pic_url={product_1.pic_url}/>
                {/* product_2 */}
                <NewestJobsCard name={product_2.name} titel={product_2.titel} 
                category={product_2.category} location={product_2.location} price={product_2.price} pic_url={product_2.pic_url}/>
                {/* product_3 */}
                <NewestJobsCard name={product_3.name} titel={product_3.titel} 
                category={product_3.category} location={product_3.location} price={product_3.price} pic_url={product_3.pic_url}/>
                {/* product_4 */}
                <NewestJobsCard name={product_4.name} titel={product_4.titel} 
                category={product_4.category} location={product_4.location} price={product_4.price} pic_url={product_4.pic_url}/>
                {/* product_5 */}
                <NewestJobsCard name={product_5.name} titel={product_5.titel} 
                category={product_5.category} location={product_5.location} price={product_5.price} pic_url={product_5.pic_url}/>
                {/* product_6 */}
                <NewestJobsCard name={product_6.name} titel={product_6.titel} 
                category={product_6.category} location={product_6.location} price={product_6.price} pic_url={product_6.pic_url}/>     
                
            </div>
        </section>
        </>
    )
}
