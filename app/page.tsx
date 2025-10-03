"use client";
import React, { Suspense, lazy, use, useEffect, useState } from "react";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import TechnicalSkills from "@/components/TechnicalSkills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { LoaderOne } from "@/components/ui/Loader";
import ScrollToTop from "@/components/ui/ScrollToTop";

//
const RecentProjects = lazy(() => import("@/components/RecentProjects"));
const Experience = lazy(() => import("@/components/Experience"));
const Approach = lazy(() => import("@/components/Approach"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for hydration
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoaderOne/>;
  }
  return (
    <>
      <main className="relative bg-black-100 justify-center items-center flex flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <TechnicalSkills />
          <Grid />
          <Suspense fallback={<LoaderOne/>}>
            <RecentProjects />
          </Suspense>
    
          <Suspense fallback={<LoaderOne/>}>
            <Experience />
          </Suspense>
          <Suspense fallback={<LoaderOne/>}>
            <Approach />
          </Suspense>

          <Suspense fallback={<LoaderOne/>}>
            <Footer />
          </Suspense>
        </div>
        <ScrollToTop/>
      </main>
    </>
  );
}
