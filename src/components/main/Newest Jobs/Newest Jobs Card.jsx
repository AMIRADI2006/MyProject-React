export default function NewestJobsCard({name , titel , category , location , price ,pic_url}) {
    return (
        <>
            <div className="flex gap-4 text-left border border-neutral-200 rounded-lg p-4 cursor-pointer">
                <img className="w-16 h-16" src={pic_url} alt="" />
                <div className="w-[100%] space-y-3">
                    <span className="text-neutral-500">{name}</span>
                    <h5 className="">President of Sales</h5>
                    <div className="text-blue-600 text-[12px] space-x-2">
                        <a className="px-2 py-1 bg-blue-50 rounded-sm" href="#">{category}</a>
                        <a className="px-2 py-1 bg-blue-50 rounded-sm" href="#">Remote</a>
                    </div>
                    <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        {location}</span>
                    <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium">{price}$ / Month</span>
                        <span className="text-neutral-600">1 hour ago</span>
                    </div>
                </div>
            </div>
        </>
    )
}