import { useEffect, useState, useRef } from "react";

interface Props {
  root?: HTMLElement | null;
  rootMargin?: string; // css style string, like "10px" or "10px 20px" or "12px 30px 5px 50px"
  threshold?: number | number[];
}

export const useIntersectionObserver = ({
  root = null,
  rootMargin,
  threshold = 0,
}: Props): [React.RefObject<null>, any] => {
  const [entry, updateEntry] = useState({});
  const node = useRef(null);

  let observer;
  if (typeof window !== "undefined") {
    observer = useRef(
      new window.IntersectionObserver(([entry]) => updateEntry(entry), {
        root,
        rootMargin,
        threshold,
      })
    );
  }

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node.current);
    return () => currentObserver.disconnect();
  }, [node]);

  return [node, entry];
};
