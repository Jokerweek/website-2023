import { useEffect, useLayoutEffect, useState } from "react";

export default function useBreakPoint() {
  // defines variable BreakPoint and function to set it
  const [BreakPoint, setBreakPoint] = useState(true);
  
  // function to check the window
  const handleResize = () => {
    setBreakPoint(window.innerWidth < window.innerHeight);
  };

  // add event listener to window to use the abpve function in the browser
  useEffect(() => {
    // run it a first time
    handleResize();
    // add event listener (for changes in the windowsize)
    window.addEventListener("resize", handleResize);
    // remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  });

  // return the boolean BreakPoint for use in other components
  return BreakPoint;
}
