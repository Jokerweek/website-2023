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
};

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
      <div className="relative h-full bg-black-100 bg-opacity-20 p-1">
        <p>{props.title}</p>
        {props.children}
      </div>
    </div>
  );
}

type EventLinkProps = {
  href: string;
  top?: boolean;
  right?: boolean;
};

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
      href={props.href}
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
      <div className="absolute grid w-[25px] grid-rows-[25px_repeat(32,_20px)] text-xs text-primary -left-[25px]">
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
      <div className="test absolute w-full overflow-x-auto">
        <div className="grid w-[565px] grid-cols-[repeat(6,99px)] grid-rows-[25px_repeat(32,_20px)] text-xs">
          <div className="col-span-full row-start-1 bg-primary" />
          {daysOfWeek.map((day, i) => (
            <div
              className="row-span-full row-start-1 border-l border-dashed p-1 text-secondary"
              style={{ gridColumnStart: `${i + 1}` }}
              key={day}
            >
              <h2>{day}</h2>
            </div>
          ))}
          {[...Array<number>(15)].map((_, i) => (
            <div
              className="col-span-full col-start-1 border-t border-dashed p-1"
              style={{ gridRowStart: `${i * 2 + 4}` }}
              key={i}
            />
          ))}
          {daysOfWeek.map((day, i) => (
            <div
              className="row-span-full row-start-2 border-l border-dashed p-1"
              style={{ gridColumnStart: `${i + 1}` }}
              key={day}
            />
          ))}

          {props.children}
        </div>
      </div>
    </div>
  );
}
