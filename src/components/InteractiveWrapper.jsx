import React, { useRef } from 'react';
import { gsap } from 'gsap';

/**
 * InteractiveWrapper adds a 3D tilt effect based on mouse movement.
 * It forwards a ref to the child element and applies GSAP rotations.
 */
const InteractiveWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * 8; // max 8deg
    const rotateY = -(x / rect.width) * 8;
    gsap.to(el, { rotationX: rotateX, rotationY: rotateY, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    const el = wrapperRef.current;
    if (!el) return;
    gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.5, ease: 'power2.out' });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      {children}
    </div>
  );
};

export default InteractiveWrapper;
