import { useState } from "react";
import Input from "../../Input";

export default function PersonalInfoEdit({ data, onSave }) {

    const [errors, setErrors] = useState({});

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

        setForm({ ...form, [key]: value });// تغییر مقدار هر فیلد فرم

        if (errors[key]) {

            setErrors({ ...errors, [key]: "" });// پاک کردن خطا هنگام اصلاح کاربر
        }
    };

    // اعتبارسنجی فرم قبل از ارسال
    const validate = () => {
        const newErrors = {};

        if (!form.first_name?.trim()) {
            newErrors.first_name = "First name is required";
        }

        if (!form.last_name?.trim()) {
            newErrors.last_name = "Last name is required";
        }

        if (!form.email?.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!form.phone?.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10,}$/.test(form.phone)) {
            newErrors.phone = "Invalid phone number";
        }

        if (!form.birth_year?.trim()) {
            newErrors.birth_year = "Birth year is required";
        } else if (!/^\d{4}$/.test(form.birth_year)) {
            newErrors.birth_year = "Invalid birth year";
        }

        if (!form.marital_status) {
            newErrors.marital_status = "Please select marital status";
        }

        if (!form.gender) {
            newErrors.gender = "Please select gender";
        }

        setErrors(newErrors);

        // اگر هیچ خطایی نبود → فرم معتبر است
        return Object.keys(newErrors).length === 0;
    };

    // ارسال فرم (فقط اگر valid باشد)
    const handleSubmit = () => {
        if (!validate()) return; // اگه فرم ولید نباشه چیزی ریترن نمی شه
        onSave(form);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6">

            {/* ---------- Title ---------- */}
            <h3 className="font-semibold mb-8 flex items-center gap-2">
                <span className="text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                </span>
                Personal Information
            </h3>

            {/* ---------- Text Inputs ---------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                <div>
                    <Input
                        label="First Name"
                        defaultValue={form.first_name}
                        onChange={(e) => handleChange("first_name", e.target.value)}
                        error={errors.first_name}
                    />
                </div>

                <div>
                    <Input
                        label="Last Name"
                        defaultValue={form.last_name}
                        onChange={(e) => handleChange("last_name", e.target.value)}
                        error={errors.last_name}
                    />
                </div>

                <div>
                    <Input
                        label="Email Address"
                        type="email"
                        defaultValue={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        error={errors.email}
                    />
                </div>

                <div>
                    <Input
                        label="Phone Number"
                        defaultValue={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        error={errors.phone}
                    />
                </div>

                <div>
                    <Input
                        label="Year Of Birth"
                        defaultValue={form.birth_year}
                        onChange={(e) => handleChange("birth_year", e.target.value)}
                        error={errors.birth_year}
                    />
                </div>

                <div>
                    <Input
                        label="City"
                        defaultValue={form.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                    />
                </div>
            </div>

            {/* ---------- Radio Buttons ---------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

                <div>
                    <h4 className="font-medium text-sm mb-3">Marital Status</h4>
                    <div className="flex flex-col gap-3 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                checked={form.marital_status === "Married"}
                                onChange={() => handleChange("marital_status", "Married")}
                            /> Married
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                checked={form.marital_status === "Single"}
                                onChange={() => handleChange("marital_status", "Single")}
                            /> Single
                        </label>
                    </div>
                    {errors.marital_status && <p className="text-xs text-red-500 mt-2">{errors.marital_status}</p>}
                </div>

                <div>
                    <h4 className="font-medium text-sm mb-3">Gender</h4>
                    <div className="flex flex-col gap-3 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                checked={form.gender === "Female"}
                                onChange={() => handleChange("gender", "Female")}
                            /> Female
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                checked={form.gender === "Male"}
                                onChange={() => handleChange("gender", "Male")}
                            /> Male
                        </label>
                    </div>
                    {errors.gender && <p className="text-xs text-red-500 mt-2">{errors.gender}</p>}
                </div>

            </div>

            {/* ---------- Submit Button ---------- */}
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
