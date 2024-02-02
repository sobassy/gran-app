"use client";

import { Granboard } from "@/services/granboard";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [granboard, setGranboard] = useState<Granboard>();
  const [connectionState, setConnectionState] = useState<
    "standby" | "connecting" | "connected" | "error"
  >("standby");

  const onConnectionTest = async () => {
    setConnectionState("connecting");

    try {
      setGranboard(await Granboard.ConnectToBoard());
      setConnectionState("connected");
    } catch (error) {
      console.error(error);
      setConnectionState("error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
      <Link
        href="/01"
        className="w-full h-20 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left"
      >
        01
      </Link>
      <Link
        href="/cricket"
        className="w-full h-20 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left"
      >
        Cricket
      </Link>
      <Link
        href="/practice"
        className="w-full h-20 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left"
      >
        Practice
      </Link>
      <Link
        href="/party"
        className="w-full h-20 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left"
      >
        Party
      </Link>
      <Link
        href="/match"
        className="w-full h-20 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left"
      >
        Match
      </Link>
      <Link
        href="/ai"
        className="w-full h-20 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left"
      >
        AI
      </Link>
      <Link
        href="/beta"
        className="w-full h-20 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left"
      >
        β-BETA
      </Link>
      <div className="grid gap-2 mb-6 md:grid-cols-2 items-center">
        <p>connection test:</p>
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={onConnectionTest}
        >
          {connectionState}
        </button>
      </div>
    </main>
  );
}
