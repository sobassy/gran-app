"use client";

import { DartBoard } from "@/app/components/DartBoard";
import { Segment } from "@/services/boardinfo";
import { Granboard } from "@/services/granboard";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [granboard, setGranboard] = useState<Granboard>();
  const [ignoreInputs, setIgnoreInputs] = useState(false);
  const [connectionState, setConnectionState] = useState<
    "standby" | "connecting" | "connected" | "error"
  >("standby");

  const handleConnect = async () => {
    setConnectionState("connecting");

    try {
      setGranboard(await Granboard.ConnectToBoard());
      setConnectionState("connected");
    } catch (error) {
      console.error(error);
      setConnectionState("error");
    }
  };

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

  return (
    <main className="flex min-h-screen flex-col items-start justify-between gap-4 px-24 py-10">
      <div className="w-full h-20 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-left">
        Practice
      </div>
      <DartBoard />
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={handleConnect}
      >
        {connectionState}
      </button>
    </main>
  );
}
