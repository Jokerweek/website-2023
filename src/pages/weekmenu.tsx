import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Image from "next/image";
import { SubPage } from "~/components";

export default function Weekmenu() {
  return (
    <SubPage title="Weekmenu" image="/images/bg/doorklik/weekmenu.png">
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
      <br /> <br />
      Vandaag eten we overheerlijke wok! Dankzij WWF maken we een duurzame en
      overheerlijke maaltijd!
      <br /> <br />
      <Accordion
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
        className="border border-dashed"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3 className="font-subTitle tracking-normal">Info sojascheuten:</h3>
        </AccordionSummary>
        <AccordionDetails>
          De sojascheuten, die we in onze wok verwerken, zijn een pluspunt voor
          de planeet. Ze zijn de kiemen van de mungboon, niet van sojabonen
          zoals de naam doet vermoeden. De mungboon is een peulvrucht die vooral
          in Azië wordt geteeld. Zoals alle peulvruchten bindt de boon stikstof
          uit de lucht, die hij als voedingsstof gebruikt. Als gevolg daarvan
          heeft ze over het algemeen minder (of geen) bemesting nodig.
          Peulvruchten worden vaak gebruikt als groenbemesting, omdat ze de
          bodem op natuurlijke wijze verrijken met stikstof die in een volgend
          vegetatie seizoen door de gewassen kan worden opgenomen.
        </AccordionDetails>
      </Accordion>
      <br /> Door wokgroenten te mengen met lokale groenten is het een gezonde,
      duurzame en verfrissende groentenmix!
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
      <br /> <br />
      “Prijs-kwaliteit is dit een echte aanrader. Wij deelden verschillende
      gerechtjes en alles was heel verzorgd en lekker. De bediening was ook
      enorm vriendelijk. Hier komen wij zeker terug!” - Goodfoodtrip
      <br /> <br />
      “Heel lekker, smaakvol en vers adresje. Gezellig kader en zeer
      vriendelijke sympathieke bediening. We komen hier zeker terug” - FilipW578
      <br /> <br />
      “Verdomme … dat was goed om je vingers bij af te likken! Alles wat op
      tafel werd gezet zag er fantastisch uit en smaakte nog beter. Je proeft
      echt dat alles supervers is! Geen reden om je in te houden!” - FlavieV17
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        WOENSDAG
      </h2>
      <br /> Wist je dat … mijn naam afkomstig is van een Grieks gegist
      gerstendrankje?
      <br /> Wist je dat ik in het Engels vernoemd ben naar een Britse graaf die
      een grote fan was van kapitein James Cook?
      <br /> Wist je dat de bereidingswijze van deze zetmeelbron is uitgevonden
      in Oostenrijk in de 19e eeuw?
      <br /> <br />
      We zijn halfweg! Daarom, om jullie een hart onder de riem te steken voor
      het vervolg van de week, bieden we een energieke koek op basis van
      amandelen aan. De tweede helft is van ons, we gaan nog pieken!
      <br />
      <br />
      <Image src="/images/raadsel.png" width={600} height={200} alt="raadsel" />
      ¡El chili sin carne es la cosa más deliciosa que existe! Pero cuidado, los
      frijoles pueden hacer que te tires un pedo... no te preocupes si los demás
      se tiran pedos, ¡no te avergüences!
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
      <br /> <br />
      <Accordion
        sx={{
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
      (UPBEAT MUSIC)
      <br />
      <div className="ml-4">
        <br /> Whatcha gon&apos; do with all that junk
        <br /> All that junk inside your trunk?
      </div>
      <br /> I&apos;ma get, get, get, get you drunk
      <br /> Get you love drunk off my hum
      <br /> My hum, my hum, my hum, my hum, my hum
      <br /> My hum, my hum, my hum, my lovely tasty hum
      <br /> Check it out
      <br />
      <br /> The Black Eyed Chickpeas - My Hum
      <br /> <br />
      <Accordion
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
        className="border border-dashed"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3 className="font-subTitle tracking-normal">Info over hummus:</h3>
        </AccordionSummary>
        <AccordionDetails>
          De kikkererwten in de hummus zitten vol vezels en eiwitten (maar
          weinig calorieën) en zorgen voor een voldaan gevoel na het eten.
          Ideaal als gezonde tussendoor dus om er vandaag nog even tegenaan te
          kunnen. We zijn er bijna!
        </AccordionDetails>
      </Accordion>
      <br /> Een Belgischere maaltijd dan dit is onmogelijk.
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
      <br /> <br />
      Ik kom in verschillende smaken, kleuren, vormen en geuren
      <br /> Daarom zal je nooit betreuren
      <br /> Om je tanden in me te laten zinken
      <br /> Of een sapje van me te drinken
    </SubPage>
  );
}
