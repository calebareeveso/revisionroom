import React, { useEffect, useState } from "react";
function useWindowSize() {
  const [size, setSize] = useState([,]);
  useEffect(() => {
    setSize([window.innerHeight, window.innerWidth]);
    const handleResize = () => setSize([window.innerHeight, window.innerWidth]);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}
export default useWindowSize;
