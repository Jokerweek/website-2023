import { useRecoilValue } from "recoil";
import mobile from "../recoil/mobile";

function Mobile() {
  return (
    <div style={{}}>
      <img
        src="/images/bgMobile.jpg"
        alt="logo"
        style={{ position: "absolute", width: "100vw" }}
      />
      <img
        src="https://funtrafic.imgix.net/catalog/product/M/G/MGA_Entertainment_20544722_2.jpg?auto=format"
        alt="logo"
        style={{
          position: "absolute",
          top: "100vw",
          left: "30vw",
          width: "20vw",
        }}
      />
      <img
        src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494654_sd.jpg"
        alt="logo"
        style={{
          position: "absolute",
          top: "43.3vw",
          left: "82vw",
          width: "10vw",
        }}
      />
    </div>
  );
}

function Desktop() {
  return (
    <div style={{}}>
      <img
        src="/images/bgDesktop.jpg"
        alt="logo"
        style={{ position: "absolute", width: "100vw" }}
      />
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
