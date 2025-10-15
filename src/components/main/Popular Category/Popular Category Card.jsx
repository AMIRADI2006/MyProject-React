export default function PopularCategoryCard({ titel , description , pic_url }) {
    return (
        <>
            <div className="flex border border-neutral-200 rounded-lg p-4 ">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center p-4 bg-neutral-100 rounded-lg">
                        <img className="size-7" src={pic_url} alt="" /></div>
                    <div className="text-left">
                        <h5 className="font-bold">{titel}</h5>
                        <p className="text-neutral-500">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}