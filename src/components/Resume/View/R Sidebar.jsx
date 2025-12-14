export default function RSidebar() {
    return (
        <>
            <aside className="w-full lg:w-80 mt-6 lg:mt-0">
                <div className="space-y-6">

                    {/* Resume Quality */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-semibold mb-4">Your Resume Quality</h4>
                        <div className="flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full border-8 border-gray-200 flex items-center justify-center text-xl font-bold">
                                0
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 mt-4">Your resume is only 0% complete! Let's improve it</p>
                        <ul className="mt-3 space-y-2">
                            <li className="text-xs">
                                <span className="inline-block text-blue-600 text-[11px] border border-blue-100 px-2 py-0.5 rounded">+5%</span>
                                <span className="ml-2 text-xs text-gray-600">Complete your job title</span>
                            </li>
                            <li className="text-xs">
                                <span className="inline-block text-blue-600 text-[11px] border border-blue-100 px-2 py-0.5 rounded">+5%</span>
                                <span className="ml-2 text-xs text-gray-600">Complete personal information</span>
                            </li>
                            <li className="text-xs">
                                <span className="inline-block text-blue-600 text-[11px] border border-blue-100 px-2 py-0.5 rounded">+5%</span>
                                <span className="ml-2 text-xs text-gray-600">Add your work experience</span>
                            </li>
                        </ul>
                    </div>

                    {/* Upload */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-semibold mb-2">Upload your resume</h4>
                        <p className="text-xs text-gray-400 mb-4">You can attach a separate resume file here.</p>

                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                            </div>
                            <p className="text-sm mt-2">Drag & Drop or Choose file</p>
                            <p className="text-xs text-gray-300 mt-1">To upload PDF MAX 10 MB</p>
                        </div>

                        <button className="mt-4 w-full py-2 border border-blue-600 text-blue-600 rounded-md cursor-pointer hover:bg-blue-100">Upload resume</button>
                    </div>

                    {/* Resume Link / QR */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                        <h4 className="font-semibold mb-3">Your Resume Link</h4>
                        <div className="mx-auto w-40 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                            <div className="text-sm">QR</div>
                        </div>

                        <p className="text-blue-600 mt-3 wrap-break-word text-sm cursor-pointer">Joblin.com/u/LF-8752332</p>

                        <button className="w-full mt-3 py-2 border rounded-md cursor-pointer hover:bg-neutral-100">Copy link</button>

                        <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-500">Save</button>
                    </div>

                </div>
            </aside>
        </>
    )
}