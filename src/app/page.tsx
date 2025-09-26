"use client"; // enables client-side state

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Simple Next.js App</h1>
      <p className="text-lg mb-6">You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
      >
        Click Me
      </button>
    </main>
  );
}