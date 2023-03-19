import Image from "next/image";

export default function SponsorsLogos() {
  const logos = {
    archipel: "/images/logo/sponsors/archipel.png",
    BB: "/images/logo/sponsors/BB-logo_SQUARE-RGB - Ilse Vandesande.png",
    bostoen: "/images/logo/sponsors/BST_logo_BLOK_rood_gradient.png",
    carpentier: "/images/logo/sponsors/Carpentier-Hardwood-Solutions-logo.png",
    gevelinzicht:
      "/images/logo/sponsors/GIZ-logo-300dpi - Tom Robersscheuten.png",
    archipelago:
      "/images/logo/sponsors/logo archipelago - Maison-screen web RGB.png",
    awg: "/images/logo/sponsors/logo awg architecten1.png",
    carrieres:
      "/images/logo/sponsors/Logo Carrieres du Hainaut RGB positive portrait transparent.png",
    establis: "/images/logo/sponsors/logo establis.png",
    koe: "/images/logo/sponsors/logo koe.png",
    renson: "/images/logo/sponsors/logo-renson.png",
    mouton: "/images/logo/sponsors/logo_w (wit) (png web large).png",
    matexi: "/images/logo/sponsors/MATEXI_2.png",
    NEY: "/images/logo/sponsors/NEY_logo2018_NOCITY.png",
    recticel: "/images/logo/sponsors/recticel insulation yellow stroke.png",
    reynaers: "/images/logo/sponsors/Reynaers_staand_pos_cmyk.png",
    SBE: "/images/logo/sponsors/SBE.png",
    tenerga: "/images/logo/sponsors/TG_logo 1.png",
    vandersanden: "/images/logo/sponsors/Vandersanden.png",
    VTK: "/images/logo/sponsors/VTK.png",
    wienerberger: "/images/logo/sponsors/WB.png",
    WWF: "/images/logo/sponsors/WWF.png",
    xerius: "/images/logo/sponsors/Xerius-logo.png",
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <Image alt="logo" height={50} width={120} src={logos.xerius} />
      <Image alt="logo" height={50} width={50} src={logos.koe} />
      <Image alt="logo" height={50} width={80} src={logos.carrieres} />
      <Image alt="logo" height={50} width={40} src={logos.WWF} />
      <Image alt="logo" height={50} width={40} src={logos.bostoen} />
      <Image alt="logo" height={50} width={80} src={logos.tenerga} />
      <Image alt="logo" height={50} width={80} src={logos.renson} />
      <Image alt="logo" height={50} width={50} src={logos.VTK} />
      <Image alt="logo" height={50} width={80} src={logos.vandersanden} />
      <Image alt="logo" height={50} width={110} src={logos.gevelinzicht} />
      <Image alt="logo" height={50} width={40} src={logos.BB} />
      <Image alt="logo" height={50} width={140} src={logos.wienerberger} />
      <Image alt="logo" height={50} width={100} src={logos.archipelago} />
      <Image alt="logo" height={50} width={120} src={logos.awg} />
      <Image alt="logo" height={50} width={60} src={logos.SBE} />
      <Image alt="logo" height={50} width={50} src={logos.matexi} />
      <Image alt="logo" height={50} width={90} src={logos.recticel} />
      <Image alt="logo" height={50} width={100} src={logos.carpentier} />
      <Image alt="logo" height={50} width={120} src={logos.archipel} />
      <Image alt="logo" height={50} width={90} src={logos.NEY} />
      <Image alt="logo" height={50} width={110} src={logos.mouton} />
      <Image alt="logo" height={50} width={90} src={logos.establis} />
      <Image alt="logo" height={50} width={40} src={logos.reynaers} />
    </div>
  );
}
