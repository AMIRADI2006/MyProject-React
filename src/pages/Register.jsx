import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";
import Input from "../components/Input";

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    // ✅ ولیدیشن فرانت
    const validate = () => {
        let temp = {};

        if (!form.first_name) temp.first_name = "First name is required";
        if (!form.last_name) temp.last_name = "Last name is required";

        if (!form.email) temp.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            temp.email = "Invalid email format";

        if (!form.password) temp.password = "Password is required";
        else if (form.password.length < 6)
            temp.password = "Password must be at least 6 characters";

        if (!form.password_confirmation)
            temp.password_confirmation = "Confirm your password";
        else if (form.password !== form.password_confirmation)
            temp.password_confirmation = "Passwords do not match";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setErrors({});
        setSuccess("");

        try {
            const res = await api.post("/v1/register", form);

            const token = res.data.token;

            // ذخیره توکن
            localStorage.setItem("token", token);
            api.defaults.headers.Authorization = `Bearer ${token}`;

            setSuccess("Account created successfully 🎉");

            setTimeout(() => {
                navigate("/resume");
            }, 800);

        } catch (error) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            } else if (error.response?.data?.message) {
                setErrors({ general: error.response.data.message });
            }
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT */}
            <div className="flex items-center justify-center px-6">
                <div className="w-full max-w-md">

                    {/* Logo */}
                    <div className="flex flex-col items-center text-center mb-8">
                        <img src="/images/Logo_joblin.svg" className="w-56 h-16 mb-7" />
                        <h3 className="text-[32px] font-bold leading-9 mb-4">Give us your company information</h3>
                        <p className="text-neutral-500 max-w-[400px]">Please enter your personal details to set up your account and personalize your experience</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* پیام موفقیت */}
                        {success && (
                            <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                                {success}
                            </p>
                        )}

                        <Input
                            label="First Name"
                            placeholder="Amir mohammad"
                            onChange={(e) => handleChange("first_name", e.target.value)}
                            error={errors.first_name}
                        />

                        <Input
                            label="Last Name"
                            placeholder="mohammadabadi"
                            onChange={(e) => handleChange("last_name", e.target.value)}
                            error={errors.last_name}
                        />

                        <Input
                            label="Email"
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

                        <Input
                            label="Confirm Password"
                            type="password"
                            placeholder="********"
                            onChange={(e) =>
                                handleChange("password_confirmation", e.target.value)
                            }
                            error={errors.password_confirmation}
                        />

                        {errors.general && (
                            <p className="text-sm text-red-500">{errors.general}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
                        >
                            {loading ? "Creating account..." : "Sign up"}
                        </button>
                    </form>
                    {/* OR */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="text-sm text-gray-400">OR</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {/* Google Login */}
                    <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer">
                        <img src="/images/Pages/Login and Sign up/logoGoogle.png" alt="" className="size-6" />
                        <span className="font-medium">Login with Google</span>
                    </button>

                    {/* Sign up */}
                    <p className="text-center text-sm text-gray-500 mt-6 fontme">
                        Do you already have an account?{" "}
                        <a href="/login" className="text-blue-600 hover:underline font-medium">
                            Login
                        </a>
                    </p>
                </div>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:block relative m-4">
                <img
                    src="/images/Pages/Login and Sign up/login_pic.png"
                    className="absolute inset-0 w-full h-full object-cover rounded-4xl"
                />
            </div>
        </div>
    );
}
