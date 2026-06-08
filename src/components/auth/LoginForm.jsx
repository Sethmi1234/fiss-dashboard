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
        className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Login
      </button>

    </form>
  );
}