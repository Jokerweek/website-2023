import WavingFlag from "@garvae/react-waving-flag";

type FlagProps = {
  score: number;
  title: string;
};

function Flag(props: FlagProps) {
  const height = props.score * 14 + 32;
  return (
    <div className="relative flex flex-col items-center gap-3">
      <div className="h-[310px] border" />
      <div className="absolute" style={{ bottom: `${height}px` }}>
        <WavingFlag
          className="translate-x-[20px] scale-x-[-1]"
          isShadow={true}
          flag="/images/logo/flag.png"
          height={30}
          width={45}
          curvature={35}
        />
      </div>

      {props.title}
    </div>
  );
}

type ScoresProps = {
  BA1: number;
  BA2: number;
  BA3: number;
  MA1: number;
  MA2: number;
};

export default function Scores(props: ScoresProps) {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid min-w-[300px] grid-cols-5">
          <Flag score={props.BA1} title="BA1" />
          <Flag score={props.BA2} title="BA2" />
          <Flag score={props.BA3} title="BA3" />
          <Flag score={props.MA1} title="MA1" />
          <Flag score={props.MA2} title="MA2" />
        </div>
      </div>
    </>
  );
}
