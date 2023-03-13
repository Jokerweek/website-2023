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

type rendererProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

type TimerProps = {
  deadline: string;
  children?: React.ReactNode;
};

export default function Timer(props: TimerProps) {
  // Renderer callback with condition
  const renderer = (data: rendererProps) => {
    if (data.completed) {
      // Render a completed state
      return props.children;
    } else {
      // Render a countdown
      return (
        <div className="flex items-end text-4xl">
          <Unit unit="Days" value={data.days} />:
          <Unit unit="Hours" value={data.hours} />:
          <Unit unit="Minutes" value={data.minutes} />:
          <Unit unit="Seconds" value={data.seconds} />
        </div>
      );
    }
  };

  return (
    <Countdown
      date={Date.parse(props.deadline)}
      renderer={renderer}
    />
  );
}
