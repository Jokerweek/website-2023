import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import mobile from "../recoil/mobile";
import Doorklik from "./templates/Doorklik";

export default function Mobile() {
  return (
    <Doorklik title="Weekmenu" image="/images/test_1.png">
      <h2>MAANDAG</h2>
      Occaecat est cillum sit adipisicing. Consectetur fugiat nostrud non
      ullamco eiusmod adipisicing fugiat culpa incididunt minim sunt ullamco. Eu
      do eu sit fugiat minim dolore voluptate ad. Non ullamco sit incididunt
      exercitation pariatur velit exercitation non sint.
      <h2>DINSDAG</h2>
      Ea nulla proident nulla adipisicing eiusmod minim sit pariatur. Dolor
      proident do eiusmod pariatur consectetur non fugiat laborum duis ex
      pariatur sint nostrud eiusmod. Occaecat duis aute cillum excepteur magna
      amet aute nostrud proident occaecat. Tempor laborum laborum ipsum
      proident.
      <h2>WOENSDAG</h2>
      Irure nulla commodo tempor tempor laborum nostrud. Non dolor ea amet
      fugiat consectetur laboris. Tempor incididunt sunt ea in duis Lorem
      voluptate ea adipisicing quis sunt ea adipisicing. Dolor officia qui
      officia tempor. Velit proident esse magna eiusmod culpa tempor pariatur
      ad. Duis ea veniam ea sint minim. Qui non mollit ullamco in laboris
      exercitation.
      <h2>DONDERDAG</h2>
      Voluptate do consectetur aliqua est proident incididunt culpa. Irure est
      eu dolor qui ut cillum. Excepteur aliqua aliquip laborum id nostrud nisi
      aliquip ad nulla. Dolor sint quis exercitation Lorem et deserunt anim
      nulla ad aliqua ea. Sit qui voluptate adipisicing et incididunt cupidatat
      ullamco adipisicing quis occaecat reprehenderit qui consequat nulla.
      <h2>VRIJDAG</h2>
      Proident exercitation Lorem adipisicing enim. Adipisicing consequat
      adipisicing non ullamco mollit id elit id magna excepteur laboris
      consectetur. Aliquip pariatur et reprehenderit officia dolor excepteur
      commodo ea. Id ipsum Lorem irure qui eu amet commodo dolore consequat
      pariatur proident.
    </Doorklik>
  );
}
