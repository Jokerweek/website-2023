import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import Footer from "../../components/Footer";
import mobile from "../../recoil/mobile";
import "./doorklik.css";

function Mobile(props) {
  return (
    <>
      <div className="background" style={{}}>
        <IconButton
          href="/home"
          style={{ position: "fixed", top: "0", left: "0" }}
        >
          <ArrowBackIcon />
        </IconButton>

        <img src={props.image} className="topImage" alt="Doorklik afbeelding" />
        <u variant="contained" className="title">
          {props.title}
        </u>
        <div className="doorklikContainerMobile">
          <p>{props.children}</p>
        </div>
        <img
          src="images/logo/Spel-officieel-Transparant.png"
          alt="logo"
          className="bottomImage"
        />
      </div>
      <Footer />
    </>
  );
}

function Desktop(props) {
  return (
    <>
      <div className="background" style={{}}>
        <IconButton
          href="/home"
          style={{ position: "fixed", top: "5px", left: "5px" }}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="doorklikContainerDesktop">
          <div className="doorklikMain">
            <u variant="contained" className="title">
              {props.title}
            </u>
            <p>{props.children}</p>
          </div>
          <div>
            <img
              src={props.image}
              className="topImage"
              alt="Doorklik afbeelding"
            />
          </div>
        </div>
        <img
          src="images/logo/Spel-officieel-Transparant.png"
          alt="logo"
          className="bottomImage"
        />
      </div>
      <Footer />
    </>
  );
}

export default function Doorklik(props) {
  const mobileState = useRecoilValue(mobile);

  if (mobileState) {
    return <Mobile {...props} />;
  } else {
    return <Desktop {...props} />;
  }
}
