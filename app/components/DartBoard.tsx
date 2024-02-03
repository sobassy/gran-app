import React, { useEffect, useRef } from "react";
interface DartBoardProps {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  bedPrimaryColor?: string;
  bedSecondaryColor?: string;
  innerBullColor?: string;
  outerBullColor?: string;
}

export const DartBoard: React.FC<DartBoardProps> = ({
  size = 500,
  primaryColor = "#000000",
  secondaryColor = "#FFFFFF",
  bedPrimaryColor = "#FF0000",
  bedSecondaryColor = "#0000FF",
  innerBullColor = "#000000",
  outerBullColor = "#FF0000",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // draw darts board
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const center = size / 2;

    for (let index = 0; index < 20; index++) {
      const start_rad = 0.05 * Math.PI + index * 0.1 * Math.PI;
      const end_rad = start_rad + 0.1 * Math.PI;

      // double
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = index % 2 === 0 ? bedPrimaryColor : bedSecondaryColor;
      ctx.beginPath();
      ctx.moveTo(center, center); // 円の中心に筆をおろす
      ctx.arc(center, center, 240, start_rad, end_rad, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // outer single
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = index % 2 === 0 ? primaryColor : secondaryColor;
      ctx.beginPath();
      ctx.moveTo(center, center); // 円の中心に筆をおろす
      ctx.arc(center, center, 220, start_rad, end_rad, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // triple
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = index % 2 === 0 ? bedPrimaryColor : bedSecondaryColor;
      ctx.beginPath();
      ctx.moveTo(center, center); // 円の中心に筆をおろす
      ctx.arc(center, center, 140, start_rad, end_rad, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // inner single
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = index % 2 === 0 ? primaryColor : secondaryColor;
      ctx.beginPath();
      ctx.moveTo(center, center); // 円の中心に筆をおろす
      ctx.arc(center, center, 120, start_rad, end_rad, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // outer bull
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = outerBullColor;
      ctx.beginPath();
      ctx.arc(center, center, 30, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.stroke();

      // inner bull
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = innerBullColor;
      ctx.beginPath();
      ctx.arc(center, center, 10, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.stroke();
    }
  }, [
    size,
    primaryColor,
    secondaryColor,
    bedPrimaryColor,
    bedSecondaryColor,
    innerBullColor,
    outerBullColor,
  ]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};
