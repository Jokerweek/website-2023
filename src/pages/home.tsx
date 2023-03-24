import Image from "next/image";
import { Footer, Pin } from "~/components";
import { useBreakpoint } from "~/hooks";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";

function Mobile() {
  return (
    <div className="relative w-[100%] overflow-x-hidden">
      <Image
        width={900}
        height={1400}
        src="/images/bg/JWMobile.png"
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
  function handleAnim() {
    const homeAnim = document.querySelectorAll(".animate-pop-home");
    homeAnim.forEach((img) => {
      img?.classList.remove("animate-pop-home");
      setTimeout(() => {
        img?.classList.add("animate-pop-home");
      }, 0);
    });
  }

  return (
    <div className="w-[100vw] overflow-hidden">
      <Image
        width={2100}
        height={1200}
        src="/images/bg/JWDesktop.png"
        alt="logo"
        className="w-screen"
      />
      <IconButton
        sx={{
          color: "white",
          position: "absolute",
          right: "0.25rem",
          top: "0.25rem",
        }}
        onClick={handleAnim}
      >
        <InfoIcon />
      </IconButton>
      <Pin
        box={["15.1vw", "39.5vw", "7.2vw", "6vw"]}
        skew="0, 24deg"
        href="https://jw-database-code.vercel.app/"
        order={1}
      >
        <Image
          width={150}
          height={150}
          className="w-[10vw] -translate-x-[1.7vw]"
          src="/images/bg/desktopKlikvelden/Bib.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["25.7vw", "46.1vw", "7.2vw", "7vw"]}
        skew="0, 24deg"
        href="weekmenu"
        order={2}
      >
        <Image
          width={300}
          height={150}
          className="w-[21.5vw] -translate-x-[7.5vw] -translate-y-[1.4vw]"
          src="/images/bg/desktopKlikvelden/Weekmenu.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["22.5vw", "39.5vw", "7.2vw", "6vw"]}
        skew="0, 24deg"
        href="expo"
        order={3}
      >
        <Image
          width={220}
          height={220}
          className="w-[15vw] -translate-x-[4.5vw] -translate-y-[1.3vw]"
          src="/images/bg/desktopKlikvelden/Expo.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["18vw", "46.1vw", "7.2vw", "7vw"]}
        skew="0, 24deg"
        href="opdracht"
        order={4}
      >
        <Image
          width={300}
          height={150}
          className="w-[20vw] -translate-x-[6.5vw] -translate-y-[0.8vw]"
          src="/images/bg/desktopKlikvelden/Opdracht.png"
          alt="logo"
        />
      </Pin>
      <Pin box={["28vw", "30vw", "7.2vw", "7vw"]} href="huisregels" order={5}>
        <Image
          width={300}
          height={150}
          className="w-[20vw] -translate-x-[6.4vw] -translate-y-[0.6vw]"
          src="/images/bg/desktopKlikvelden/Huisregels.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["36vw", "37vw", "6vw", "15vw"]}
        skew="-60deg, 24deg"
        href="lezingen"
        order={6}
      >
        <Image
          width={300}
          height={150}
          className="w-[22vw] -translate-x-[5.3vw] -translate-y-[5.8vw]"
          src="/images/bg/desktopKlikvelden/Lezingen.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["35.5vw", "65vw", "6vw", "7vw"]}
        href="randactiviteiten"
        order={7}
      >
        <Image
          width={500}
          height={150}
          className="w-[32vw]  -translate-x-[12.1vw] translate-y-[0.1vw]"
          src="/images/bg/desktopKlikvelden/Randactiviteiten.png"
          alt="logo"
        />
      </Pin>
      <Pin box={["30.5vw", "76.5vw", "6vw", "14vw"]} href="sponsors" order={8}>
        <Image
          width={220}
          height={150}
          className="w-[19vw] -translate-x-[2.5vw] translate-y-[0.1vw]"
          src="/images/bg/desktopKlikvelden/Sponsors.png"
          alt="logo"
        />
      </Pin>
      <Pin box={["0vw", "51vw", "13vw", "7vw"]} href="radio" order={9}>
        <Image
          width={300}
          height={150}
          className="w-[16.6vw] -translate-x-[5.6vw] translate-y-[0.7vw]"
          src="/images/bg/desktopKlikvelden/Radio.png"
          alt="logo"
        />
      </Pin>
      <Pin
        box={["39vw", "20vw", "14vw", "11.5vw"]}
        skew="0deg, -35deg"
        href="kalender"
        order={10}
      >
        <Image
          width={500}
          height={150}
          className="w-[27vw] -translate-x-[7vw] -translate-y-[2.9vw]"
          src="/images/bg/desktopKlikvelden/Kalender.png"
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
