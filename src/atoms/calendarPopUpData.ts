import { atom } from "recoil";

type visibility = React.ReactNode | string;

const calendarPopUpData = atom<visibility>({
  key: "calendarPopUpData",
  default: "test",
});

export default calendarPopUpData;
