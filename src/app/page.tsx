"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative max-w-8xl mx-auto w-full">
      <Nav />
      <Hero />
      <FeaturesCarousel />
      <Solution />
      <Testimonials />
      <HowItWorks />
      <Support />
      <Footer />
    </main>
  );
}
