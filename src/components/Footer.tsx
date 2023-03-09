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
          <h3>Sitemap</h3>
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
          <h3>Externe links</h3>
          <Ref href="/" title="Radio" />
          <Ref href="/" title="Bib" />
        </ul>
        <ul className="list-square">
          <h3>Contact</h3>
          <Ref
            href="mailto:philippe.soubrier+jokerweek@gmail.com"
            title={<>Probleem <br /> melden</>}
          />
        </ul>
      </div>
      <div className="text-center text-sm mt-6">Jokerweek 2023 - Team Digitaal</div>
    </footer>
  );
}
