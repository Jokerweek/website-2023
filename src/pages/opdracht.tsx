import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { SubPage } from "~/components";
import groups from "~/components/groups.json";
// { title: [names], title: [names], ...}

type GroupProps = {
  title: string;
  names: string[];
};

function Group({ title, names }: GroupProps) {
  return (
    <div className="w-[150px] tracking-normal">
      <h3 className="ml-4 font-subTitle text-lg">{title}</h3>
      <ul className="list-inside list-square">
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Opdracht() {
  const headColumns = [
    <>
      Maandag <p className="text-sm tracking-wider">WIJK</p>
    </>,
    <>
      Dinsdag <p className="text-sm tracking-wider">PLEK</p>
    </>,
    <>
      Woensdag <p className="text-sm tracking-wider">OBJECT</p>
    </>,
    <>
      Donderdag <p className="text-sm tracking-wider">TEGENHANGER</p>
    </>,
    <>
      Vrijdag <p className="text-sm tracking-wider">SYNTHESE</p>
    </>,
  ];
  const headRows = [
    <p className="font-subTitle tracking-normal">DRAGER</p>,
    "Voormiddag",
    "Middag",
    "Namiddag",
    <p className="font-subTitle tracking-normal">REGARD</p>,
    "deadline +discussie",
    "18u: Avondlezing",
  ];

  return (
    <SubPage wide title="Opdracht" image="/images/bg/doorklik/opdracht.png">
      <Accordion
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="absolute h-12 w-full -translate-x-4 -translate-y-2 rounded-sm border border-dashed" />
          <h2 className="font-subTitle text-2xl tracking-normal text-primary">
            GROEPEN
          </h2>
        </AccordionSummary>

        <AccordionDetails className="-mx-8 flex flex-wrap justify-center gap-3">
          {Object.entries(groups).map(([title, names]) => (
            <Group key={title} title={title} names={names} />
          ))}
        </AccordionDetails>
      </Accordion>

      {/* 
      ---------------------------- 
      copy of calendar for grid
      ---------------------------- 
      */}

      <div className="relative h-[745px] w-full overflow-x-auto">
        {/* grid of the calendar */}
        <div className="mb-1 grid w-[565px] grid-cols-[75px,_repeat(5,200px)] text-xs">
          {/* background color top row  */}
          <div className="col-span-full col-start-2 row-start-1 bg-primary" />
          {/* top row */}
          {headColumns.map((day, i) => (
            <div
              className="row-span-full row-start-1 border-l border-dashed p-1 pt-3 text-center font-title text-xl tracking-widest text-secondary"
              style={{
                gridColumnStart: `${i + 2}`,
              }}
              key={i}
            >
              <h2>{day}</h2>
            </div>
          ))}
          {/* left column */}
          {headRows.map((row, i) => (
            <div
              className="col-span-full col-start-1 flex border-t border-dashed border-black-100  text-primary"
              style={{ gridRowStart: `${i + 2}` }}
              key={i}
            >
              <div className="flex w-[75px] items-center">{row}</div>
            </div>
          ))}
          {/* set of vertical lines */}
          {headColumns.slice(1).map((_, i) => (
            <div
              className="row-start-2 row-end-[9] border-l border-dashed"
              style={{ gridColumnStart: `${i + 2}`}}
              key={i}
            />
          ))}
          <div className="col-start-2 row-start-2 p-1 text-xs">
            Wie maakt de wijk?
            <br /> Wie gebruikt de wijk?
          </div>
          <div className="col-start-3 row-start-2 p-1">
            Wie maakt de plek?
            <br /> Wie gebruikt de plek?
          </div>
          <div className="col-start-4 row-start-2 p-1">
            Wie maakt het object?
            <br /> Wie gebruikt het object?
          </div>
          <div className="col-start-5 row-start-2 p-1">
            Zoek een tegenhanger, wat doet dit met de DRAGER?
          </div>
          <div className="col-start-6 row-start-2 p-1">
            Hernieuwde blik op de drager.
          </div>
          <div className="col-start-2 row-start-3 p-1">
            10u start:
            <br /> Introductie jokerweek thema en opdracht
            <p className="underline">11u: Introlezing Ciel Grommen</p>
          </div>
        </div>
      </div>
    </SubPage>
  );
}
