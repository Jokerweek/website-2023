import { atom } from "recoil";

type visibility = boolean;

const calendarPopUp = atom<visibility>({
  key: "calendarPopUp",
  default: false,
});

export default calendarPopUp;
