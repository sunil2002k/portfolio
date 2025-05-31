import React, { useState, useEffect, useRef, useCallback } from "react";

const SPARKLE_LIFETIME = 600; // ms, matches animation duration

const Sparkle = ({ x, y, size, id }) => (
  <div
    style={{
      position: "fixed",
      left: x - size / 2,
      top: y - size / 2,
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 9999,
      width: size,
      height: size,
      background: "radial-gradient(circle, #fff 60%, #f0c 100%)",
      opacity: 0.8,
      boxShadow: `0 0 8px 2px #fff, 0 0 16px 4px #f0c`,
      transition: "opacity 0.3s, transform 0.3s",
      animation: "sparkle 0.6s linear",
      // pointerEvents: "none",
    }}
  />
);

// Add sparkle animation to global styles
if (!document.getElementById("sparkle-keyframes")) {
  const style = document.createElement("style");
  style.id = "sparkle-keyframes";
  style.innerHTML = `
  @keyframes sparkle {
    0% { opacity: 0; transform: scale(0.5) rotate(0deg);}
    50% { opacity: 1; transform: scale(1.2) rotate(10deg);}
    100% { opacity: 0; transform: scale(0.2) rotate(0deg);}
  }`;
  document.head.appendChild(style);
}

const SparkleCursor = () => {
  const [sparkles, setSparkles] = useState([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const animationTimeouts = useRef([]);

  // Remove a sparkle by id
  const removeSparkle = useCallback((id) => {
    setSparkles((prev) => prev.filter((s) => s.id !== id));
  }, []);

  // Add a sparkle and schedule its removal
  const createSparkle = useCallback((x, y) => {
    const size = Math.random() * 8 + 4;
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;
    setSparkles((prevSparkles) => {
      const newSparkle = { id, x, y, size };
      const maxSparkles = 30;
      return [
        ...prevSparkles.slice(Math.max(0, prevSparkles.length - maxSparkles + 1)),
        newSparkle,
      ];
    });
    // Schedule removal after animation
    const timeout = setTimeout(() => removeSparkle(id), SPARKLE_LIFETIME);
    animationTimeouts.current.push(timeout);
  }, [removeSparkle]);

  useEffect(() => {
    let moving = false;
    const handleMouseMove = (e) => {
      const dx = Math.abs(e.clientX - lastMousePos.current.x);
      const dy = Math.abs(e.clientY - lastMousePos.current.y);
      if (dx > 5 || dy > 5) {
        lastMousePos.current = { x: e.clientX, y: e.clientY };
        createSparkle(e.clientX, e.clientY);
        moving = true;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      // Clear all pending timeouts on unmount
      animationTimeouts.current.forEach(clearTimeout);
    };
  }, [createSparkle]);

  return (
    <>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
    </>
  );
};

export default SparkleCursor;
