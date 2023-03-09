import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Timer = dynamic(() => import("~/components/Timer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between bg-paper bg-contain bg-repeat p-5">
      <Image
        width={300}
        height={300}
        src="/images/logo/Spel-officieel-Transparant.png"
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
        src="/images/test_1.png"
        alt="logo"
        className="w-[300px] max-w-[60vw]"
      />
    </div>
  );
}
