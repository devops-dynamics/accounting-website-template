"use client";

import { Hero } from './components/Hero';
import { CTA } from './components/CTA';  // Optional if you need a call-to-action

export default function HomePage() {
  return (
    <>
      <Hero />
      <CTA />
    </>
  );
}
