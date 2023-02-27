import { atom } from "recoil";

const mobile = atom({
  key: "mobile",
  default: window.innerWidth < window.innerHeight,
});

export default mobile;
