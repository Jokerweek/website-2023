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
        gridColumnStart: `${props.day + 1}`,
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

export default function Calendar(props: any) {
  return (
    <div {...props}>
      <div className="grid w-full grid-cols-[25px_repeat(6,_1fr)] grid-rows-[25px_repeat(32,_20px)] text-xs">
        {daysOfWeek.map((day, i) => (
          <div
            className="row-span-full row-start-1 border-l border-dashed p-1"
            style={{ gridColumnStart: `${i + 2}` }}
            key={day}
          >
            <h2>{day}</h2>
          </div>
        ))}
        {[...Array(16)].map((_, i) => (
          <div
            className="col-span-full col-start-1 border-t border-dashed p-1"
            style={{ gridRowStart: `${i * 2 + 2}` }}
            key={i}
          >
            <p>{i + 8}</p>
          </div>
        ))}
        {props.children}
      </div>
    </div>
  );
}
