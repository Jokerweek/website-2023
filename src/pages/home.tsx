import ReplayIcon from "@mui/icons-material/Replay";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { Footer, Pin } from "~/components";
import { useBreakpoint } from "~/hooks";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

      <Pin
        infinite
        box={["96vw", "37.3vw", "11vw", "9vw"]}
        skew="0, 24deg"
        href="https://jw-database-code.vercel.app/"
        order={1}
      >
        <Image
          width={150}
          height={150}
          className="w-[15vw] -translate-x-[2.7vw] translate-y-[0.2vw]"
          src="/images/bg/mobielKlikvelden/Bib.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["112.5vw", "47vw", "11vw", "10.6vw"]}
        skew="0, 24deg"
        href="weekmenu"
        order={2}
      >
        <Image
          width={300}
          height={150}
          className="w-[32.4vw] -translate-x-[11vw] -translate-y-[1.9vw]"
          src="/images/bg/mobielKlikvelden/Weekmenu.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["107.5vw", "37.5vw", "11vw", "9vw"]}
        skew="0, 24deg"
        href="expo"
        order={3}
      >
        <Image
          width={220}
          height={220}
          className="w-[23vw] -translate-x-[7.5vw] -translate-y-[1.9vw]"
          src="/images/bg/mobielKlikvelden/Expo.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["101vw", "47vw", "11vw", "10.6vw"]}
        skew="0, 24deg"
        href="opdracht"
        order={4}
      >
        <Image
          width={300}
          height={150}
          className="w-[30.2vw] -translate-x-[9.5vw] -translate-y-[1.2vw]"
          src="/images/bg/mobielKlikvelden/Opdracht.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["117vw", "22vw", "11vw", "10.6vw"]}
        href="huisregels"
        order={5}
      >
        <Image
          width={300}
          height={150}
          className="w-[31vw] -translate-x-[9.5vw] -translate-y-[2vw]"
          src="/images/bg/mobielKlikvelden/Huisregels.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["128vw", "33vw", "9.1vw", "22.6vw"]}
        skew="-60deg, 24deg"
        href="lezingen"
        order={6}
      >
        <Image
          width={300}
          height={150}
          className="w-[34vw] -translate-x-[8vw] -translate-y-[8vw]"
          src="/images/bg/mobielKlikvelden/Lezingen.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["155vw", "17vw", "30vw", "30vw"]}
        skew="0deg, -35deg"
        href="randactiviteiten"
        order={7}
      >
        <Image
          width={500}
          height={150}
          className="w-[48.3vw]  -translate-x-[7vw] -translate-y-[6vw]"
          src="/images/bg/mobielKlikvelden/Randactiviteiten.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["111vw", "1vw", "7vw", "18vw"]}
        href="sponsors"
        order={8}
      >
        <Image
          width={220}
          height={150}
          className="w-[32vw] -translate-y-[3vw]"
          src="/images/bg/mobielKlikvelden/Sponsors.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["67vw", "58vw", "23vw", "10.6vw"]}
        href="radio"
        order={9}
      >
        <Image
          width={300}
          height={150}
          className="w-[27vw] -translate-x-[10.5vw] translate-y-[4vw]"
          src="/images/bg/mobielKlikvelden/Radio.png"
          alt="logo"
        />
      </Pin>
      <Pin
        infinite
        box={["135vw", "6vw", "21vw", "17.4vw"]}
        skew="0deg, -35deg"
        href="kalender"
        order={10}
      >
        <Image
          width={500}
          height={150}
          className="w-[42vw] -translate-x-[5vw] -translate-y-[6vw]"
          src="/images/bg/mobielKlikvelden/Kalender.png"
          alt="logo"
        />
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
      <div className="fixed top-0 right-0 rounded-bl-3xl bg-[white] p-1">
        <IconButton onClick={handleAnim} sx={{ color: "#a83e1d" }}>
          <ReplayIcon />
        </IconButton>
      </div>
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
        <div className="w-[100%] overflow-hidden">
          <Mobile />
        </div>
        <div className="sticky -translate-y-10 h-0 animate-arrow-home text-right text-[white]">
          <ExpandMoreIcon sx={{ height: "50px", width: "50px" }} />
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
        <div className="sticky -translate-y-10 h-0 animate-arrow-home text-right text-[white]">
          <ExpandMoreIcon sx={{ height: "50px", width: "50px" }} />
        </div>
        <Footer />
      </>
    );
  }
}
