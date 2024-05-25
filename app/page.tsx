
"use client";


import Hero from "./(sections)/Hero";
import Aboutpage from "./(sections)/about/page";
import Form from "./(sections)/From";
import  Projectpage  from "./(sections)/projects/page";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  <Hero/>
  <Aboutpage/>
  <Projectpage/>
<Form/>
  </main>
  );
}
