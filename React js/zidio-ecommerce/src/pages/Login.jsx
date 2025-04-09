import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/starry-night.jpg')" }}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-2xl max-h-[90vh] overflow-hidden h-full">
        
        {/* Left: Image (always visible, responsive) */}
        <div className="flex justify-center items-center w-full md:w-1/2 h-64 md:h-full">
          <img
            src="/avengers.jpg"
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Login Form */}
        <div className="w-full md:w-1/2 p-6 text-white overflow-y-auto flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center mb-6 text-yellow-300 tracking-widest">
            Login
          </h1>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-300">— or —</div>

          <button className="mt-4 w-full py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg flex items-center justify-center gap-2">
            <i className="fab fa-google" />
            Continue with Google
          </button>

          <p className="text-center mt-6 text-sm text-gray-300">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-yellow-400 underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
