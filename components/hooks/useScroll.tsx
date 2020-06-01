import { useEffect, useState, RefObject } from "react";

interface ReturnData {
  currentTarget: HTMLElement;
  timestamp: number;
  isScrolling: boolean;
}

export const useScroll = (ref?: RefObject<HTMLElement>) => {
  let timer;
  const [data, setData] = useState<ReturnData>({
    currentTarget: undefined,
    timestamp: undefined,
    isScrolling: false,
  });
  const handleScroll = (event) => {
    clearTimeout(timer);

    setData({
      currentTarget: event.currentTarget,
      timestamp: event.timeStamp,
      isScrolling: event.returnValue,
    });

    timer = setTimeout(() => {
      setData((p) => ({ ...p, isScrolling: false }));
    }, 300);
  };
  useEffect(() => {
    if (!ref) {
      // console.log("listening to scroll on window");
      window.addEventListener("scroll", handleScroll);
    } else {
      // console.log("listening to scroll on element", ref.current);
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!ref) {
        window.removeEventListener("scroll", handleScroll);
      } else {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return data;
};
