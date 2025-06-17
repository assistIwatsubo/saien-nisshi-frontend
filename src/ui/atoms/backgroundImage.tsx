"use client";

import { useEffect, useState } from "react";
import SkeletonBackgroundImage from "../skeletons/skeleton-backgroundImage";

export default function BackgroundImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const fetchUserSetting = async () => {
      await new Promise((r) => setTimeout(r, 800));
      const settingImage = "";
      const url = settingImage || "/images/sample-home-bg.jpeg";
      setImageUrl(url);
    };

    fetchUserSetting();
  }, []);

  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => setShowImage(true), 10); // アニメーション発火用の軽いディレイ
    };
  }, [imageUrl]);

  return (
    <>
      <SkeletonBackgroundImage />{" "}
      {imageLoaded && (
        <div
          data-role="background-image"
          className={`fixed top-0 left-0 h-full w-full bg-cover bg-center blur-[2px] saturate-90 transition-opacity duration-700 ${
            showImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
    </>
  );
}
