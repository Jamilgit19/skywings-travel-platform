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

  // Smooth spring physics for buttery scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.00001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  // Canvas opacity towards end of sequence
  const canvasOpacity = useTransform(smoothProgress, [0.92, 1], [1, 0.85]);

  // Scroll text overlays — 3 sections
  const text1Opacity = useTransform(smoothProgress, [0.02, 0.1, 0.22, 0.28], [0, 1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0.02, 0.1, 0.28], [40, 0, -40]);

  const text2Opacity = useTransform(smoothProgress, [0.32, 0.4, 0.52, 0.6], [0, 1, 1, 0]);
  const text2Y = useTransform(smoothProgress, [0.32, 0.4, 0.6], [40, 0, -40]);

  const text3Opacity = useTransform(smoothProgress, [0.65, 0.73, 0.85, 0.92], [0, 1, 1, 0]);
  const text3Y = useTransform(smoothProgress, [0.65, 0.73, 0.92], [40, 0, -40]);

  // Preload images
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

  // Draw frame on Canvas with Retina / High-DPI support
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

      // Set canvas resolution for maximum sharpness
      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Cover fit — fill entire viewport
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

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-[#030712]/20 to-[#030712]/60" />

        {/* Loading State */}
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-lowest z-50 text-on-background gap-6 px-4">
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-white/10 border-t-primary rounded-full animate-spin" />
              <span className="absolute text-xs font-bold tracking-widest text-primary font-label-sm">
                SKYWINGS
              </span>
            </div>
            <div className="text-center space-y-2">
              <p className="font-headline-sm text-headline-sm text-on-background">
                Preparing Your Journey
              </p>
              <p className="text-sm text-on-surface-variant tracking-widest uppercase font-label-sm">
                Loading Cinematic Experience {Math.round((imagesLoaded / frameCount) * 100)}%
              </p>
            </div>
            <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-container to-primary transition-all duration-200"
                style={{ width: `${(imagesLoaded / frameCount) * 100}%` }}
              />
            </div>
          </div>
        )}

        {isReady && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Overlay 1 */}
            <motion.div
              style={{ opacity: text1Opacity, y: text1Y }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
                <span className="inline-flex items-center whitespace-nowrap badge-pill px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-6 shadow-lg">
                  Elevate Your View
                </span>
                <h2 className="text-[32px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-extrabold text-white tracking-tight mb-5 drop-shadow-xl">
                  Look Beyond The Horizon
                </h2>
                <p className="text-white/85 text-[15px] md:text-[18px] leading-[1.6] font-medium drop-shadow-md">
                  Scroll down to embark on a journey across the skies to your next dream destination.
                </p>
                <div className="mt-10 flex flex-col items-center gap-2 text-white/70 text-[11px] font-bold tracking-[0.2em] uppercase animate-bounce drop-shadow-md">
                  <span>Scroll to explore</span>
                  <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
                </div>
              </div>
            </motion.div>

            {/* Overlay 2 */}
            <motion.div
              style={{ opacity: text2Opacity, y: text2Y }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
                <span className="inline-flex items-center whitespace-nowrap badge-pill px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-6 shadow-lg">
                  World-Class Travel
                </span>
                <h2 className="text-[32px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-extrabold text-white tracking-tight mb-5 drop-shadow-xl">
                  500+ Global Destinations
                </h2>
                <p className="text-white/85 text-[15px] md:text-[18px] leading-[1.6] font-medium drop-shadow-md">
                  Seamless flight bookings, exclusive business class deals, and 24/7 concierge support.
                </p>
              </div>
            </motion.div>

            {/* Overlay 3 */}
            <motion.div
              style={{ opacity: text3Opacity, y: text3Y }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
                <span className="inline-flex items-center whitespace-nowrap badge-pill px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-6 shadow-lg">
                  Welcome To SkyWings
                </span>
                <h2 className="text-[32px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-extrabold text-white tracking-tight mb-5 drop-shadow-xl">
                  Your Adventure Awaits
                </h2>
                <p className="text-white/85 text-[15px] md:text-[18px] leading-[1.6] font-medium drop-shadow-md">
                  Explore flights, hotels, and tours crafted for unforgettable memories.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
