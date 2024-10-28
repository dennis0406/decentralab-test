'use client';
import { useEffect, useRef } from 'react';

import { colors } from '@/styles/colors';

interface SplineChartProps {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
}

const SplineChart = ({
  data,
  width = 600,
  height = 400,
  className = '',
}: SplineChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0.1197, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(0.2441, colors.blue[400]);
    gradient.addColorStop(0.8165, colors.blue[400]);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;

    const spacing = width / (data.length - 1);

    ctx.beginPath();
    ctx.moveTo(0, height - data[0]);

    for (let i = 1; i < data.length - 1; i++) {
      const x = i * spacing;
      const y = height - data[i];

      const cp1x = x - spacing / 2;
      const cp1y = height - data[i - 1];
      const cp2x = x + spacing / 2;
      const cp2y = height - data[i + 1];

      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    ctx.lineTo(width, height - data[data.length - 1]);
    ctx.stroke();
  }, [data, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default SplineChart;
