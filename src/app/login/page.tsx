"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Link

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // If already logged in, redirect to Service Center Admin dashboard
    if (localStorage.getItem("auth") === "true") {
      router.push("/servicecenteradmin");
    }
  }, [router]);

  if (!isMounted) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulated authentication (replace with real API call)
    if (email === "admin@example.com" && password === "password") {
      localStorage.setItem("auth", "true"); // Store authentication flag
      router.push("/servicecenteradmin"); // Redirect after login
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-black text-center">Welcome to Vehicle Hub</h2>
        <p className="text-gray-600 text-center mb-6">
          Please enter your email and password to continue
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label className="text-gray-700">Remember Password</label>
            </div>
            <Link href="/forgot-password">
              <a className="text-blue-600 hover:underline">Forgot Password?</a>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
