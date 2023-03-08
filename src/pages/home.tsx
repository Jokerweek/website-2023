import Link from "next/link";
import { Footer } from "~/components";
import { useBreakpoint } from "~/hooks";
// import Footer from "../components/Footer";
// import mobile from "../recoil/mobile";

type PinProps = {
  box: string[]; // [top, left, height, width]
  href: string;
  children: string;
};

function Pin(props: PinProps) {
  return (
    <Link
      className={`absolute border`}
      style={{
        top: props.box[0],
        left: props.box[1],
        height: props.box[2],
        width: props.box[3],
      }}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}

function Mobile() {
  return (
    <div className="relative w-[100%] overflow-x-hidden">
      <img
        src="/images/bg/JW-Regard-Website-v1-MOBILE.jpg"
        alt="logo"
        className="w-screen"
      />
      <Pin box={["67vw", "51vw", "20vw", "17vw"]} href="/home">
        radio
      </Pin>
      <Pin box={["101vw", "11vw", "13vw", "23vw"]} href="/huisregels">
        huisregels
      </Pin>
      <Pin box={["117vw", "2vw", "13vw", "13vw"]} href="/sponsors">
        sponsors
      </Pin>
      <Pin box={["137vw", "5vw", "20vw", "18vw"]} href="/kalender">
        kalender
      </Pin>
      <Pin box={["152vw", "24vw", "24vw", "24vw"]} href="/randactiviteiten">
        randactiviteiten
      </Pin>
      <Pin box={["100vw", "38vw", "5vw", "7vw"]} href="/home">
        bib
      </Pin>
      <Pin box={["104vw", "48vw", "5vw", "8vw"]} href="/opdracht">
        opdracht
      </Pin>
      <Pin box={["110vw", "38vw", "5vw", "7vw"]} href="/expo">
        expo (kaart)
      </Pin>
      <Pin box={["114vw", "48vw", "5vw", "20vw"]} href="/weekmenu">
        weekmenu
      </Pin>
      <Pin box={["124vw", "30vw", "15vw", "25vw"]} href="/lezingen">
        lezingen
      </Pin>
    </div>
  );
}

function Desktop() {
  return (
    <div className="relative w-[100%] overflow-hidden">
      <img
        src="/images/bg/JW-Regard-Website-v4-PC.jpg"
        alt="logo"
        className="w-screen"
      />
      <Pin box={["1.2vw", "46vw", "14vw", "11vw"]} href="/home">
        radio
      </Pin>
      <Pin box={["44vw", "20vw", "12vw", "10vw"]} href="/huisregels">
        huisregels
      </Pin>
      <Pin box={["32.5vw", "78vw", "12vw", "12vw"]} href="/sponsors">
        sponsors
      </Pin>
      <Pin box={["51vw", "79vw", "5vw", "18vw"]} href="/home">
        home
      </Pin>
      <Pin box={["25vw", "23vw", "10vw", "15vw"]} href="/kalender">
        kalender
      </Pin>
      <Pin box={["19vw", "83vw", "12vw", "12vw"]} href="/randactiviteiten">
        randactiviteiten
      </Pin>
      <Pin box={["23vw", "39vw", "5vw", "6vw"]} href="/home">
        bib
      </Pin>
      <Pin box={["26vw", "47vw", "5vw", "6vw"]} href="/opdracht">
        opdracht
      </Pin>
      <Pin box={["30vw", "39vw", "5vw", "6vw"]} href="/expo">
        expo (kaart)
      </Pin>
      <Pin box={["33vw", "47vw", "5vw", "10vw"]} href="/weekmenu">
        weekmenu
      </Pin>
      <Pin box={["39vw", "33vw", "10vw", "20vw"]} href="/lezingen">
        lezingen
      </Pin>
    </div>
  );
}
export default function Home() {
  if (useBreakpoint()) {
    return (
      <>
        <div className="flex h-screen w-[100%] items-center overflow-hidden">
          <div className="relative -translate-y-[15vw]">
            <Mobile />
          </div>
        </div>
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
