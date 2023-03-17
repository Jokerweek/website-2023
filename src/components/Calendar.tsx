import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LinkIcon from "@mui/icons-material/Link";
import { IconButton } from "@mui/material";
import { useState } from "react";

const daysOfWeek = [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
];

type EventLinkProps = {
  type: "link" | "pop-up";
  top?: boolean;
  right?: boolean;
};

// component for link inside an event in the calendar
export function EventLink(props: EventLinkProps) {
  return (
    <IconButton
      style={{
        padding: "0px",
        width: "15px",
        position: "absolute",
        top: props.top ? "3px" : "unset",
        bottom: props.top ? "unset" : "3px",
        left: props.right ? "3px" : "unset",
        right: props.right ? "unset" : "3px",
      }}
    >
      {props.type === "link" ? (
        <LinkIcon sx={{ height: "12px", color: "black" }} />
      ) : props.type === "pop-up" ? (
        <FullscreenIcon sx={{ height: "12px", color: "black" }} />
      ) : null}
    </IconButton>
  );
}

type EventProps = {
  day: number;
  hours: [number, number] /** [start, end] **/;
  title: string;
  borderTop?: boolean;
  subTitle?: string;
  children?: React.ReactNode;
  href?: string;
  // EventLink props:
  type?: "link" | "pop-up" | null;
  top?: boolean;
  right?: boolean;
};

// component for an event in the calendar
export function Event(props: EventProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ display: open ? "block" : "none" }}>
        <div className="fixed top-0 left-0 h-screen w-full bg-black-100 bg-opacity-60 flex justify-center items-center z-10">
          <div className="m-5 relative bg-secondary bg-contain bg-repeat p-3 text-base max-w-[500px]">
            <div className="absolute top-1 right-1">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            {props.children || (<p className="m-6">Come back later 😁</p>)}
          </div>
        </div>
      </div>
      <div
        style={{
          gridColumnStart: `${props.day}`,
          gridRowStart: `${props.hours[0] * 2 - 14}`,
          gridRowEnd: `${props.hours[1] * 2 - 14}`,
        }}
        className="cursor-pointer bg-secondary bg-opacity-60"
        onClick={() =>
          props.type === "pop-up" && (setOpen(true), console.log("open"))
        }
      >
        <a href={props.href}>
          <div
            className="relative h-full w-full bg-black-100 bg-opacity-20 p-1 text-left"
            style={{ borderTop: props.borderTop ? "1px solid" : "unset" }}
          >
            <p className="font-subTitle tracking-normal">{props.title}</p>
            <p className="text-black-100 text-opacity-70">{props.subTitle}</p>
            {/* if type is link or popup: eventlink with link or popup, if null: nothing*/}
            {props.type === "link" ? (
              <EventLink top={props.top} right={props.right} type="link" />
            ) : props.type === "pop-up" ? (
              <EventLink top={props.top} right={props.right} type="pop-up" />
            ) : null}
          </div>
        </a>
      </div>
    </>
  );
}

type CalendarProps = {
  children?: React.ReactNode;
};

export default function Calendar(props: CalendarProps) {
  return (
    <div className="relative h-[665px]">
      {/* fixed left column of the calendar */}
      <div className="absolute -left-[25px] grid w-[25px] grid-rows-[25px_repeat(32,_20px)] font-subTitle text-xs tracking-normal text-primary">
        {[...Array<number>(16)].map((_, i) => (
          <div
            className="col-span-full col-start-1 border-t border-dashed p-1"
            style={{ gridRowStart: `${i * 2 + 2}` }}
            key={i}
          >
            <p>{i + 8}</p>
          </div>
        ))}
      </div>
      {/* scrollable calendar container */}
      <div className="test absolute w-full overflow-x-auto">
        {/* grid of the calendar */}
        <div className="grid w-[565px] grid-cols-[repeat(6,99px)] grid-rows-[25px_repeat(32,_20px)] text-xs">
          {/* background color top row  */}
          <div className="col-span-full row-start-1 bg-primary" />
          {/* days of the week | top row */}
          {daysOfWeek.map((day, i) => (
            <div
              className="row-span-full row-start-1 border-l border-dashed p-1 font-subTitle tracking-normal text-secondary"
              style={{ gridColumnStart: `${i + 1}` }}
              key={day}
            >
              <h2>{day}</h2>
            </div>
          ))}
          {/* set of horirontal lines */}
          {[...Array<number>(15)].map((_, i) => (
            <div
              className="col-span-full col-start-1 border-t border-dashed p-1"
              style={{ gridRowStart: `${i * 2 + 4}` }}
              key={i}
            />
          ))}
          {/* set of vertical lines */}
          {daysOfWeek.map((day, i) => (
            <div
              className="row-span-full row-start-2 border-l border-dashed p-1"
              style={{ gridColumnStart: `${i + 1}` }}
              key={day}
            />
          ))}
          {/* events goes here */}
          {props.children}
        </div>
      </div>
    </div>
  );
}
