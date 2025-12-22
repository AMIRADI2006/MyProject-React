import { FcGoogle } from "react-icons/fc";

export default function PageTest() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-1">
              <span className="text-blue-600">●</span>
              jobln
            </h1>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Company Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Input"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Input"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" className="rounded" />
                Remember Me
              </label>

              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Log in
            </button>
          </form>

          {/* OR */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google Login */}
          <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FcGoogle size={22} />
            <span className="font-medium">Login with Google</span>
          </button>

          {/* Sign up */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Dont have any account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:block relative">
        <img
          src="/login-bg.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Testimonial */}
        <div className="absolute bottom-8 left-8 right-8 bg-gray-100 rounded-xl p-6 shadow-lg max-w-xl">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Eleanor Pena</p>
              <p className="text-sm text-gray-500">HR Manager at BMW</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            I had a smooth experience using this platform. From setting up my
            profile to applying for jobs, everything felt intuitive. I found
            multiple listings that matched my skills, and the real-time updates
            kept me informed without stress.
          </p>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-gray-800"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
