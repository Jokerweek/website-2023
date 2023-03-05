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
          style={{ position: "fixed", top: "5px", left: "5px" }}
        >
          <ArrowBackIcon />
        </IconButton>

        <img src={props.image} className="topImage" />
        <a variant="contained" className="title">
          {props.title}
        </a>
        <p>{props.children}</p>
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
        <div className="">

        </div>

        <img src={props.image} className="topImage" />
        <a variant="contained" className="title">
          {props.title}
        </a>
        <p>{props.children}</p>
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
    return <Desktop {...props} />;
  } else {
    return <Desktop {...props}/>;
  }
}