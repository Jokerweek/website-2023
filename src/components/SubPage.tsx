import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useBreakpoint } from "~/hooks";
import Footer from "./Footer";

type SubPageProps = {
  title: string;
  image: string;
  children: React.ReactNode;
};

function Mobile(props: SubPageProps) {
  return (
    <>
      <div className="flex w-[100%] flex-col items-center gap-6 bg-paper bg-contain bg-repeat p-10">
        <IconButton
          href="/home"
          style={{ position: "fixed", top: "0px", left: "0px" }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Image
          src={props.image}
          width={300}
          height={200}
          className="max-w-[70vw]"
          alt="Doorklik afbeelding"
        />
        <h1 className="bg-primary p-4 pb-2 font-title text-3xl tracking-widest text-secondary">
          {props.title}
        </h1>
        <div className="flex justify-center">
          <div className="maw-w-[600px]">{props.children}</div>
        </div>
        <Image
          width={100}
          height={100}
          src="/images/logo/Spel-officieel-Transparant.png"
          alt="logo"
          className="max-w-[70vw]"
        />
      </div>
      <Footer />
    </>
  );
}

function Desktop(props: SubPageProps) {
  return (
    <>
      <div className="flex w-[100%] flex-col items-center gap-6 bg-paper bg-contain bg-repeat p-10">
        <IconButton
          href="/home"
          style={{ position: "fixed", top: "0px", left: "0px" }}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="flex justify-center gap-10">
          <div className="min-w-[200px]">
            <h1 className="w-min bg-primary p-4 pb-2 font-title text-3xl tracking-widest text-secondary">
              {props.title}
            </h1>
            <div className="max-w-[600px]">{props.children}</div>
          </div>
          <div>
            <Image
              width={300}
              height={200}
              src={props.image}
              className="mt-20 max-w-[70vw]"
              alt="Doorklik afbeelding"
            />
          </div>
        </div>
        <Image
          width={100}
          height={100}
          src="/images/logo/Spel-officieel-Transparant.png"
          alt="logo"
          className="w-[100px] max-w-[70vw]"
        />
      </div>
      <Footer />
    </>
  );
}

export default function SubPage(props: SubPageProps) {
  if (useBreakpoint()) {
    return <Mobile {...props} />;
  } else {
    return <Desktop {...props} />;
  }
}
