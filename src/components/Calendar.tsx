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
  icon: "link" | "pop-up";
  top?: boolean;
  right?: boolean;
  iconColor?: "#a83e1d" | "#ecdecf";
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
      {props.icon === "link" ? (
        <LinkIcon
          sx={{ height: "12px", color: `${props.iconColor || "black"}` }}
        />
      ) : props.icon === "pop-up" ? (
        <FullscreenIcon
          sx={{ height: "12px", color: `${props.iconColor || "black"}` }}
        />
      ) : null}
    </IconButton>
  );
}

type EventProps = {
  column: number;
  colSpan?: number;
  hours: [number, number] /** [start, end] **/;
  children?: React.ReactNode;
  href?: string;
  // EventLink props:
  icon?: "link" | "pop-up" | null;
  iconColor?: "#a83e1d" | "#ecdecf";
  popup?: React.ReactNode;
  top?: boolean;
  right?: boolean;
};

// component for an event in the calendar
export function Event(props: EventProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ display: open ? "block" : "none" }}>
        <div className="fixed  top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-black-100 bg-opacity-60">
          <div className="relative m-5 flex max-h-[90vh] max-w-[500px] flex-col  bg-secondary bg-contain bg-repeat p-3 text-base">
            <div className="absolute top-1 right-1">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="overflow-y-scroll">
              {props.popup || <p className="m-6">Reval at 13:00 😁</p>}
            </div>
          </div>
        </div>
      </div>
      <a
        style={{
          gridColumnStart: `${props.column}`,
          gridColumnEnd: `${props.column + (props.colSpan || 1)}`,
          gridRowStart: `${props.hours[0] * 2 - 16}`,
          gridRowEnd: `${props.hours[1] * 2 - 16}`,
          cursor: props.icon === undefined ? "unset" : "pointer",
        }}
        className="relative ml-[1px] tracking-normal"
        onClick={() => props.icon === "pop-up" && setOpen(true)}
        href={props.href}
      >
        {props.children}
        {/* if icon is link or popup: eventlink with link or popup, if null: nothing*/}
        {props.icon === "link" ? (
          <EventLink
            top={props.top}
            right={props.right}
            iconColor={props.iconColor}
            icon="link"
          />
        ) : props.icon === "pop-up" ? (
          <EventLink
            top={props.top}
            right={props.right}
            iconColor={props.iconColor}
            icon="pop-up"
          />
        ) : null}
      </a>
    </>
  );
}

// ----------------------------------------------
// Calendar itself
// ----------------------------------------------

type CalendarProps = {
  children?: React.ReactNode;
};

export default function Calendar(props: CalendarProps) {
  return (
    <div className="relative h-[745px]">
      {/* fixed left column of the calendar */}
      <div className="absolute -left-[25px] grid w-[25px] grid-rows-[40px_repeat(35,_20px)] font-subTitle text-xs tracking-normal text-primary">
        {[...Array<number>(18)].map((_, i) => (
          <div
            className="col-start-1 -m-[1px] border-y border-dashed border-primary border-t-black-100 p-1"
            style={{ gridRowStart: `${i * 2 + 2}` }}
            key={i}
          >
            <p>{("0" + ((i + 9) % 24).toString()).slice(-2)}</p>
          </div>
        ))}
        <div
          className="col-span-full col-start-1 -m-[1px]  border-b border-dashed border-secondary p-1"
          style={{ gridRowStart: "36" }}
        />

        <div className="col-start-1 row-span-full row-start-2 -mr-[1px] border-r border-dashed border-black-100" />
      </div>

      {/* scrollable calendar container */}
      <div className="absolute w-full overflow-x-auto">
        {/* grid of the calendar */}
        <div className="mb-1 grid w-[565px] grid-cols-[repeat(11,130px)] grid-rows-[40px_repeat(35,_20px)] text-xs">
          {/* background color top row  */}
          <div className="col-span-full row-start-1 bg-primary" />
          {/* days of the week | top row */}
          {daysOfWeek.map((day, i) => (
            <div
              className="row-start-1 flex items-center justify-center border-l border-dashed p-1 pt-3 font-title text-xl tracking-widest text-secondary"
              style={{
                gridColumnStart: `${i * 2}`,
                gridColumnEnd: `${i * 2 + 2}`,
              }}
              key={day}
            >
              <h2>{day}</h2>
            </div>
          ))}
          {/* set of horirontal lines */}
          {[...Array<number>(17)].map((_, i) => (
            <div
              className="col-span-full col-start-1 border-y border-dashed border-t-primary p-1"
              style={{ gridRowStart: `${i * 2 + 3}` }}
              key={i}
            />
          ))}
          {/* set of vertical lines */}
          {daysOfWeek.slice(1).map((day, i) => (
            <div
              className="row-span-full row-start-2 border-x border-dashed border-r-primary p-1"
              style={{ gridColumnStart: `${(i + 1) * 2}` }}
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
