"use client"

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../ui/canvas-reveal-effect";
import { useState } from "react";

const Aboutpage = () => {
      const [hovered, setHovered] = useState(false);
  
  return (
      <>
      <div
        className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="max-w-2xl mx-auto p-4">
  
         
          <h1 className="relative z-10 text-6xl  max-md:text-3xl    bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-800  text-center font-sans font-bold">
     V I L O K </h1>
          <p></p>
          <p className=" max-w-lg mx-auto my-2 text-sm  relative z-9   bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-800  text-center font-sans font-bold">
          
          Detail-Oriented Front-End Developer | Delivering User-Centric Solutions
          </p>
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={2}
                  containerClassName="bg-transparent"
                  colors={[
                    [59, 130, 246],
                    [139, 92, 246],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={1}
                />


              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Aboutpage