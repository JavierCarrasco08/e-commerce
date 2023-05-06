import { useEffect, useState } from "react";

export function useHidden(value) {
  const [hidden, setHidden] = useState(null);

  useEffect(() => {
    let ignore = false;
    function handleResize() {
      setHidden(value <= window.document.documentElement.clientWidth);
    }

    window.addEventListener("resize", handleResize);
    if (!ignore) {
      handleResize();
    }
    return () => {
      ignore = true;
      window.removeEventListener("resize", handleResize);
    };
  }, [value]);

  return hidden;
}
