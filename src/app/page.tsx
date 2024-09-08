"use client";

import { Hero } from './components/Hero';  // Keep Hero if used on the Home Page
import { CTA } from './components/CTA';    // Keep CTA if you need it on the Home Page

export default function HomePage() {
  return (
    <>
      <Hero />
      <CTA />
    </>
  );
}
