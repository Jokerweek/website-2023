import { Scores, SubPage } from "~/components";

export default function Jarenstrijd() {
  return (
    <SubPage
      back="randactiviteiten"
      title="Slag om de Vlag"
      image="/images/test_1.png"
    >
      <p className="mb-6">
        Ut deserunt aliquip elit ex cupidatat qui nostrud. Eu incididunt do
        Lorem deserunt qui fugiat nisi commodo voluptate aliqua in nisi deserunt
        enim. Et amet aliqua velit Lorem qui dolor ad nostrud voluptate duis
        voluptate magna nisi laborum. Officia amet aliquip ad Lorem do ea. Eu
        aliqua irure occaecat cillum ex. Cillum id dolore amet reprehenderit
        laborum enim. Eu tempor veniam qui exercitation dolore.
      </p>

      <Scores BA1={0} BA2={0} BA3={0} MA1={0} MA2={0} />
    </SubPage>
  );
}
