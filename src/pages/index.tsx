import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { SponsorsLogos } from "~/components";

const Timer = dynamic(() => import("~/components/Timer"), {
  ssr: false,
});

export default function Home() {
  function pass() {
    const safety = prompt(
      "Raadsel: Wie heeft deze website gemaakt? 🤔 [Voornaam]"
    );
    if (safety == "Philippe") {
      window.location.href = "/home";
    } else {
      alert("Fout antwoord! 😥");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-end gap-6 bg-paper bg-contain bg-repeat p-5">
      <div className="flex flex-grow flex-col items-center justify-center gap-6">
        <Image
          width={300}
          height={300}
          src="/images/logo/Spel-officieel-Transparant.png"
          alt="logo"
          className="mt-10 w-[300px] max-w-[min(60vw,_60vh)]"
        />
        <Timer deadline="2023-03-27T09:30:00+01:00">
          <Link
            className="bg-primary p-4 pb-2 font-title text-3xl tracking-widest text-secondary hover:bg-black-100 hover:shadow-lg"
            href="home"
          >
            Ga door
          </Link>
        </Timer>
      </div>

      <div className="max-w-[1200px]">
        <SponsorsLogos />
      </div>
      <button
        className="absolute top-4 right-4 border p-2 text-right text-xs shadow-lg"
        onClick={() => pass()}
      >
        Preview | 2de master 😍😎
      </button>
    </div>
  );
}
