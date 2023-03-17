import { Calendar, Event, SubPage } from "~/components";

export default function Randactiviteiten() {
  return (
    <SubPage title="Randactiviteiten" image="/images/test_1.png">
      <Calendar>
        <Event day={1} hours={[19, 22]} title="Quiz" />
        <Event
          day={2}
          hours={[17, 18]}
          title="Jarenstrijd"
          subTitle="locatie"
          href="jarenstrijd"
          type="link"
        />
        <Event day={3} hours={[9.5, 10]} title="Ochtendspel" type="pop-up">
          <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
            INHOUD
          </h2>
          Consectetur anim eiusmod quis enim non laborum elit esse do. Laboris
          aute sit laboris officia esse incididunt labore minim quis occaecat
          cupidatat anim in consectetur. Cillum aliqua consectetur laborum qui
          Lorem qui tempor mollit aute.
          <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
            INFO
          </h2>
          <div className="flex gap-3">
            <div>
              <h3 className="font-subTitle tracking-normal">Uur</h3>
              12:30
            </div>
            <div>
              <h3 className="font-subTitle tracking-normal">locatie</h3>
              Plateau - aud D
            </div>
          </div>
        </Event>
        <Event day={3} hours={[11, 11.5]} title="Zoekspel" type="pop-up" />
        <Event
          day={3}
          hours={[17, 18]}
          title="Jarenstrijd"
          subTitle="locatie"
          href="jarenstrijd"
          type="link"
        />
        <Event day={4} hours={[9.5, 10]} title="Ochtendspel" type="pop-up" />
        <Event day={4} hours={[11, 11.5]} title="Zoekspel" type="pop-up" />
        <Event
          day={4}
          hours={[17, 18]}
          title="Jarenstrijd"
          subTitle="locatie"
          href="jarenstrijd"
          type="link"
        />
        <Event day={5} hours={[9.5, 10]} title="Ochtendspel" type="pop-up" />
        <Event day={5} hours={[11, 11.5]} title="Zoekspel" type="pop-up" />
        <Event
          day={5}
          hours={[17, 18]}
          title="Jarenstrijd"
          subTitle="locatie"
          href="jarenstrijd"
          type="link"
        />
        <Event day={6} hours={[11, 11.6]} title="Zoekspel" type="pop-up" />
        <Event
          day={6}
          hours={[14, 15]}
          title="Jarenstrijd"
          subTitle="locatie"
          href="jarenstrijd"
          type="link"
        />
      </Calendar>
    </SubPage>
  );
}
