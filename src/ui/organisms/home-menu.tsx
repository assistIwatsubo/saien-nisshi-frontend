"use client";
import { useState, useEffect } from "react";
import DiariesList from "../molecules/diaries-list";
import CarouselNavigation from "../molecules/carousel-navigation";
import LinkButton from "../atoms/link-button";

export default function HomeMenu() {
  return (
    <section data-role="home-menu" aria-labelledby="home-menu-title">
      <CarouselNavigation />
      <div className="py-8">
        <DiariesList />
        <div className="container m-auto flex items-center justify-center pt-8">
          <LinkButton href="/diary" label="もっと見る" />
        </div>
      </div>
    </section>
  );
}
