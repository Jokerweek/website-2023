import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { SponsorsLogos } from "~/components";

const Timer = dynamic(() => import("~/components/Timer"), {
  ssr: false,
});

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="flex h-screen w-screen flex-col items-center justify-between bg-paper bg-contain bg-repeat p-5">
      <Image
        width={300}
        height={300}
        src="https://users.ugent.be/~psoubrie/images/logo/Spel-officieel-Transparant.png"
        alt="logo"
        className="mt-10 w-[300px] max-w-[60vw]"
      />
      <Link
        className="bg-primary p-4 pb-2 font-title text-3xl tracking-widest text-secondary hover:bg-black-100 hover:shadow-lg"
        href="home"
      >
        Ga door
      </Link>
      <Timer />
      <Image
        width={300}
        height={200}
        src="https://users.ugent.be/~psoubrie/images/test_1.png"
        alt="logo"
        className="w-[300px] max-w-[60vw]"
      />
=======
    <div className="flex min-h-screen flex-col items-center justify-end gap-6 bg-paper bg-contain bg-repeat p-5 font-subTitle tracking-normal">
      <div className="flex flex-grow flex-col items-center justify-center gap-6">
        <Image
          width={300}
          height={300}
          src="/images/logo/Spel-officieel-Transparant.png"
          alt="logo"
          className="mt-10 w-[300px] max-w-[min(60vw,_60vh)]"
        />
        <Timer deadline="2023-03-27T09:30:00+02:00">
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
>>>>>>> 9ee5393c803e4601f1ac9256bc828af38d0dca8e
    </div>
  );
}
