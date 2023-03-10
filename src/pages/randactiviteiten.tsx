import { Calendar, Event, EventLink } from "~/components";
import SubPage from "~/components/SubPage";

export default function Randactiviteiten() {
  return (
    <SubPage title="Randactiviteiten" image="/images/test_1.png">
      <Calendar>
        <Event day={1} hours={[19, 22]} title="Quiz" />
        <Event day={2} hours={[17, 18]} title="Jarenstrijd">
          <EventLink href="/" />
        </Event>
        <Event day={3} hours={[9.5, 10]} title="Ochtend- activiteit" />
        <Event day={3} hours={[11, 11.5]} title="Zoekspel" />
        <Event day={3} hours={[17, 18]} title="Jarenstrijd">
          <EventLink href="/" />
        </Event>
        <Event day={4} hours={[9.5, 10]} title="Ochtend- activiteit" />
        <Event day={4} hours={[11, 11.5]} title="Zoekspel" />
        <Event day={4} hours={[17, 18]} title="Jarenstrijd">
          <EventLink href="/" />
        </Event>
        <Event day={5} hours={[9.5, 10]} title="Ochtend- activiteit" />
        <Event day={5} hours={[11, 11.5]} title="Zoekspel" />
        <Event day={5} hours={[17, 18]} title="Jarenstrijd">
          <EventLink href="/" />
        </Event>
        <Event day={6} hours={[11, 11.6]} title="Zoekspel" />
        <Event day={6} hours={[14, 15]} title="Einde Jarenstrijd">
          <EventLink href="/" top={true} />
        </Event>
      </Calendar>
    </SubPage>
  );
}
