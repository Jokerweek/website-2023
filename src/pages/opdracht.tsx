import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { EventLink, SubPage } from "~/components";
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
<<<<<<< HEAD
    <SubPage title="Opdracht" image="https://users.ugent.be/~psoubrie/images/test_1.png">
      <h2 className="text-2xl mt-5 text-primary">TEST</h2>
      Ut sint incididunt tempor Lorem cupidatat laborum elit eu qui elit ea id.
=======
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

          <a
            href="lezingen"
            className="relative col-start-2 row-start-3 flex flex-col justify-center p-1"
          >
            10u start:
            <br /> Introductie jokerweek thema en opdracht
            <br /> <br />
            <p className="font-subTitle tracking-normal">
              11u: Introlezing Ciel Grommen
            </p>
            <EventLink icon="link" />
          </a>
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

          <a
            href="lezingen"
            className="relative col-start-3 row-start-4 flex flex-col justify-center p-1 font-subTitle tracking-normal"
          >
            13u - 14u:
            <br />
            PANELGESPREK koloniaal erfgoed
            <EventLink icon="link" top />
          </a>
          <a
            href="lezingen"
            className="relative col-start-4 row-start-4 flex flex-col justify-center p-1 font-subTitle tracking-normal"
          >
            13u - 14u:
            <br />
            PANELGESPREK gender in architectuur
            <EventLink icon="link" top />
          </a>
          <a
            href="lezingen"
            className="relative col-start-5 row-start-4 flex flex-col justify-center p-1 font-subTitle tracking-normal"
          >
            13u - 14u:
            <br />
            Participatie - event rond Plateau
            <br /> 1 afgevaardigde per groep
            <EventLink icon="link" top />
          </a>

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

          <a
            href="lezingen"
            className="relative col-start-2 row-start-[8] flex flex-col justify-center p-1 font-subTitle tracking-normal"
          >
            Lezing Tina De Ghent
            <EventLink icon="link" />
          </a>
          <a
            href="lezingen"
            className="relative col-start-3 row-start-[8] flex flex-col justify-center p-1 font-subTitle tracking-normal"
          >
            Lezing Samia Henni
            <EventLink icon="link" />
          </a>
          <a
            href="lezingen"
            className="relative col-start-4 row-start-[8] flex flex-col justify-center p-1 font-subTitle tracking-normal"
          >
            Lezing Appoline Vranken
            <EventLink icon="link" />
          </a>
          <a
            href="lezingen"
            className="relative col-start-5 row-start-[8] flex flex-col justify-center p-1 font-subTitle tracking-normal"
          >
            Debat Ruth Soenen
            <EventLink icon="link" />
          </a>
          <a
            href="lezingen"
            className="relative col-start-6 row-start-[8] flex flex-col justify-center p-1"
          >
            16u: Einddebat
            <p className="font-subTitle tracking-normal">
              Annelies de smet/ Elly Van Eeghem /Anne Kockelkorn/ Laure
              Machtelinckx
            </p>
            <br /> + reflectie op de week en onderwijs
            <br /> + eindtentoonstelling
            <EventLink icon="link" />
          </a>
        </div>
      </div>

      {/* 
      ---------------------------- 
      opdracht tekst
      ---------------------------- 
      */}

      <div className="h-6" />
      <Accordion
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="absolute h-12 w-full -translate-x-4 -translate-y-2 rounded-sm border border-dashed" />
          <h2 className="font-subTitle text-2xl tracking-normal text-primary">
            OPDRACHT
          </h2>
        </AccordionSummary>

        <AccordionDetails className="-mx-4 -mt-4 p-2">
          <h3 className="mt-3 font-subTitle text-xl tracking-normal">DRAGER</h3>
          Elke groep studenten krijgt een stadsfragment of ‘puzzelstuk’ op de
          kaart van Gent toegewezen. Dit puzzelstuk is deel van de grote drager
          en output van de Jokerweek. De groepsindeling vinden jullie{" "}
          <a
            href="#"
            className="font font-subTitle tracking-normal underline underline-offset-2"
          >
            hier boven
          </a>{" "}
          terug. Let op, de groepsindeling is licht bijgesteld ten opzichte van
          de inschrijvingslijsten.
          <br />
          <br /> De drager volgt de afbakeningen van buurten en wijken zoals
          deze historisch vastgelegd zijn. Elk puzzelstuk behoort dus tot een
          specifieke wijk die de context vormt van het onderzoek. In het
          Duivelsteen liggen de puzzelstukken gegroepeerd per wijk als een
          doorwaadbaar geheel. De stad werd hiervoor verschaald tot 1:1000, wat
          puzzelstukken oplevert met een diameter van 50 cm. Waar het
          stadsfragment zich op de kaart van Gent bevindt, kunnen jullie
          bekijken via de{"  "}
          <a
            href="expo"
            className="font font-subTitle tracking-normal underline underline-offset-2"
          >
            kaart
          </a>{" "}
          .
          <br />
          <br /> Elke wijk heeft een gedeeld puzzelstuk uit kurk. Dit puzzelstuk
          bevat elke dag de nodige communicatie voor de hele wijk: de tags
          waarop men zal werken, relevante literatuur of personen, de
          vakgroepleden die aansluiten etc. Dit puzzelstuk dient ook als
          communicatietool voor de groepen van die wijk onderling. Gebruik het
          prikbord om jullie bevindingen over de wijk, interessante quotes etc.
          doorheen de week te delen. Kom af en toe kijken naar de kaart om het
          steeds veranderende geheel te aanschouwen. De puzzelstukken blijven
          steeds in het Duivelsteen.
          <br />
          <br /> De hele week zal jullie puzzelstuk de drager vormen. Laat het
          een collage worden van de belangrijkste info die de groepen tijdens
          deze week verzamelen, de kern van jullie gesprekken bundelt en jullie
          enthousiasme weerspiegelt. Maak er vooral jullie eigen ding van,
          binnen de afbakening van het aan jullie toegewezen stadsdeel staat het
          format van de output volledig vrij. Het is vanzelfsprekend dat jullie
          dagelijks informatie zullen toevoegen, maar ook weghalen om zo tot een
          gelaagd geheel te komen.
          <br />
          <br /> De evolutie in de kaart wordt aangestuurd door de focus elke
          dag te verleggen. De opdracht is opgedeeld in 5 fases, 5 schalen die
          met de dagen van de week zullen veranderen.
          <br />
          <br /> Er zijn een aantal centrale vragen waarmee we deze week op pad
          gaan.
          <br /> “Wie maakt de stad / Wie gebruikt de stad?”
          <br /> Ze verwijzen naar de relaties tussen eigenaar, opdrachtgever,
          ontwerper en gebruiker en de mogelijke conflicten die binnen deze
          relaties kunnen ontstaan. Elke dag zullen deze vragen lichtjes
          geherformuleerd worden, wat zo ook de blik op het eigen fragment mee
          doet verschuiven.
          <br /> De drager is dus het kaartstuk waarop de dagelijkse twijfels en
          inzichten geprojecteerd worden.
          <br />
          <br /> Zo zal zowel de eigen ‘regard’ als de ‘drager’
          transformeren/verschuiven doorheen de week, door een bewustwording van
          onze eigen positie enerzijds en door de dagelijkse evolutie van de
          drager anderzijds.
          <h3 className="mt-6 font-subTitle text-xl tracking-normal">
            Maandag – WIJK
          </h3>
          <p className="italic tracking-normal">
            Wie maakt de wijk? Wie gebruikt de wijk?
          </p>
          De eerste dag van de Jokerweek lokaliseert elke groep hun puzzelstuk
          in de wijk. Een locatiebezoek lijkt een aangewezen eerste stap in het
          vormen van een blik op het stadsfragment. Beluister de{" "}
          <a
            href="https://open.spotify.com/show/4OaHqCs48YczQCkn1VdwQ9"
            className="font font-subTitle tracking-normal underline underline-offset-2"
          >
            podcast
          </a>{" "}
          die wij opgenomen hebben over jullie wijk. Ook{" "}
          <a
            href="https://kaart.gentgemapt.be/"
            className="font font-subTitle tracking-normal underline underline-offset-2"
          >
            Gent Gemapt
          </a>{" "}
          is op deze eerste dag een handige tool. Dit platform bundelt een
          enorme hoeveelheid archiefdocumenten over het erfgoed in de stad. Gent
          Gemapt stapelt 20 historische kaarten om de stadsgeschiedenis laag per
          laag te doorgronden. Gebruik alle tools die voor jullie beschikbaar
          zijn om een eerste blik te werpen op jullie stadsfragment.
          <br /> <br />
          <p className="ml-6">
            *Probeer naar de podcast te luisteren met de titel van de Jokerweek
            ‘regard’ in het achterhoofd. Het is belangrijk om jullie er bewust
            van te zijn dat dit gesprek slechts één blik is op de wijk, gestuurd
            door de positie van de geïnterviewde, een momentopname dat niet
            representatief is voor de volledige wijk. Het is dus zeker niet de
            bedoeling om ‘de waarheid’ naar voor te schuiven, maar wel om jullie
            te laten nadenken over welke positie je zelf kan innemen ten
            opzichte van de inhoud van dit gesprek.
          </p>
          <br />
          Vanaf 16h is het tijd voor een gesprek met een andere groep over wat
          jullie die dag gedaan, beluisterd, ontdekt hebben… Op het prikbord van
          de wijk vinden jullie je corresponderende groep van die dag terug. Na
          de onderlinge gesprekken leggen we alle puzzelstukken terug op de
          kaart tegen 17h.
          <h3 className="mt-6 font-subTitle text-xl tracking-normal">
            Dinsdag – PLEK
          </h3>
          <p className="italic tracking-normal">
            Wie maakt de plek? Wie gebruikt de plek?
          </p>
          Op de tweede dag van de week verschalen we onze blik naar een bepaalde
          plek in de wijk, binnen het stadsfragment. Een sprekend plein, een
          kenmerkende straat, een beeldbepalend gebouw…
          <br />
          <br /> Vanaf dinsdag wordt de{"  "}
          <a
            href="#"
            className="font font-subTitle tracking-normal underline underline-offset-2"
          >
            bib
          </a>{" "}
          jullie belangrijkste bron van informatie. We verzamelden artikels,
          video’s, podcasts, websites etc. met betrekking op bepaalde
          kernwoorden of tags. Elke dag krijgt elke wijk een set tags toegewezen
          waarmee men aan de slag kan gaan. Ga met deze tags op verkenning in de
          bib, maar verdiep jullie ook in specifieke informatie omtrent jullie
          stadsfragment.
          <br />
          <br /> Aan het einde van de dag kunnen jullie opnieuw in gesprek gaan
          met een toegewezen groep vanaf 16h en puzzelen we de kaart in elkaar
          tegen 17h.
          <h3 className="mt-6 font-subTitle text-xl tracking-normal">
            Woensdag – OBJECT
          </h3>
          <p className="italic tracking-normal">
            Wie maakt het object? Wie gebruikt het object?
          </p>
          Op woensdag krijgt elke wijk opnieuw een aantal tags mee waarop
          gericht kan gewerkt worden in de bib. Verder verschalen we de blik
          naar een specifiek object in de wijk. Een eeuwenoude boom, een
          geërodeerde straatsteen, een provocerend standbeeld… worden het
          onderwerp van een diepgaande analyse. Hoe verandert de ontdekking van
          dit object in al zijn of haar facetten de blik op het stadsfragment?
          <br />
          <br /> Aan het einde van de dag kunnen jullie opnieuw in gesprek gaan
          met een aan jullie toegewezen groep vanaf 16h en puzzelen we de kaart
          in elkaar tegen 17h.
          <h3 className="mt-6 font-subTitle text-xl tracking-normal">
            Donderdag – TEGENHANGER
          </h3>
          <p className="italic tracking-normal">
            Hoe verandert een tegenhanger jullie blik?
          </p>
          Ook op donderdag kunnen jullie aan de slag in de bib met enkele tags.
          We herschalen de context naar het universum en laten jullie zoeken
          naar een tegenhanger van de wijk, de plek of het object dat jullie de
          afgelopen dagen onderzocht hebben. Welke plek vormt een complement op
          jullie stadsfragment of welk werelddeel vormt het grootste contrast
          hiermee? Hoe wijzigt de blik op het stadsfragment?
          <br />
          <br /> Deze dag staat eveneens in het thema van participatie. In de
          namiddag vindt een debat plaats over de renovatie van onze
          thuislocatie, het Plateaugebouw. Elke groep kan hiervoor één student
          afvaardigen via de lijst op jullie gedeeld wijkpuzzelstuk.
          <br />
          <br /> Op donderdag opent de expo ‘Gent Herbestemt’ in het Charles Van
          Den Hove paviljoen, georganiseerd door de faculteit geschiedenis voor
          de Verleden Week.
          <br />
          <br /> Aan het einde van de dag kunnen jullie opnieuw in gesprek gaan
          met een aan jullie toegewezen groep vanaf 16h en puzzelen we de kaart
          in elkaar tegen 17h.
          <h3 className="mt-6 font-subTitle text-xl tracking-normal">
            Vrijdag – SYNTHESE
          </h3>
          <p className="italic tracking-normal">
            Hoe gaat men om met de veelheid aan blikken op één stadsfragment?
          </p>
          Na ons een week te hebben verdiept op een specifiek stadsfragment van
          Gent, is het tijd om jullie blik op de site aan een finaal oordeel te
          onderwerpen. Hoe wijzigde de blik op het stadsfragment doorheen de
          week? Welke gelaagdheid is te onderkennen in de standpunten die jullie
          doorheen de week innamen? Geef dit zo goed mogelijk weer op jullie
          puzzelstuk.
          <br />
          <br /> Vanaf 15h leggen we alle puzzelstukken voor een laatste keer
          samen tot één geheel. We nodigen proffen en (ex) studenten uit om te
          reflecteren over de collage aan stadsfragmenten. Afsluiten doen we met
          een laatste drankje bij het eindresultaat van de grote kaart.
        </AccordionDetails>
      </Accordion>
>>>>>>> 9ee5393c803e4601f1ac9256bc828af38d0dca8e
    </SubPage>
  );
}
