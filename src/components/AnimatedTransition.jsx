import { useRouter } from "next/router";
import { ReactNode, useRef, useEffect } from "react";

const AnimatedTransition = ({ children }) => {
  const location = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    // Apply the entrance animation when route changes
    if (containerRef.current) {
      containerRef.current.style.opacity = "0";
      containerRef.current.style.transform = "translateY(10px)";

      // Trigger reflow to ensure the animation works
      void containerRef.current.offsetWidth;

      containerRef.current.style.transition =
        "opacity 0.5s ease-out, transform 0.5s ease-out";
      containerRef.current.style.opacity = "1";
      containerRef.current.style.transform = "translateY(0)";
    }

    // Clean up animation
    return () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "0";
        containerRef.current.style.transform = "translateY(10px)";
      }
    };
  }, [location.asPath]);

  return (
    <div ref={containerRef} className="transition-opacity duration-500 h-full">
      {children}
    </div>
  );
};

export default AnimatedTransition;
