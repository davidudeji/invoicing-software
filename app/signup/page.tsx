"use client"

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
        setLoading(true);
        const response = await axios.post("/api/users/signup", user);
        console.log("Signup success", response.data);
        router.push("/login")
    }catch(error: unknown){
        const errorMessage = error instanceof Error ? error.message : 'Signup failed';
        console.log("Signup failed", errorMessage)
        toast.error(errorMessage)
    }finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6" onSubmit={onSignup}>
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Create an account
        </h1>

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm text-gray-600">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, username: e.target.value })
            }
            placeholder="Enter your username"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            placeholder="Enter your email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            placeholder="Enter your password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={buttonDisabled}
          className={`w-full py-3 rounded-lg text-white font-medium transition ${
            buttonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-900"
          }`}
        >
         <span className="flex justify-center ">{loading ? "" : ""} Sign Up</span>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gray-800 font-medium hover:underline"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
