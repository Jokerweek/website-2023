import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { SubPage } from "~/components";

export default function Weekmenu() {
  return (
    <SubPage title="Weekmenu" image="/images/test_1.png">
      <h2 className="font-subTitle tracking-normal mt-5 text-2xl text-primary ">MAANDAG</h2>      
      Yeah, listen up, I&apos;m &apos;bout to drop some heat Let me tell you
      &apos;bout this wrap that can&apos;t be beat It&apos;s packed with
      veggies, meat or tofu A perfect lunch that&apos;s easy to go to Wrap it up
      tight and you&apos;re good to go, that&apos;s the truth It&apos;s healthy,
      delicious, and quite the proof!
      <br/><br/>
      Kleuren zo helder en smaken zoet, Voedzaam en gezond, een feest voor wie
      het proeft, Sappig en lekker, zo&apos;n verfrissend geluid, Wat ben ik?
      Een heerlijk stuk fruit!
      <hr className="my-2" />
      <h2 className="font-subTitle tracking-normal mt-5 text-2xl text-primary ">DINSDAG</h2>
      Ik ben een salade die geen sla bevat, Maar in plaats daarvan heb ik pasta
      als schat. Een mix van texturen en smaken, dat is mijn kracht, Een
      perfecte aanvulling voor elke zomerse maaltijd in alle pracht.
      <br/><br/>
     
      Een lekkernij, zoet en zacht Een traktatie die je blij maakt, dag en nacht
      Een Belgisch gebak, een ware traktatie Kom snel je kent de locatie !!
      
      <hr className="my-2" />
      <h2 className="font-subTitle tracking-normal mt-5 text-2xl text-primary ">WOENSDAG</h2>
     
      Wist je dat … mijn naam afkomstig is van een Grieks gegist gerstendrankje?
      Wist je dat … ik in het Engels vernoemd ben naar een Britse graaf die een
      grote fan was van kapitein James Cook? Wist je dat …
      <hr className="my-2" />
      <h2 className="font-subTitle tracking-normal mt-5 text-2xl text-primary ">DONDERDAG</h2>
      <p className="mb-4">
        Vandaag eten we een maaltijd, maar niet op het juiste moment. We eten
        het &apos;s middags, al is het meer voor &apos;s ochtends gekend. Het is
        een feest voor degenen die hongerig zijn, De keuze tussen al die
        gerechtjes is voor iedereen fijn. Geen breakfast, geen brunch, maar wel
        een breakfast for lunch!
      </p>
      <Accordion
        style={{ boxShadow: "none", backgroundColor: "transparent" }}
        className="border border-dashed"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3 className="font-subTitle tracking-normal">Info over quinoa WWF:</h3>
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
      <br/>
      Een snack zo beroemd en fijn, Geboren in België, zo heerlijk en zo klein.
      Goudbruin, knapperig, en dun.
      <hr className="my-2" />
      <h2 className="font-subTitle tracking-normal mt-5 text-2xl text-primary ">VRIJDAG</h2>
      
    </SubPage>
  );
}
