import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useBreakpoint } from "~/hooks";
import Footer from "./Footer";

type SubPageProps = {
  title: string;
  image: string;
  children: React.ReactNode;
  back?: string;
};

// mobile layout for subpages
function Mobile(props: SubPageProps) {
  const { back = "home" } = props;
  return (
    <>
      {/* baground image | horizontal centering of everything */}
      <div className="flex w-[100%] flex-col items-center gap-6 bg-paper bg-contain bg-repeat p-10">
        <IconButton
          href={back}
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
        {/* responsive div for content */}
        <div className="w-full max-w-[600px] text-sm">{props.children}</div>
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

// desktop layout for subpages
function Desktop(props: SubPageProps) {
  return (
    <>
      {/* baground image*/}
      <div className="w-[100%] bg-paper bg-contain bg-repeat p-10">
        <IconButton
          href="home"
          style={{ position: "fixed", top: "0px", left: "0px" }}
        >
          <ArrowBackIcon />
        </IconButton>
        {/* responsive horizontal layout */}
        <div className="flex justify-center gap-10">
          {/* responsive vertical column for content */}
          <div className="min-w-[200px] max-w-[600px] flex-grow">
            <div className="w-min bg-primary">
              <h1 className="w-max p-4 pb-2 font-title text-3xl tracking-widest text-secondary">
                {props.title}
              </h1>
            </div>
            <div className="mt-6 text-base">{props.children}</div>
          </div>
          {/* vertical column for image */}
          <div>
            {" "}
            {/* for maintaining proportions */}
            <Image
              width={300}
              height={200}
              src={props.image}
              className="mt-20 max-w-[70vw]"
              alt="Doorklik afbeelding"
            />
          </div>
        </div>
        {/* horizontal alignment logo */}
        <div className="mt-6 flex justify-center">
          {" "}
          <Image
            width={100}
            height={100}
            src="/images/logo/Spel-officieel-Transparant.png"
            alt="logo"
            className="w-[100px] max-w-[70vw]"
          />
        </div>
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
