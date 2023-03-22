import Image from "next/image";
import Link from "next/link";
import { Footer } from "~/components";
import { useBreakpoint } from "~/hooks";
// import Footer from "../components/Footer";
// import mobile from "../recoil/mobile";

type PinProps = {
  box: string[]; // [top, left, height, width]
  href: string;
  children: React.ReactNode;
  skew?: string;
};

function Pin(props: PinProps) {
  return (
    <>
      <Link
        className={`absolute z-10 border border-primary`}
        style={{
          top: props.box[0],
          left: props.box[1],
          height: props.box[2],
          width: props.box[3],
          transform: `skew(${props.skew || "0deg"})`,
        }}
        href={props.href}
      />
      <div
        style={{
          position: "absolute",
          top: props.box[0],
          left: props.box[1],
        }}
      >
        {props.children}
      </div>
    </>
  );
}

function Mobile() {
  return (
    <div className="relative w-[100%] overflow-x-hidden">
      <Image
        width={720}
        height={1280}
        src="/images/bg/JW Website MOBILE 21.03.png"
        alt="logo"
        className="w-screen"
      />
      <Pin box={["67vw", "51vw", "20vw", "17vw"]} href="home">
        radio
      </Pin>
      <Pin box={["101vw", "11vw", "13vw", "23vw"]} href="huisregels">
        huisregels
      </Pin>
      <Pin box={["117vw", "2vw", "13vw", "13vw"]} href="sponsors">
        sponsors
      </Pin>
      <Pin box={["137vw", "5vw", "20vw", "18vw"]} href="kalender">
        kalender
      </Pin>
      <Pin box={["152vw", "24vw", "24vw", "24vw"]} href="randactiviteiten">
        randactiviteiten
      </Pin>
      <Pin
        box={["100vw", "38vw", "5vw", "7vw"]}
        href="https://jw-database-code.vercel.app/"
      >
        bib
      </Pin>
      <Pin box={["104vw", "48vw", "5vw", "8vw"]} href="opdracht">
        opdracht
      </Pin>
      <Pin box={["110vw", "38vw", "5vw", "7vw"]} href="expo">
        expo (kaart)
      </Pin>
      <Pin box={["114vw", "48vw", "5vw", "20vw"]} href="weekmenu">
        weekmenu
      </Pin>
      <Pin box={["124vw", "30vw", "15vw", "25vw"]} href="lezingen">
        lezingen
      </Pin>
    </div>
  );
}

function Desktop() {
  return (
    <div className="w-[100vw] overflow-hidden">
      <Image
        width={1920}
        height={1080}
        src="/images/bg/JW Website Desktop 21.03.png"
        alt="logo"
        className="w-screen"
      />
      <Pin
        box={["15.1vw", "39.5vw", "7.2vw", "6vw"]}
        skew="0, 24deg"
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={100}
          height={100}
          className="w-[10vw] -translate-x-[1.7vw]"
          src="/images/bg/desktop-klikvelden/bib.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["25.7vw", "46.1vw", "7.2vw", "7vw"]}
        skew="0, 24deg"
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={220}
          height={100}
          className="w-[21.5vw] -translate-x-[7.5vw] -translate-y-[1.4vw]"
          src="/images/bg/desktop-klikvelden/weekmenu.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["22.5vw", "39.5vw", "7.2vw", "6vw"]}
        skew="0, 24deg"
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={150}
          height={100}
          className="w-[15vw] -translate-x-[4.5vw] -translate-y-[1.3vw]"
          src="/images/bg/desktop-klikvelden/expo.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["18vw", "46.1vw", "7.2vw", "7vw"]}
        skew="0, 24deg"
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={220}
          height={100}
          className="w-[20vw] -translate-x-[6.5vw] -translate-y-[0.8vw]"
          src="/images/bg/desktop-klikvelden/opdracht.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["28vw", "30vw", "7.2vw", "7vw"]}
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={220}
          height={100}
          className="w-[20vw] -translate-x-[6.4vw] -translate-y-[0.6vw]"
          src="/images/bg/desktop-klikvelden/huisregels.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["36vw", "37vw", "6vw", "15vw"]}
        skew="-60deg, 24deg"
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={220}
          height={100}
          className="w-[22vw] -translate-x-[5.3vw] -translate-y-[5.8vw]"
          src="/images/bg/desktop-klikvelden/lezingen.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["35.5vw", "65vw", "6vw", "7vw"]}
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={350}
          height={100}
          className="w-[32vw]  -translate-x-[12.1vw] translate-y-[0.1vw]"
          src="/images/bg/desktop-klikvelden/randactiviteiten.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["30.5vw", "76.5vw", "6vw", "14vw"]}
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={200}
          height={100}
          className="w-[19vw] -translate-x-[2.5vw] translate-y-[0.1vw]"
          src="/images/bg/desktop-klikvelden/sponsors.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["0vw", "51vw", "13vw", "7vw"]}
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={180}
          height={200}
          className="w-[16.6vw] -translate-x-[5.6vw] translate-y-[0.7vw]"
          src="/images/bg/desktop-klikvelden/radio.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["39vw", "20vw", "14vw", "11.5vw"]}
        skew="0deg, -35deg"
        href="https://jw-database-code.vercel.app/"
      >
        <Image
          width={300}
          height={100}
          className="w-[27vw] -translate-x-[7vw] -translate-y-[2.9vw]"
          src="/images/bg/desktop-klikvelden/kalender.png"
          alt="logo"
        />
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
        <div className="overflow-hidden">
          <Desktop />
        </div>

        <Footer />
      </>
    );
  }
}
