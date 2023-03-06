import Timer from "../components/Timer";

export default function Landing() {
  return (
    <div
      className="background"
      style={{ height: "100vh", justifyContent: "space-evenly" }}
    >
      <a variant="contained" className="title button" href="/home">
        Ga door
      </a>
      <Timer/>
      <img
        src="images/logo/Spel-officieel-Transparant.png"
        alt="logo"
        style={{ width: "300px", maxWidth: "80vw" }}
      />
    </div>
  );
}
