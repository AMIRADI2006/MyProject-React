export default function PopularCategoryCard({ cat }) {
    return (
        <>
            <div className="flex border border-neutral-200 rounded-lg p-4 ">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center p-4 bg-neutral-100 rounded-lg">
                        <img className="size-7" src={cat.icon} alt="" /></div>
                    <div className="text-left">
                        <h5 className="font-bold">{cat.title}</h5>
                        <p className="text-neutral-500">{cat.jobs+" Job available"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}