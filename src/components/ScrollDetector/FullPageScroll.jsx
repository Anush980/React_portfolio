import React, { useEffect, useRef, useState } from "react";

const sections = ["home", "about", "education", "skills", "contact"];

export default function FullPageScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollTimeout = useRef(null);
  const touchStartY = useRef(0);

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    setCurrentSection(index);
    const sectionId = sections[index];
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWheel = (e) => {
    if (scrollTimeout.current) return;

    // Detect vertical two-finger swipe on touchpad via wheel event
    if (Math.abs(e.deltaY) < 10) return; // ignore small scroll/noise

    if (e.deltaY > 10) {
      scrollToSection(currentSection + 1);
    } else if (e.deltaY < -10) {
      scrollToSection(currentSection - 1);
    }

    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 400); // throttle duration (ms)
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (scrollTimeout.current) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaY) > 25) {
      if (deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 400);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSection]);

  return null; // No UI, just scroll detection
}
