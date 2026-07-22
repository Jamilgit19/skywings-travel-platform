"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

interface ScrollSequenceProps {
  frameCount: number;
  framePrefix: string;
}

export default function ScrollSequence({
  frameCount,
  framePrefix,
}: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Raw scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring physics for butter-smooth scrubbing (Apple style)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.0001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  // Canvas opacity towards end of sequence to smoothly transition into website
  const canvasOpacity = useTransform(smoothProgress, [0.92, 1], [1, 0.85]);

  // Scroll text overlays progress
  const text1Opacity = useTransform(smoothProgress, [0.02, 0.1, 0.22, 0.28], [0, 1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0.02, 0.1, 0.28], [30, 0, -30]);

  const text2Opacity = useTransform(smoothProgress, [0.32, 0.4, 0.52, 0.6], [0, 1, 1, 0]);
  const text2Y = useTransform(smoothProgress, [0.32, 0.4, 0.6], [30, 0, -30]);

  const text3Opacity = useTransform(smoothProgress, [0.65, 0.73, 0.85, 0.92], [0, 1, 1, 0]);
  const text3Y = useTransform(smoothProgress, [0.65, 0.73, 0.92], [30, 0, -30]);

  // Preload images into memory
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `${framePrefix}${paddedIndex}.jpg`;
      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === frameCount) {
          setIsReady(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);

    return () => {
      isMounted = false;
    };
  }, [frameCount, framePrefix]);

  // Draw crisp frame on Canvas with Retina / High-DPI support
  const drawFrame = (index: number) => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (img && img.complete) {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      // Update resolution matching screen DPI for maximum sharpness
      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const canvasRatio = displayWidth / displayHeight;
      const imgRatio = img.width / img.height;
      let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

      if (canvasRatio > imgRatio) {
        drawWidth = displayWidth;
        drawHeight = displayWidth / imgRatio;
        offsetX = 0;
        offsetY = (displayHeight - drawHeight) / 2;
      } else {
        drawWidth = displayHeight * imgRatio;
        drawHeight = displayHeight;
        offsetX = (displayWidth - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, displayWidth, displayHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    }
  };

  // Subscribe to frame index changes
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const clampedIndex = Math.min(Math.max(Math.round(latest), 0), frameCount - 1);
      drawFrame(clampedIndex);
    });
    return () => unsubscribe();
  }, [frameIndex, images, frameCount]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const currentIndex = Math.min(Math.max(Math.round(frameIndex.get()), 0), frameCount - 1);
      drawFrame(currentIndex);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex, images, frameCount]);

  return (
    <div ref={containerRef} className="relative h-[450vh] bg-[#030712] w-full">
      {/* Sticky full-screen window viewer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas Background */}
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: canvasOpacity }}
        />

        {/* Dark Vignette Overlay for Contrast */}
        <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-[#030712]/20 to-[#030712]/60" />

        {/* Loading Overlay with Glassmorphic Progress */}
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#082F49] z-50 text-white gap-6 px-4">
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-white/10 border-t-[#38BDF8] rounded-full animate-spin" />
              <span className="absolute text-xs font-bold tracking-widest text-[#38BDF8]">
                SKYWINGS
              </span>
            </div>
            <div className="text-center space-y-2">
              <p className="font-serif text-2xl tracking-wide text-white">
                Preparing Your Journey
              </p>
              <p className="text-sm text-white/60 tracking-widest uppercase">
                Loading Cinematic Experience {Math.round((imagesLoaded / frameCount) * 100)}%
              </p>
            </div>
            <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-[#38BDF8] transition-all duration-200"
                style={{ width: `${(imagesLoaded / frameCount) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Dynamic Floating Text Overlays as User Scrolls */}
        {isReady && (
          <div className="relative z-20 container max-w-4xl mx-auto px-6 text-center pointer-events-none">
            {/* Overlay 1: Window View */}
            <motion.div
              style={{ opacity: text1Opacity, y: text1Y }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span className="px-4 py-1.5 rounded-full bg-[#030712]/60 backdrop-blur-md border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                Elevate Your View
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                Look Beyond The Horizon
              </h2>
              <p className="text-white/95 text-base md:text-xl max-w-xl mx-auto font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Scroll down to embark on a journey across the skies to your next dream destination.
              </p>
              <div className="mt-8 flex flex-col items-center gap-2 text-[#38BDF8] text-xs font-bold tracking-widest animate-bounce drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                <span>SCROLL TO EXPLORE</span>
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </motion.div>

            {/* Overlay 2: Cloud Soaring */}
            <motion.div
              style={{ opacity: text2Opacity, y: text2Y }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span className="px-4 py-1.5 rounded-full bg-[#030712]/60 backdrop-blur-md border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                World-Class Travel
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                500+ Global Destinations
              </h2>
              <p className="text-white/95 text-base md:text-xl max-w-xl mx-auto font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Seamless flight bookings, exclusive business class deals, and 24/7 concierge support.
              </p>
            </motion.div>

            {/* Overlay 3: Arrival over Paris */}
            <motion.div
              style={{ opacity: text3Opacity, y: text3Y }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span className="px-4 py-1.5 rounded-full bg-[#030712]/60 backdrop-blur-md border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                Welcome To SkyWings
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                Your Adventure Awaits
              </h2>
              <p className="text-white/95 text-base md:text-xl max-w-xl mx-auto font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Explore flights, hotels, and tours crafted for unforgettable memories.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
