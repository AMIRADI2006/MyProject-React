import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";
import Input from "../components/Input";

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(""); // ✅ پیام موفقیت

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const validate = () => {
        let temp = {};

        if (!form.email) temp.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            temp.email = "Invalid email format";

        if (!form.password) temp.password = "Password is required";
        else if (form.password.length < 6)
            temp.password = "Password must be at least 6 characters";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setErrors({});
        setSuccess(""); // ✅ ریست پیام قبلی

        try {
            const res = await api.post("/v1/login", form);

            const token = res.data.token;

            localStorage.setItem("token", token);
            api.defaults.headers.Authorization = `Bearer ${token}`;

            setSuccess("Login successful ✅"); // ✅ پیام موفقیت
            
            // ⏱️ یه مکث کوچیک اختیاری
            setTimeout(() => {
                navigate("/resume");
            }, 800);


            console.log("Login success ✅");

        } catch (error) {
            if (error.response?.data?.message) {
                setErrors({ general: error.response.data.message });
            }
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-6">
                <div className="w-full max-w-md">

                    <div className="flex flex-col items-center mb-5">
                        <img src="/images/Logo_joblin.svg" className="w-56 h-16" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* ✅ پیام موفقیت */}
                        {success && (
                            <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                                {success}
                            </p>
                        )}

                        <Input
                            label="Company Email"
                            type="email"
                            placeholder="youremail@gmail.com"
                            onChange={(e) => handleChange("email", e.target.value)}
                            error={errors.email}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="********"
                            onChange={(e) => handleChange("password", e.target.value)}
                            error={errors.password}
                        />

                        {errors.general && (
                            <p className="text-sm text-red-500">{errors.general}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Log in"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="hidden lg:block relative m-4">
                <img
                    src="/images/Pages/Login and Sign up/login_pic.png"
                    className="absolute inset-0 w-full h-full object-cover rounded-4xl"
                />
            </div>
        </div>
    );
}
