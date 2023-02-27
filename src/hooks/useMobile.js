import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import mobile from "../recoil/mobile";

export default function useMobile() {
  const setMobile = useSetRecoilState(mobile);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth < window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });
  return('lol');
}