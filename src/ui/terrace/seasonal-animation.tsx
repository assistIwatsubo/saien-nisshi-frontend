"use client";

import { useEffect, useRef } from "react";

type Season = "spring" | "summer" | "autumn" | "winter";

type SeasonConfig = {
  maxParticles: number;
  createIntervalFrames: number;
  sizeRange: [number, number];
  speedYRange: [number, number];
  speedXRange: [number, number];
  opacityRange: [number, number];
  colors: string[];
  imagePaths?: string[];
  windSpeedX?: number; // ← 追加
  updateParticle: (
    p: Particle,
    frameCount: number,
    windSpeedX: number,
  ) => Particle; // windSpeedXを受け取る
};

type Particle = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  angle: number;
  angleSpeed: number;
  rotation: number;
  rotationSpeed: number;
  image?: HTMLImageElement;
};

const seasonConfigs: Record<Season, SeasonConfig> = {
  spring: {
    maxParticles: 20,
    createIntervalFrames: 80,
    sizeRange: [10, 15],
    speedYRange: [0.9, 1.2],
    speedXRange: [0, 0.2],
    opacityRange: [0.9, 1],
    colors: [],
    imagePaths: [
      "/images/animation/sakura1.png",
      "/images/animation/sakura2.png",
      "/images/animation/sakura3.png",
    ],
    windSpeedX: 0.3,
    updateParticle: (p) => ({
      ...p,
      y: p.y + p.speedY,
      x: p.x + Math.sin(p.angle) * 0.4,
      angle: p.angle + p.angleSpeed,
      rotation: p.rotation + p.rotationSpeed,
    }),
  },
  summer: {
    maxParticles: 5,
    createIntervalFrames: 50,
    sizeRange: [10, 15],
    speedYRange: [0.2, 0.6],
    speedXRange: [-1.0, 1.5],
    opacityRange: [0.7, 1],
    colors: ["#ccff99"],
    imagePaths: ["/images/animation/hotaru.png"],
    updateParticle: (p) => {
      const boundaryMargin = 50;

      // 横揺れに変更（縦はごくわずかに）
      const horizontalDrift = Math.sin(p.angle) * 0.8;
      const verticalDrift = Math.sin(p.angle * 0.3) * 0.3;

      // 新しいx位置
      const newX = p.x + p.speedX + horizontalDrift;
      const newY = p.y + verticalDrift;

      // フェードイン・アウト
      const newOpacity = Math.max(
        0,
        Math.min(1, p.opacity + (Math.random() - 0.5) * 0.02),
      );

      // 画面外に出たら除去フラグ
      const isOutOfBounds =
        newX < -boundaryMargin || newX > window.innerWidth + boundaryMargin;

      return {
        ...p,
        x: newX,
        y: newY,
        opacity: newOpacity,
        angle: p.angle + p.angleSpeed,
        speedX: isOutOfBounds ? -p.speedX : p.speedX, // 方向反転は任意
      };
    },
  },
  autumn: {
    maxParticles: 5,
    createIntervalFrames: 200,
    sizeRange: [25, 40],
    speedYRange: [1.2, 1.8],
    speedXRange: [0.1, 0.5],
    opacityRange: [0.8, 1],
    colors: [],
    imagePaths: [
      "/images/animation/ochiba1.png",
      "/images/animation/ochiba6.png",
      "/images/animation/ochiba7.png",
      "/images/animation/ochiba9.png",
    ],
    windSpeedX: 0.2,
    updateParticle: (p, frameCount, windSpeedX) => ({
      ...p,
      y: p.y + p.speedY,
      x: p.x + (windSpeedX || 0),
      angle: p.angle + 0.05,
      rotation: p.rotation + p.rotationSpeed,
    }),
  },
  winter: {
    maxParticles: 100,
    createIntervalFrames: 10,
    sizeRange: [4, 8],
    speedYRange: [0.4, 1.0],
    speedXRange: [-0.1, 0.1],
    opacityRange: [0.7, 1],
    colors: ["#ffffff"],
    imagePaths: [],
    updateParticle: (p, frameCount) => ({
      ...p,
      y: p.y + p.speedY,
      x: p.x + Math.sin(frameCount / 20 + p.angle) * 0.1,
      angle: p.angle + 0.02,
    }),
  },
};

const loadImages = (paths: string[]): HTMLImageElement[] =>
  paths.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });

export default function SeasonalEffect({ season }: { season: Season }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const config = seasonConfigs[season];
    const windSpeedX = config.windSpeedX ?? 0;

    const images = config.imagePaths ? loadImages(config.imagePaths) : [];

    let frameCount = 0;
    let animationFrameId: number;
    let particles: Particle[] = [];

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const createParticle = (): Particle => {
      const image =
        images.length > 0
          ? images[Math.floor(Math.random() * images.length)]
          : undefined;

      const isSummer = season === "summer";
      const yPos = isSummer ? height - Math.random() * (height / 3) : -10;

      // 色を持つ場合だけランダムに使う（画像がないなら強制的に使う）
      const hasColors = config.colors.length > 0;
      const shouldUseImage = image && (!hasColors || Math.random() < 0.5);

      return {
        x: Math.random() * width,
        y: yPos,
        size: randomInRange(...config.sizeRange),
        speedY: randomInRange(...config.speedYRange),
        speedX: randomInRange(...config.speedXRange),
        opacity: randomInRange(...config.opacityRange),
        color: hasColors
          ? config.colors[Math.floor(Math.random() * config.colors.length)]
          : "#ffffff", // ダミー値
        angle: Math.random() * Math.PI * 2,
        angleSpeed: randomInRange(0.02, 0.05),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: randomInRange(-0.02, 0.02),
        image: shouldUseImage ? image : undefined,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        ctx.globalAlpha = p.opacity;

        if (p.image) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.drawImage(p.image, -p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        } else {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const update = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i] = config.updateParticle(
          particles[i],
          frameCount,
          windSpeedX,
        );
      }
      particles = particles.filter(
        (p) => p.y < height && p.opacity > 0 && p.x > -50 && p.x < width + 50,
      );
    };

    const tick = () => {
      frameCount++;

      if (frameCount % config.createIntervalFrames === 0) {
        if (particles.length < config.maxParticles) {
          particles.push(createParticle());
        }
      }

      draw();
      update();

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(animationFrameId);
  }, [season]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
