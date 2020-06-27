import { useEffect, useState } from "react";

export const useDimension = () => {
  const [dims, setDims] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    requestAnimationFrame(() => {
      setDims({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return {
    width: dims.width,
    height: dims.height,
  };
};
