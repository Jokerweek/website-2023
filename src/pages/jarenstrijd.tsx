import Scores from "~/components/Scores";
import SubPage from "~/components/SubPage";

export default function Jarenstrijd() {
  return (
    <SubPage title="Jarenstrijd" image="/images/test_1.png">
      <Scores BA1={10} BA2={8} BA3={4} MA1={20} MA2={15} />
    </SubPage>
  );
}
