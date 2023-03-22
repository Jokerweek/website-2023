import Link from "next/link";
import { useState } from "react";

type PinProps = {
  box: string[]; // [top, left, height, width]
  href: string;
  children: React.ReactNode;
  skew?: string;
  delay?: number;
};

export default function Pin(props: PinProps) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Link
        className={`absolute z-10`}
        style={{
          top: props.box[0],
          left: props.box[1],
          height: props.box[2],
          width: props.box[3],
          transform: `skew(${props.skew || "0deg"})`,
        }}
        href={props.href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      {hover ? (
        <div
          style={{
            position: "absolute",
            top: props.box[0],
            left: props.box[1],
          }}
        >
          {props.children}
        </div>
      ) : null}
      <div
        className="animate-pop-home"
        style={{
          position: "absolute",
          top: props.box[0],
          left: props.box[1],
          animationDelay: `${props.delay || 0}s`,
          animationFillMode: "backwards",
        }}
      >
        {props.children}
      </div>
    </>
  );
}
