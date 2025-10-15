import React from "react";
import PopularCategoryCard from "./Popular Category Card";


export default function PopularCategory() {
    var product_1={
        titel : 'Wordpress Developer',
        description : '72 + Job avalibale',
        pic_url : '../src/images/Popular Category/wordpress.png'
    }
    var product_2={
        titel : 'Software Developer',
        description : '121 + Job avalibale',
        pic_url : '../src/images/Popular Category/Laptop.png'
    }
    var product_3={
        titel : 'Software Tester',
        description : '104 + Job avalibale',
        pic_url : '../src/images/Popular Category/user.png'
    }
    var product_4={
        titel : 'Graphic Designer',
        description : '58 + Job avalibale',
        pic_url : '../src/images/Popular Category/pen.png'
    }
    var product_5={
        titel : 'Team Leader',
        description : '35 + Job avalibale',
        pic_url : '../src/images/Popular Category/users-group.png'
    }
    var product_6={
        titel : 'UX Designer',
        description : '96 + Job avalibale',
        pic_url : '../src/images/Popular Category/search.png'
    }
    var product_7={
        titel : 'Project Manager',
        description : '78 + Job avalibale',
        pic_url : '../src/images/Popular Category/brush.png'
    }
    var product_8={
        titel : 'UI Designer',
        description : '64 + Job avalibale',
        pic_url : '../src/images/Popular Category/edit.png'
    }

    return (
        <>
            {/* <!-- Popular Category --> */}
            <section className="container text-center mt-12">
                <h3 className="text-4xl font-bold">Popular Category</h3>
                <p className="mt-3 mb-8 text-neutral-500">The last job offers Upload</p>
                <div className="grid grid-cols-1 auto-cols-auto gap-4       
            sm:grid-cols-2    md:   lg:grid-cols-3    xl:  2xl:grid-cols-4   min-xl:px-26">

                    {/* product_1 */}
                    <PopularCategoryCard titel={product_1.titel} description={product_1.description} pic_url={product_1.pic_url}/>
                    {/* product_2 */}
                    <PopularCategoryCard titel={product_2.titel} description={product_2.description} pic_url={product_2.pic_url}/>
                    {/* product_3 */}
                    <PopularCategoryCard titel={product_3.titel} description={product_3.description} pic_url={product_3.pic_url}/>
                    {/* product_4 */}
                    <PopularCategoryCard titel={product_4.titel} description={product_4.description} pic_url={product_4.pic_url}/>
                    {/* product_5 */}
                    <PopularCategoryCard titel={product_5.titel} description={product_5.description} pic_url={product_5.pic_url}/>
                    {/* product_6 */}
                    <PopularCategoryCard titel={product_6.titel} description={product_6.description} pic_url={product_6.pic_url}/>
                    {/* product_7 */}
                    <PopularCategoryCard titel={product_7.titel} description={product_7.description} pic_url={product_7.pic_url}/>
                    {/* product_8 */}
                    <PopularCategoryCard titel={product_8.titel} description={product_8.description} pic_url={product_8.pic_url}/>
                </div>
            </section>
        </>
    )
}