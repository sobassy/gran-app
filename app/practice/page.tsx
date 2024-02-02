"use client";

import { GameCard } from "../components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-4 px-24 py-10">
      <div className="w-full h-20 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left">
        Practice
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <GameCard
          imagePath="/next.svg"
          title="Infinity"
          href="/practice/infinity"
          category="practice"
        />
      </div>
    </main>
  );
}
