import { SubPage } from "~/components";

const googleMapsUrl =
  "https://www.google.com/maps/d/u/2/edit?mid=12NzD1bN9on-6eTJJrO7H_wWXAHSIwU8&usp=sharing";
const googleMapsEmbedUrl =
  "https://www.google.com/maps/d/embed?mid=12NzD1bN9on-6eTJJrO7H_wWXAHSIwU8&ehbc=2E312F";

export default function Expo() {
  return (
    <SubPage title="Expo" image="/images/bg/doorklik/expo.png">
      <h2 className="my-5 font-subTitle text-xl tracking-normal text-primary">
        LINK NAAR{" "}
        <a href={googleMapsUrl} className="underline underline-offset-4">
          GOOGLE MAPS
        </a>
      </h2>
      <iframe
        src={googleMapsEmbedUrl}
        width="100%"
        height="480"
        title="Google Maps"
      />
    </SubPage>
  );
}
