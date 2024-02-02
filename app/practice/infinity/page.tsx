"use client";

import { Segment } from "@/services/boardinfo";
import { Granboard } from "@/services/granboard";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [granboard, setGranboard] = useState<Granboard>();
  const [ignoreInputs, setIgnoreInputs] = useState(false);

  const onSegmentHit = useCallback(
    (segment: Segment) => {
      if (ignoreInputs) {
        return;
      }

      console.log(segment);
    },
    [ignoreInputs]
  );

  useEffect(() => {
    if (!granboard) {
      return;
    }

    granboard.segmentHitCallback = onSegmentHit;
  }, [granboard, onSegmentHit]);

  // draw darts board
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const length = 500;

    console.log("loaded");

    for (let index = 0; index < 20; index++) {
      const start_rad = 0.05 * Math.PI + index * 0.1 * Math.PI;
      const end_rad = start_rad + 0.1 * Math.PI;

      // double
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = index % 2 === 0 ? "#FF0000" : "#0000FF";
      ctx.beginPath();
      ctx.moveTo(250, 250); // 円の中心に筆をおろす
      ctx.arc(250, 250, 240, start_rad, end_rad, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // outer single
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = index % 2 === 0 ? "#000000" : "#FFFFFF";
      ctx.beginPath();
      ctx.moveTo(250, 250); // 円の中心に筆をおろす
      ctx.arc(250, 250, 220, start_rad, end_rad, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // triple
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = index % 2 === 0 ? "#FF0000" : "#0000FF";
      ctx.beginPath();
      ctx.moveTo(250, 250); // 円の中心に筆をおろす
      ctx.arc(250, 250, 140, start_rad, end_rad, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // inner single
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = index % 2 === 0 ? "#000000" : "#FFFFFF";
      ctx.beginPath();
      ctx.moveTo(250, 250); // 円の中心に筆をおろす
      ctx.arc(250, 250, 120, start_rad, end_rad, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // outer bull
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = "#FF0000";
      ctx.beginPath();
      ctx.arc(250, 250, 30, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.stroke();

      // inner bull
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(250, 250, 10, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.stroke();
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <button
        onClick={async () => setGranboard(await Granboard.ConnectToBoard())}
      >
        CONNECT
      </button>
      <canvas ref={canvasRef} width={500} height={500} />

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
