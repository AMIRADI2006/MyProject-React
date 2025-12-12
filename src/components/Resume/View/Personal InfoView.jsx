export default function PersonalInfoView({ data, onEdit }) {
    return (
        <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="text-lg">
                    ...
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
