import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { SubPage } from "~/components";

export default function Weekmenu() {
  return (
    <SubPage title="Weekmenu" image="/images/test_1.png">
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        MAANDAG
      </h2>
      Yeah, listen up, I&apos;m &apos;bout to drop some heat
      <br /> Let me tell you &apos;bout this wrap that can&apos;t be beat
      <br /> It&apos;s packed with veggies, meat or tofu
      <br /> A perfect lunch that&apos;s easy to go to
      <br /> Wrap it up tight and you&apos;re good to go, that&apos;s the truth
      <br /> It&apos;s healthy, delicious, and quite the proof!
      <br /> <br />
      Kleuren zo helder en smaken zoet,
      <br /> Voedzaam en gezond, een feest voor wie het proeft,
      <br /> Sappig en lekker, zo&apos;n verfrissend geluid,
      <br /> Wat ben ik? Een heerlijk stuk fruit!
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        DINSDAG
      </h2>
      Ik ben een salade die geen sla bevat,
      <br /> Maar in plaats daarvan heb ik pasta als schat.
      <br /> Een mix van texturen en smaken, dat is mijn kracht,
      <br /> Een perfecte aanvulling voor elke zomerse maaltijd in alle pracht.
      <br /> <br /> Een lekkernij, zoet en zacht
      <br /> Een traktatie die je blij maakt, dag en nacht
      <br /> Een Belgisch gebak, een ware traktatie
      <br /> Kom snel je kent de locatie !!
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        WOENSDAG
      </h2>
      <br /> Wist je dat … mijn naam afkomstig is van een Grieks gegist
      gerstendrankje?
      <br /> Wist je dat … ik in het Engels vernoemd ben naar een Britse graaf
      die een grote fan was van kapitein James Cook?
      <br /> Wist je dat …
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        DONDERDAG
      </h2>
      <br /> Vandaag eten we een maaltijd, maar niet op het juiste moment.
      <br /> We eten het &apos;s middags, al is het meer voor &apos;s ochtends
      gekend.
      <br /> Het is een feest voor degenen die hongerig zijn,
      <br /> De keuze tussen al die gerechtjes is voor iedereen fijn.
      <br /> Geen breakfast, geen brunch, maar wel een breakfast for lunch!
      <Accordion
        sx={{
          marginTop: "rem",
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
        className="border border-dashed"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3 className="font-subTitle tracking-normal">
            Info over quinoa WWF:
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="ml-2 list-square">
            <li>
              Top voor je gezondheid: De Inca&apos;s gaven hun strijders quinoa
              te eten om hen meer kracht, uithoudingsvermogen en energie te
              geven. Deze zaadjes zijn zeer rijk aan vezels. Het is een
              fantastische bondgenoot voor je gezondheid, want quinoa verbetert
              de kwaliteit van het bloed en bevat onder meer koper en zink. De
              vezels verbeteren de darmtransit en de eiwitten verbeteren de
              kwaliteit van de huid, botten, pezen en spieren. Dit recept is een
              ideale start voor een dag in topconditie. Bovendien verbetert de
              pompoen bepaalde functies van het immuunsysteem door zijn
              antioxidante werking. Deze groente is ook rijk aan bètacaroteen,
              een plantaardig pigment dat de huid en de ogen helpt te
              beschermen.
            </li>
            <li className="mt-3">
              Top voor de planeet: Zowel pompoen als quinoa groeien in België,
              dit slaatje is dus lekker lokaal. Bovendien zitten er enkel
              seizoensgroentjes in!
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <br />
      Een Belgischere maaltijd dan dit is onmogelijk.
      <br /> No further information needed.
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        VRIJDAG
      </h2>
      O, aardse schat met witte schil,
      <br /> Gegroeid in de grond, zo zacht en stil.
      <br /> Jouw hartig en zoet aroma, dat verraadt,
      <br /> Een rijke smaak die ons verrukt en opbeurt, op elke maat.
      <br /> <br />
      O, knol en wortel, gezegend door de natuur,
      <br /> Jouw zachte smaak maakt ons hart zo puur.
      <br /> En dus zullen we blijven proeven en genieten,
      <br /> Van jouw aardse goedheid, die ons nooit zal verlaten of
      verschieten.
    </SubPage>
  );
}
