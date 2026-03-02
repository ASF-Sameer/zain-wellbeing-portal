"use client";

import { useState } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import GridCard from "@/components/grid-card";
import SlideDrawer from "@/components/slide-drawer";
import DrawerContent from "@/components/drawer-content";
import StickyFooter from "@/components/sticky-footer";
import { hubCategories } from "@/data/content";

export default function Home() {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const activeCategory = hubCategories.find((c) => c.id === activeDrawer);

  return (
    <>
      <Header />
      <main className="pb-20">
        <HeroSection />

        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {hubCategories.map((category, index) => (
              <GridCard
                key={category.id}
                category={category}
                index={index}
                onClick={() => setActiveDrawer(category.id)}
              />
            ))}
          </div>
        </section>
      </main>

      <SlideDrawer
        isOpen={activeDrawer !== null}
        onClose={() => setActiveDrawer(null)}
        title={activeCategory?.title || ""}
      >
        {activeDrawer && <DrawerContent categoryId={activeDrawer} />}
      </SlideDrawer>

      <StickyFooter />
    </>
  );
}
