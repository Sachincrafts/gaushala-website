"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { assetPath } from "@/config/site";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "/images/cow-placeholder.svg",
  alt,
  className = "",
  ...rest
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const resolvedSrc = typeof src === "string" ? assetPath(src) : src;
  const resolvedFallback = typeof fallbackSrc === "string" ? assetPath(fallbackSrc) : fallbackSrc;

  return (
    <div className="relative w-full h-full overflow-hidden bg-amber-100/50">
      {/* Loading Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 animate-pulse" />
      )}

      <Image
        {...rest}
        src={error ? resolvedFallback : resolvedSrc}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
      />
    </div>
  );
}

