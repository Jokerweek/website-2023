import Countdown from "react-countdown";

type UnitProps = {
  unit: string;
  value: number;
};

function Unit(props: UnitProps) {
  return (
    <div className="flex w-12 flex-col items-center">
      <p className="mb-1 text-xs">{props.unit}</p>
      <p className="text-4xl">{props.value}</p>
    </div>
  );
}

export default function Timer() {
  return (
    <Countdown
      date={Date.parse("2023-03-27T10:00:00+01:00")}
      renderer={(data) => (
        <div className="flex items-end text-4xl">
          <Unit unit="Days" value={data.days} />:
          <Unit unit="Hours" value={data.hours} />:
          <Unit unit="Minutes" value={data.minutes} />:
          <Unit unit="Seconds" value={data.seconds} />
        </div>
      )}
    />
  );
}
