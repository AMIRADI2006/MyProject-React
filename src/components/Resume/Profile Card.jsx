export default function ProfileCard({ data }) {
    return (
        <>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="md:flex md:items-center md:gap-6">
                    <div className="w-28 h-28 rounded-lg border-2 border-dashed flex items-center justify-center text-gray-400">
                        <span className="text-3xl">
                            <img src="./images/Pages/resume/profile.webp" alt="avatar" className="size-fit" />
                        </span>
                    </div>

                    <div className="flex-1 mt-4 md:mt-0">
                        <div className="flex items-center justify-between">
                            <div>
                                <a className="text-blue-600 font-medium hover:underline">{data.first_name} {data.last_name}</a>
                                <div className="text-sm text-gray-500 mt-1">Product Designer • THarward, Psychology</div>
                            </div>

                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm cursor-pointer hover:bg-blue-500">View resume</button>
                                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm cursor-pointer hover:bg-neutral-100">Download PDF Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}