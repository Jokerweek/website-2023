import Link from "next/link";

type LinkProps = {
  href: string;
  title: string | React.ReactNode;
};

function Ref(props: LinkProps) {
  return (
    <li className="mt-2 break-words text-xs">
      <Link href={props.href}>{props.title}</Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black-100 p-6 text-secondary">
      <div className="flex justify-center gap-6">
        <ul className="list-square">
          <h3 className="font-subTitle tracking-normal">Sitemap</h3>
          <Ref href="home" title="Home" />
          <Ref href="weekmenu" title="Weekmenu" />
          <Ref href="kalender" title="Kalender" />
          <Ref href="huisregels" title="Huisregels" />
          <Ref href="sponsors" title="Sponsors" />
          <Ref href="lezingen" title="Lezingen" />
          <Ref href="opdracht" title="Opdracht" />
          <Ref href="expo" title="Expo kaart" />
          <Ref href="randactiviteiten" title="Randactiviteiten" />
          <Ref href="/" title="Countdown" />
        </ul>
        <ul className="list-square">
          <h3 className="font-subTitle tracking-normal">Externe links</h3>
          <Ref href="https://www.mixcloud.com/jokerweek2023/" title="Radio" />
          <Ref href="https://jw-database-code.vercel.app/" title="Bib" />
        </ul>
        <ul className="list-square">
          <h3 className="font-subTitle tracking-normal">Contact</h3>
          <Ref
            href="mailto:philippe.soubrier+jokerweek@gmail.com"
            title={
              <>
                Probleem melden <br/> van de website
              </>
            }
          />
        </ul>
      </div>
      <div className="mt-6 text-center text-sm">
        Jokerweek 2023 - Team Digitaal
        <p className="text-[9px]">Philippe Soubrier</p>
      </div>
    </footer>
  );
}
