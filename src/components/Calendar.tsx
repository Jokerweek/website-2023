import { IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const daysOfWeek = [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
];

type EventProps = {
  day: number;
  hours: [number, number] /** [start, end] **/;
  title: string;
  children?: React.ReactNode;
  href?: string;
};

// component for an event in the calendar
export function Event(props: EventProps) {
  return (
    <div
      style={{
        gridColumnStart: `${props.day}`,
        gridRowStart: `${props.hours[0] * 2 - 14}`,
        gridRowEnd: `${props.hours[1] * 2 - 14}`,
      }}
      className="bg-secondary bg-opacity-60 "
    >
      <a href={props.href}>
        <div className="relative h-full w-full bg-black-100 bg-opacity-20 p-1 text-left">
          <p>{props.title}</p>
          {props.children}
        </div>
      </a>
    </div>
  );
}

type EventLinkProps = {
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
        top: props.top ? "4px" : "unset",
        bottom: props.top ? "unset" : "4px",
        left: props.right ? "4px" : "unset",
        right: props.right ? "unset" : "4px",
      }}
    >
      <OpenInNewIcon style={{ height: "15px" }} />
    </IconButton>
  );
}

type CalendarProps = {
  children?: React.ReactNode;
};

export default function Calendar(props: CalendarProps) {
  return (
    <div className="relative h-[665px]">
      {/* fixed left column of the calendar */}
      <div className="absolute -left-[25px] grid w-[25px] grid-rows-[25px_repeat(32,_20px)] text-xs text-primary">
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
              className="row-span-full row-start-1 border-l border-dashed p-1 text-secondary"
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
