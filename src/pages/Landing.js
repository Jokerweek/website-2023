import Timer from "../components/Timer";

export default function Landing() {
  return (
    <div
      className="background"
      style={{ height: "100vh", justifyContent: "space-between" }}
    >
      <img
        src="images/logo/Spel-officieel-Transparant.png"
        alt="logo"
        style={{
          width: "300px",
          maxWidth: "60vw",
          marginTop: "10vh",
        }}
      />
      <a variant="contained" className="title button" href="/home">
        Ga door
      </a>
      <Timer />
      <img
        src="images/test_1.png"
        alt="logo"
        style={{ width: "300px", maxWidth: "60vw" }}
      />
    </div>
  );
}
