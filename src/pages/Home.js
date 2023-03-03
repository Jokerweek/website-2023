import { height } from "@mui/system";
import { useRecoilValue } from "recoil";
import mobile from "../recoil/mobile";

function Mobile() {
  return (
    <div style={{ width: "100%", overflowX: "hidden", position: "relative" }}>
      <img
        src="/images/bg/JW-Regard-Website-v1-MOBILE.jpg"
        alt="logo"
        style={{ width: "100vw" }}
      />
      <div
        style={{
          position: "absolute",
          top: "67vw",
          left: "51vw",
          border: "1px solid blue",
          color: "blue",
          width: "17vw",
          height: "20vw",
        }}
      >
        radio
      </div>
      <div
        style={{
          position: "absolute",
          top: "101vw",
          left: "11vw",
          border: "1px solid blue",
          color: "blue",
          width: "23vw",
          height: "13vw",
        }}
      >
        huisregels
      </div>
      <div
        style={{
          position: "absolute",
          top: "117vw",
          left: "2vw",
          border: "1px solid blue",
          color: "blue",
          width: "13vw",
          height: "13vw",
        }}
      >
        sponsors
      </div>
      <div
        style={{
          position: "absolute",
          top: "137vw",
          left: "5vw",
          border: "1px solid blue",
          color: "blue",
          width: "18vw",
          height: "20vw",
        }}
      >
        kalender
      </div>
      <div
        style={{
          position: "absolute",
          top: "152vw",
          left: "24vw",
          border: "1px solid blue",
          color: "blue",
          width: "24vw",
          height: "24vw",
        }}
      >
        randactiviteiten
      </div>
      <div
        style={{
          position: "absolute",
          top: "100vw",
          left: "38vw",
          border: "1px solid blue",
          color: "blue",
          width: "7vw",
          height: "5vw",
        }}
      >
        bib
      </div>
      <div
        style={{
          position: "absolute",
          top: "104vw",
          left: "48vw",
          border: "1px solid blue",
          color: "blue",
          width: "8vw",
          height: "5vw",
        }}
      >
        opdracht
      </div>
      <div
        style={{
          position: "absolute",
          top: "110vw",
          left: "38vw",
          border: "1px solid blue",
          color: "blue",
          width: "7vw",
          height: "5vw",
        }}
      >
        expo (kaart)
      </div>
      <div
        style={{
          position: "absolute",
          top: "114vw",
          left: "48vw",
          border: "1px solid blue",
          color: "blue",
          width: "8vw",
          height: "5vw",
        }}
      >
        weekmenu
      </div>
      <div
        style={{
          position: "absolute",
          top: "124vw",
          left: "30vw",
          border: "1px solid blue",
          color: "blue",
          width: "25vw",
          height: "15vw",
        }}
      >
        lezingen
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <img src="/images/bgDesktop.jpg" alt="logo" style={{ width: "100vw" }} />
      <img
        src="https://funtrafic.imgix.net/catalog/product/M/G/MGA_Entertainment_20544722_2.jpg?auto=format"
        alt="logo"
        style={{
          position: "absolute",
          top: "45vw",
          left: "10vw",
          width: "20vw",
        }}
      />
      <img
        src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494654_sd.jpg"
        alt="logo"
        style={{
          position: "absolute",
          top: "20vw",
          left: "70vw",
          width: "20vw",
        }}
      />
    </div>
  );
}

export default function Home() {
  const mobileState = useRecoilValue(mobile);

  if (mobileState) {
    return <Mobile />;
  } else {
    return <Desktop />;
  }
}
