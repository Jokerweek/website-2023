import { SubPage } from "~/components";

export default function Expo() {
  return (
    <SubPage title="Expo" image="/images/bg/doorklik/expo.png">
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary">
        LINK NAAR{" "}
        <a
          href="https://www.google.com/maps/d/u/2/edit?mid=12NzD1bN9on-6eTJJrO7H_wWXAHSIwU8&usp=sharing"
          className="underline underline-offset-4"
        >
          GOOGLE MAPS
        </a>
      </h2>
    </SubPage>
  );
}
