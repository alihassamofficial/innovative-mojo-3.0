"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface RoundedPolygonProps {
  className?: string;
  points: { x: number; y: number }[]; // Normalized coordinates (0 to 1)
  radius?: number;
  borderColor?: string;
  borderWidth?: number;
  children: React.ReactNode;
  // If provided, these override the measured dimensions and disable internal ResizeObserver for path calculation
  fixedWidth?: number;
  fixedHeight?: number;
  disableClipPathTransition?: boolean;
}

const RoundedPolygon = ({
  className = "",
  points,
  radius = 22,
  borderColor,
  borderWidth = 1,
  children,
  fixedWidth,
  fixedHeight,
  disableClipPathTransition = false,
}: RoundedPolygonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredDims, setMeasuredDims] = useState({ w: 0, h: 0 });

  // Use fixed dimensions if provided, otherwise used measured ones
  const width = fixedWidth ?? measuredDims.w;
  const height = fixedHeight ?? measuredDims.h;

  // Calculate path
  const path = useMemo(() => {
    if (width === 0 || height === 0) return "";

    // Scale normalized points to pixels
    const p = points.map((pt) => ({ x: pt.x * width, y: pt.y * height }));

    let d = "";
    for (let i = 0; i < p.length; i++) {
      const curr = p[i];
      const prev = p[(i - 1 + p.length) % p.length];
      const next = p[(i + 1) % p.length];

      const v1 = { x: prev.x - curr.x, y: prev.y - curr.y };
      const v2 = { x: next.x - curr.x, y: next.y - curr.y };
      const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
      const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);

      const u1 = { x: v1.x / len1, y: v1.y / len1 };
      const u2 = { x: v2.x / len2, y: v2.y / len2 };

      // Angle between vectors
      const dot = u1.x * u2.x + u1.y * u2.y;
      const clampedDot = Math.max(-1, Math.min(1, dot));
      const angle = Math.acos(clampedDot);

      // Distance to tangent points
      let dist = radius / Math.tan(angle / 2);
      // Limit dist to avoid overlap (safety)
      dist = Math.min(dist, len1 / 2, len2 / 2);

      const start = { x: curr.x + u1.x * dist, y: curr.y + u1.y * dist };
      const end = { x: curr.x + u2.x * dist, y: curr.y + u2.y * dist };

      if (i === 0) {
        d += `M ${start.x},${start.y} `;
      } else {
        d += `L ${start.x},${start.y} `;
      }

      // Arc
      d += `A ${radius} ${radius} 0 0 1 ${end.x},${end.y} `;
    }
    d += "Z";
    return d;
  }, [points, radius, width, height]);

  useEffect(() => {
    // Only observe if fixed dimensions are NOT provided
    if (fixedWidth !== undefined && fixedHeight !== undefined) return;

    const container = containerRef.current;
    if (!container) return;

    const updateDims = () => {
      const rect = container.getBoundingClientRect();
      setMeasuredDims({ w: rect.width, h: rect.height });
    };

    updateDims();
    const observer = new ResizeObserver(updateDims);
    observer.observe(container);

    return () => observer.disconnect();
  }, [fixedWidth, fixedHeight]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        style={{
          clipPath: path ? `path('${path}')` : undefined,
          WebkitClipPath: path ? `path('${path}')` : undefined,
          height: "100%",
          width: "100%",
          transition: disableClipPathTransition
            ? "none"
            : "clip-path 0.1s ease-out",
        }}
      >
        {children}
      </div>
      {borderColor && path && (
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d={path}
            fill="none"
            stroke={borderColor}
            strokeWidth={borderWidth}
          />
        </svg>
      )}
    </div>
  );
};

export default RoundedPolygon;
