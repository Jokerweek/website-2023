import { SubPage } from "~/components";

export default function Huisregels() {
  return (
    <SubPage title="Huisregels" image="/images/bg/doorklik/huisregels.png">
      <h2 className="mt-3 font-subTitle text-2xl tracking-normal text-primary">
        Onze technici wachten nog op de officiële regels, hier al een paar
        richtlijnen:
      </h2>
      <ul className="list-square space-y-2 mt-2 ml-5">
        <li>Geen levende koeien!</li>
        <li>
          Alcohol mag alleen geconsumeerd worden na 8u als iedereen al dronken
          is.
        </li>
        <li>Tussen 15 en 17u mag je enkel op de zwarte tegels lopen.</li>
        <li>
          20u s&apos;avonds buiten? Bek houden! Je mag je lippen nog bewegen zolang
          er geen geluid uitkomt :-)
        </li>
      </ul>
    </SubPage>
  );
}
