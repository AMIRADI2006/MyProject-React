export default function PersonalInfoView({ data, onEdit }) {
    return (
        <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                </span>
                Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

                <div>
                    <p className="text-xs text-gray-400">First name</p>
                    <p className="font-medium">{data.first_name}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">Last name</p>
                    <p className="font-medium">{data.last_name}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">Email Address</p>
                    <p className="font-medium text-blue-600">{data.email}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">Mobile Number</p>
                    <p className="font-medium">{data.phone}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">Marital Status</p>
                    <p className="font-medium">{data.marital_status}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">City</p>
                    <p className="font-medium">{data.location}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">Year of Birth</p>
                    <p className="font-medium">{data.birth_year}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">Gender</p>
                    <p className="font-medium">{data.gender}</p>
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    onClick={onEdit}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-blue-500"
                    >
                    Edit
                </button>
            </div>
        </section>
    );
}
