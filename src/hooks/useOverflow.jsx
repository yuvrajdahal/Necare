import { useState, useRef, useEffect } from "react";

const useOverflow = () => {
  const ref = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      setIsOverflowing(current.clientWidth < current.scrollWidth);
    }
  }, [ref]);

  return [ref, isOverflowing];
};

export default useOverflow;
