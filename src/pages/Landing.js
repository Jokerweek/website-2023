import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import mobile from "../recoil/mobile";

function Mobile() {
  return (
    <div style={{}}>
      <img
        src="/images/bg/JW-Regard-Landing-Page_MOBILE.jpg"
        alt="logo"
        style={{ position: "absolute", width: "100vw" }}
      />
      <Button
        variant="contained"
        style={{
          position: "absolute",
          top: "10vw",
          width: "150px",
          left: "calc(50vw - 75px)",
        }}
        href="/home"
      >
        Ga door
      </Button>
    </div>
  );
}

function Desktop() {
  return (
    <div style={{}}>
      <img
        src="/images/bg/JW-Regard-Landing-Page_PC.jpg"
        alt="logo"
        style={{ position: "absolute", width: "100vw" }}
      />
      <Button
        variant="contained"
        style={{
          position: "absolute",
          top: "10vw",
          width: "150px",
          left: "calc(50vw - 75px)",
        }}
        href="/home"
      >
        Ga door
      </Button>
    </div>
  );
}

export default function Landing() {
  const mobileState = useRecoilValue(mobile);

  if (mobileState) {
    return <Mobile />;
  } else {
    return <Desktop />;
  }
}
