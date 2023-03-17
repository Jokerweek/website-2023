import { useState } from "react";
import { Calendar, Event, EventLink, SubPage } from "~/components";

export default function Randactiviteiten() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SubPage title="Randactiviteiten" image="/images/test_1.png">
      <Calendar>
        <Event day={1} hours={[19, 22]} title="Quiz" />
        <Event day={2} hours={[17, 18]} title="Jarenstrijd" subTitle="locatie" href="jarenstrijd">
          <EventLink />
        </Event>
        <Event day={3} hours={[9.5, 10]} title="Ochtendspel">
          <EventLink/>
        </Event>
        <Event day={3} hours={[11, 11.5]} title="Zoekspel">
          <EventLink/>
        </Event>
        <Event day={3} hours={[17, 18]} title="Jarenstrijd" subTitle="locatie" href="jarenstrijd">
          <EventLink />
        </Event>
        <Event day={4} hours={[9.5, 10]} title="Ochtendspel">
          <EventLink/>
        </Event>
        <Event day={4} hours={[11, 11.5]} title="Zoekspel">
          <EventLink/>
        </Event>
        <Event day={4} hours={[17, 18]} title="Jarenstrijd" subTitle="locatie" href="jarenstrijd">
          <EventLink />
        </Event>
        <Event day={5} hours={[9.5, 10]} title="Ochtendspel">
          <EventLink/>
        </Event>
        <Event day={5} hours={[11, 11.5]} title="Zoekspel">
          <EventLink/>
        </Event>
        <Event day={5} hours={[17, 18]} title="Jarenstrijd" subTitle="locatie" href="jarenstrijd">
          <EventLink />
        </Event>
        <Event day={6} hours={[11, 11.6]} title="Zoekspel">
          <EventLink/>
        </Event>
        <Event day={6} hours={[14, 15]} title="Einde Jarenstrijd" href="jarenstrijd">
          <EventLink top={true} />
        </Event>
      </Calendar>
    </SubPage>
  );
}
