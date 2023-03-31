import { Scores, SubPage } from "~/components";

export default function Randactiviteiten() {
  return (
    <SubPage
      title="Randactiviteiten"
      image="/images/bg/doorklik/randactiviteiten.png"
    >
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary">
        JARENSTRIJD
      </h2>
      <h3 className="my-1 font-subTitle text-lg tracking-normal">
        Slag om de Vlag
      </h3>
      <Scores BA1={9} BA2={8} BA3={8} MA1={9} MA2={12} />
      Met vingers vol verf en doeken op de grond,
      <br /> Kwamen ze bij elkaar, jong en oud in één verbond.
      <br /> Het was tijd om iets te creëren, iets unieks en bijzonder,
      <br /> Een vlag van diversiteit, als eenheidswonder.
      <br /> <br />
      Met elke penseelstreek en elke druppel verf,
      <br /> Ontstond er een band die nog lang zou blijven ter berf.
      <br /> Want in het samenwerken, het geven en nemen,
      <br /> Ligt de kracht van diversiteit, het onbekende tegemoet treden.
      <br /> <br />
      Een vlag van diversiteit, een spel tussen jaren,
      <br /> Een uitdrukking van het beste in ons, zonder gevaren.
      <div className="text-primary">
        <br /> Locatie{" "}
        <a className="underline underline-offset-2" href="kalender">
          op kalender
        </a>{" "}
        zelf per dag:
        <br /> To be announced
      </div>
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary">
        OCHTENDACTIVITET
      </h2>
      <a className="underline underline-offset-2" href="kalender">
        Zie kalender
      </a>
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary">
        ZOEKSPEL
      </h2>
      Radio aan, inclusief gaan,
      <br /> Tips onthullen de stad haar geheimen baan voor baan.
      <div className="ml-3">
        <h4 className="mt-2 mb-1 font-subTitle text-lg tracking-normal">
          Zoek Geeraard en ‘Regard’
        </h4>
        We struinen door de straten
        <br /> Op zoek naar architectuur
        <br /> Maar niet zomaar willekeurig
        <br /> We zoeken inclusief en puur
        <br /> <br />
        We kijken naar de gebouwen
        <br /> Met een inclusieve blik
        <br /> Want iedereen verdient het
        <br /> Om te leven in een stad die klik(t)
        <br /> <br />
        We zien nieuwe perspectieven
        <br /> En ontdekken nieuwe pracht
        <br /> De stad wordt zo veel mooier
        <br /> Als iedereen er in past en lacht
        <br /> <br />
        Dus laten we blijven zoeken
        <br /> Naar een stad voor iedereen
        <br /> Met inclusiviteit en architectuur
        <br /> Zal het er zoveel mooier zijn, meteen.
      </div>
      <br /> Credits: Chat GPT
      <h4 className="mt-2 mb-1 font-subTitle text-lg tracking-normal">
        Dinsdag
      </h4>
      De eerste verstopplek van Geeraard is gevonden! Casa Rosa is het
      Oost-Vlaams Regenbooghuis, een locatie waar holebi’s, transgender personen
      en hun omgeving terecht kunnen. Het is een ontmoetingsplaats die zich
      richt op alle individuen en groepen die interesse hebben in en werken rond
      seksuele oriëntatie en genderidentiteit.
      <h4 className="mt-2 mb-1 font-subTitle text-lg tracking-normal">
        Woensdag
      </h4>
      ...
      Vandaag werd Geraard gevonden aan het Charles de L’Epéeplein. De Franse
      abt was een pionier in de behandeling van doven en slechthorenden, waarbij
      hij onderzoek deed naar bruikbare gebarentaal. Daarnaast pleitte hij voor
      de gelijke rechten van doven en slechthorenden.
      <h4 className="mt-2 mb-1 font-subTitle text-lg tracking-normal">
        Donderdag
      </h4>
      ...
      Als derde locatie is Geeraard terug te vinden aan de Eyüp Sultan Camii
      moskee. De moskee is volledig gefinancierd door giften afkomstig uit de
      Turkse gemeenschap van Gent en werd in 1978 officieel geopend. Van meet af
      aan geldt de plek niet enkel als gebedshuis, maar ook als ontmoetingsplek
      voor de gemeenschap.
      <h4 className="mt-2 mb-1 font-subTitle text-lg tracking-normal">
        Vrijdag
      </h4>
      ...
      Voor de laatste keer heeft Geeraard zich verstopt aan Dok-Zuid. Op deze
      locatie is een werkplaats-kringloopcentrum gelegen, waar spullen
      ingezameld worden en opnieuw verkocht worden. Het is een sociaal
      tewerkstellingsproject waar mensen werkervaring kunnen opdoen, maar ook
      hulpverlening en milieu staan centraal in de visie.
    </SubPage>
  );
}
