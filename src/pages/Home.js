import { useRecoilValue } from "recoil";
import Footer from "../components/Footer";
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
      <a
        style={{
          position: "absolute",
          top: "114vw",
          left: "48vw",
          border: "1px solid blue",
          color: "white",
          background: "red",
          width: "20vw",
          height: "5vw",
        }}
        href="/weekmenu"
      >
        weekmenu
      </a>
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
    <div style={{ width: "100%", overflowX: "hidden", position: "relative" }}>
      <img
        src="/images/bg/JW-Regard-Website-v4-PC.jpg"
        alt="logo"
        style={{ width: "100vw" }}
      />
      <div
        style={{
          position: "absolute",
          top: "1.2vw",
          left: "46vw",
          border: "1px solid blue",
          color: "blue",
          width: "11vw",
          height: "14vw",
        }}
      >
        radio
      </div>
      <div
        style={{
          position: "absolute",
          top: "44vw",
          left: "20vw",
          border: "1px solid blue",
          color: "blue",
          width: "10vw",
          height: "12vw",
        }}
      >
        huisregels
      </div>
      <div
        style={{
          position: "absolute",
          top: "32.5vw",
          left: "78vw",
          border: "1px solid blue",
          color: "blue",
          width: "12vw",
          height: "12vw",
        }}
      >
        sponsors
      </div>
      <div
        style={{
          position: "absolute",
          top: "51vw",
          left: "79vw",
          border: "1px solid blue",
          color: "blue",
          width: "18vw",
          height: "5vw",
        }}
      >
        technische hulp
      </div>
      <div
        style={{
          position: "absolute",
          top: "25vw",
          left: "23vw",
          border: "1px solid blue",
          color: "blue",
          width: "15vw",
          height: "10vw",
        }}
      >
        kalender
      </div>
      <div
        style={{
          position: "absolute",
          top: "19vw",
          left: "83vw",
          border: "1px solid blue",
          color: "blue",
          width: "12vw",
          height: "12vw",
        }}
      >
        randactiviteiten
      </div>
      <div
        style={{
          position: "absolute",
          top: "23vw",
          left: "39vw",
          border: "1px solid blue",
          color: "blue",
          width: "6vw",
          height: "5vw",
        }}
      >
        bib
      </div>
      <div
        style={{
          position: "absolute",
          top: "26vw",
          left: "47vw",
          border: "1px solid blue",
          color: "blue",
          width: "6vw",
          height: "5vw",
        }}
      >
        opdracht
      </div>
      <div
        style={{
          position: "absolute",
          top: "30vw",
          left: "39vw",
          border: "1px solid blue",
          color: "blue",
          width: "6vw",
          height: "5vw",
        }}
      >
        expo (kaart)
      </div>
      <a
        style={{
          position: "absolute",
          top: "33vw",
          left: "47vw",
          border: "1px solid blue",
          color: "white",
          background: "red",
          width: "10vw",
          height: "5vw",
        }}
        href="/weekmenu"
      >
        weekmenu
      </a>
      <div
        style={{
          position: "absolute",
          top: "39vw",
          left: "33vw",
          border: "1px solid blue",
          color: "blue",
          width: "20vw",
          height: "10vw",
        }}
      >
        lezingen
      </div>
    </div>
  );
}
export default function Home() {
  const mobileState = useRecoilValue(mobile);

  if (mobileState) {
    return (
      <>
        <Mobile />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Desktop />
        <Footer />
      </>
    );
  }
}
