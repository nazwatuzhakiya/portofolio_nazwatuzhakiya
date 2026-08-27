import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }
    }
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate="default"
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] border border-mint/50 bg-mint/10 backdrop-blur-sm shadow-[0_0_15px_rgba(93,248,216,0.3)]"
      />
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          transition: { type: "tween", duration: 0 }
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[100] bg-mint shadow-[0_0_10px_rgba(93,248,216,0.8)]"
      />
    </>
  );
}
