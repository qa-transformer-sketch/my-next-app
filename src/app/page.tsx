"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Next.js with Backend</h1>
      <p className="text-lg">API says: {msg}</p>
    </main>
  );
}