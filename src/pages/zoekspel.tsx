import { SubPage } from "~/components";

export default function Zoekspel() {
  return (
    <SubPage title="Weekmenu" image="/images/test_1.png">
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        MAANDAG
      </h2>
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        DINSDAG
      </h2>
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        WOENSDAG
      </h2>
      
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        DONDERDAG
      </h2>
      
      <hr className="my-2" />
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary ">
        VRIJDAG
      </h2>
    </SubPage>
  );
}
