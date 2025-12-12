import { useState } from "react";
import Input from "../../Input";

export default function PersonalInfoEdit({ data, onSave }) {

    const [form, setForm] = useState({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        location: data.location,
        marital_status: data.marital_status,
        gender: data.gender,
        birth_year: data.birth_year,
    });

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    const handleSubmit = () => {
        onSave(form);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6">

            <h3 className="font-semibold mb-8 flex items-center gap-2">
                <span className="text-lg">...</span>
                Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Input label="First Name" 
                    defaultValue={form.first_name}
                    type="text"
                    placeholder=""
                    onChange={(e)=>handleChange("first_name", e.target.value)}
                />

                <Input label="Last Name" 
                    defaultValue={form.last_name}
                    type="text"
                    onChange={(e)=>handleChange("last_name", e.target.value)}
                />

                <Input label="Email Address"
                    type="email"
                    defaultValue={form.email}
                    onChange={(e)=>handleChange("email", e.target.value)}
                />

                <Input label="Phone Number"
                    defaultValue={form.phone}
                    onChange={(e)=>handleChange("phone", e.target.value)}
                />

                <Input label="Year Of Birth"
                    type="text"
                    defaultValue={form.birth_year}
                    onChange={(e)=>handleChange("birth_year", e.target.value)}
                />

                <Input label="City"
                    defaultValue={form.location}
                    onChange={(e)=>handleChange("location", e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

                <div>
                    <h4 className="font-medium text-sm mb-3">Marital Status</h4>

                    <div className="flex flex-col gap-3 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" 
                                name="marital"
                                checked={form.marital_status === "Married"}
                                onChange={() => handleChange("marital_status", "Married")}
                            /> Married
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" 
                                name="marital"
                                checked={form.marital_status === "Single"}
                                onChange={() => handleChange("marital_status", "Single")}
                            /> Single
                        </label>
                    </div>
                </div>

                <div>
                    <h4 className="font-medium text-sm mb-3">Gender</h4>

                    <div className="flex flex-col gap-3 text-sm">

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" 
                                name="gender"
                                checked={form.gender === "Female"}
                                onChange={() => handleChange("gender", "Female")}
                            /> Female
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" 
                                name="gender"
                                checked={form.gender === "Male"}
                                onChange={() => handleChange("gender", "Male")}
                            /> Male
                        </label>

                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                <button 
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm cursor-pointer hover:bg-blue-500"
                >
                    Save Changes
                </button>
            </div>

        </div>
    );
}
