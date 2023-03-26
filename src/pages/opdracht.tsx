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
      Maandag <p className="font-subTitle text-[0.8rem] tracking-wide">WIJK</p>
    </>,
    <>
      Dinsdag <p className="font-subTitle text-[0.8rem] tracking-wide">PLEK</p>
    </>,
    <>
      Woensdag{" "}
      <p className="font-subTitle text-[0.8rem] tracking-wide">OBJECT</p>
    </>,
    <>
      Donderdag{" "}
      <p className="font-subTitle text-[0.8rem] tracking-wide">TEGENHANGER</p>
    </>,
    <>
      Vrijdag{" "}
      <p className="font-subTitle text-[0.8rem] tracking-wide">SYNTHESE</p>
    </>,
  ];
  const headRows = [
    <>
      <p className="ml-2 font-subTitle tracking-normal">DRAGER</p>
    </>,
    "Voormiddag",
    "Middag",
    "Namiddag",
    <>
      <p className="ml-2 font-subTitle tracking-normal">REGARD</p>
    </>,
    "deadline +discussie",
    "18u: Avondlezing",
  ];

  return (
    <SubPage
      wide
      title="Opdracht"
      image="/images/bg/doorklik/opdracht.png"
      maxWidth="1175px"
    >
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
      <div className="h-6" />
      <div className="relative w-full overflow-x-auto">
        {/* grid of the calendar */}
        <div className="mb-1 grid grid-cols-[75px,_repeat(5,220px)] text-xs">
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
          {[...Array<number>(6)].slice(1).map((_, i) => (
            <div
              className="row-start-2 row-end-[9] border-l border-dashed"
              style={{ gridColumnStart: `${i + 2}` }}
              key={i}
            />
          ))}
          <div className="col-start-2 row-start-2 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Wie maakt de wijk?
            <br /> Wie gebruikt de wijk?
          </div>
          <div className="col-start-3 row-start-2 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Wie maakt de plek?
            <br /> Wie gebruikt de plek?
          </div>
          <div className="col-start-4 row-start-2 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Wie maakt het object?
            <br /> Wie gebruikt het object?
          </div>
          <div className="col-start-5 row-start-2 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Zoek een tegenhanger, wat doet dit met de DRAGER?
          </div>
          <div className="col-start-6 row-start-2 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Hernieuwde blik op de drager.
          </div>
          <div className="col-span-full row-start-2 bg-black-100 opacity-10" />

          <div className="col-start-2 row-start-3 flex flex-col justify-center p-1">
            10u start:
            <br /> Introductie jokerweek thema en opdracht
            <br /> <br />
            <p className="font-subTitle tracking-normal">
              11u: Introlezing Ciel Grommen
            </p>
          </div>
          <div className="col-start-3 row-start-3 flex flex-col justify-center p-1">
            10u start:
            <br /> iedere groep krijgt tags toegewezen uit de bib
            <br /> <br />
            inlezen + gesprek binnen de weekgroep
          </div>
          <div className="col-start-4 row-start-3 flex flex-col justify-center p-1">
            10u start:
            <br /> iedere groep krijgt tags toegewezen uit de bib
            <br /> <br />
            inlezen + gesprek binnen de weekgroep
          </div>
          <div className="col-start-5 row-start-3 flex flex-col justify-center p-1">
            10u start:
            <br /> iedere groep krijgt tags toegewezen uit de bib
            <br /> <br />
            inlezen + gesprek binnen de weekgroep zoektocht naar tegenhanger
          </div>
          <div className="col-start-6 row-start-3 flex flex-col justify-center p-1">
            10u start:
            <br /> Vormen van een synthese van de afgelopen week
            <br /> <br />
            Uitwerking finale output
          </div>

          <div className="col-start-3 row-start-4 flex flex-col justify-center p-1 font-subTitle tracking-normal">
            13u - 14u:
            <br />
            PANELGESPREK koloniaal erfgoed
          </div>
          <div className="col-start-4 row-start-4 flex flex-col justify-center p-1 font-subTitle tracking-normal">
            13u - 14u:
            <br />
            PANELGESPREK gender in architectuur
          </div>
          <div className="col-start-5 row-start-4 flex flex-col justify-center p-1 font-subTitle tracking-normal">
            13u - 14u:
            <br />
            Participatie - event rond Plateau
            <br /> 1 afgevaardigde per groep
          </div>

          <div className="col-start-2 row-start-5 flex flex-col justify-center p-1">
            Toewijzing puzzelstuk per weekgroep
            <br /> <br />
            Locatie puzzelstuk leren kennen aan de hand van bezoek aan site en
            de wijkpodcast, Gent Gemapt en de bibliotheek
          </div>
          <div className="col-start-3 row-start-5 flex flex-col justify-center p-1">
            Tweede sitebezoek
            <br /> <br />
            Iedere weekgroep gaat op zoek naar een “plek” binnen de site
          </div>
          <div className="col-start-4 row-start-5 flex flex-col justify-center p-1">
            iedere weekgroep gaat op zoek naar een “object” binnen de site
          </div>
          <div className="col-start-5 row-start-5 flex flex-col justify-center p-1">
            Iedere weekgroep gaat op zoek naar een “tegenhanger” voor het
            gekozen object/plek of de wijk.
            <br /> <br />
            De tegenhanger kan eender waar in de wereld gevonden worden en
            verruimt de context waarover we nadenken.
          </div>
          <div className="col-start-6 row-start-5 flex flex-col justify-center p-1">
            Afwerken van output
            <br /> + samenleggen van alle puzzelstukken
          </div>

          <div className="col-start-2 row-start-6 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Wat is jullie blik op de wijk?
          </div>
          <div className="col-start-3 row-start-6 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Wat is jullie blik op de plek?
          </div>
          <div className="col-start-4 row-start-6 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Wat is jullie blik op het object?
          </div>
          <div className="col-start-5 row-start-6 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Hoe verandert jullie blik?
          </div>
          <div className="col-start-6 row-start-6 flex flex-col justify-center p-2 text-center font-subTitle tracking-normal">
            Hernieuwde blik op de drager
          </div>
          <div className="col-span-full row-start-6 bg-black-100 opacity-10" />

          <div className="col-start-2 row-start-7 flex flex-col justify-center p-1">
            Wat is jullie blik op de wijk en welke eerste bedenkingen komen
            daarbij naar boven?
            <br /> <br />
            16u:
            <br /> Discussie met zustergroep
            <br /> Groep confronteren met blik van de zustergroep
            <br /> <br />
            17u:
            <br /> Samenleggen alle puzzelstukken + bespreken
          </div>
          <div className="col-start-3 row-start-7 flex flex-col justify-center p-1">
            Wat is het conflict op bovenstaande vragen en hoe kunnen jullie dit
            in beeld brengen op het puzzelstuk? Is jullie blik op het fragment
            veranderd en wat droeg hiertoe bij?
            <br /> <br />
            16u:
            <br /> Discussie met zustergroep
            <br /> Groep confronteren met blik van de zustergroep
            <br /> <br />
            17u:
            <br /> Samenleggen alle puzzelstukken + bespreken
          </div>
          <div className="col-start-4 row-start-7 flex flex-col justify-center p-1">
            Wat is het conflict op bovenstaande vragen en hoe kunnen jullie dit
            in beeld brengen op het puzzelstuk? Is jullie blik op het fragment
            veranderd en wat droeg hiertoe bij?
            <br /> <br />
            16u:
            <br /> Discussie met zustergroep
            <br /> Groep confronteren met blik van de zustergroep
            <br /> <br />
            17u:
            <br /> Samenleggen alle puzzelstukken + bespreken
          </div>
          <div className="col-start-5 row-start-7 flex flex-col justify-center p-1">
            Hoe verandert de tegenhanger de blik op wat ontstaat er?
            <br /> <br />
            16u:
            <br /> Discussie met zustergroep
            <br /> Groep confronteren met blik van de zustergroep
            <br /> <br />
            17u:
            <br /> Samenleggen alle puzzelstukken + bespreken
          </div>
          <div className="col-start-6 row-start-7 flex flex-col justify-center p-1">
            Samenleggen van alle puzzelstukken Nieuwe lezing kaart Gent
            <br /> <br />
            15u:
            <br /> Samenleggen alle puzzelstukken + bespreken
          </div>

          <div className="col-start-2 row-start-[8] flex flex-col justify-center p-1 font-subTitle tracking-normal">
            Lezing Tina De Ghent
          </div>
          <div className="col-start-3 row-start-[8] flex flex-col justify-center p-1 font-subTitle tracking-normal">
            Lezing Samia Henni
          </div>
          <div className="col-start-4 row-start-[8] flex flex-col justify-center p-1 font-subTitle tracking-normal">
            Lezing Appoline Vranken
          </div>
          <div className="col-start-5 row-start-[8] flex flex-col justify-center p-1 font-subTitle tracking-normal">
            Debat Ruth Soenen
          </div>
          <div className="col-start-6 row-start-[8] flex flex-col justify-center p-1">
            16u: Einddebat
            <p className="font-subTitle tracking-normal">
              Annelies de smet/ Elly Van Eeghem /Anne Kockelkorn/ Laure
              Machtelinckx
            </p>
            <br /> + reflectie op de week en onderwijs
            <br /> + eindtentoonstelling
          </div>
        </div>
      </div>
    </SubPage>
  );
}
