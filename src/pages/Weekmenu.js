import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import mobile from "../recoil/mobile";
import "./doorklik.css";

function Mobile() {
  return (
    <div
      className="bg"
      style={{ width: "100%", height: "100vh", overflowX: "hidden" }}
    >
      {/* <img
        src="/images/bg/JW-Regard-Landing-Page_MOBILE.jpg"
        alt="logo"
        style={{ width: "100vw" }}
      /> */}
      <IconButton href="/home" aria-label="delete" className="back">
        <ArrowBackIcon />
      </IconButton>
      <div className="title">
        <h1>
          <u>W</u>eekmen<u className="titleColor">u</u>
          <br /> maandag
        </h1>
      </div>
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

export default function Weekmenu() {
  const mobileState = useRecoilValue(mobile);

  if (mobileState) {
    return <Mobile />;
  } else {
    return <Mobile />;
  }
}
