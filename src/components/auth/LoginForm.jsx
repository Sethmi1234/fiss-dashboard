"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5">

      <div>

        <label className="block mb-2 text-sm font-medium">
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
          className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

      </div>

      <div>

        <label className="block mb-2 text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      </div>

      <button
        type="submit"
        className="w-full bg-indigo-700 text-white py-3 rounded-xl hover:bg-indigo-800 transition"
      >
        Login In
      </button>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-2 text-sm">
        <button type="button" className="text-gray-500 underline">Forgot password?</button>
        <span className="text-gray-400">Need an account? <button className="text-indigo-600 underline">Sign up</button></span>
      </div>

    </form>
  );
}