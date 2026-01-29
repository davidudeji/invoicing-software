"use client"

import Link from "next/link";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
 
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    try{
     const response =  await axios.post("/api/users/signup", {
    email: user.email,
    password: user.password,
  });
      console.log("Login success", response.data);
      toast.success("Login success")
      router.push("/profile")

    }catch(error: unknown){
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      console.log("Login failed", errorMessage);
      toast.error(errorMessage)
    }
  };
  useEffect(()=>{
    // Could implement button validation logic here
  },[user])

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6" onSubmit={onLogin}>
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Welcome back
        </h1>

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
          className="w-full py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
        >
          Log In
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-gray-800 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
