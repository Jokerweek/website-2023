import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { SubPage } from "~/components";
import groups from "~/components/groups.json";
// { title: [names], title: [names], ...}

type GroupProps = {
  title: string;
  names: string[];
};

function Group({ title, names }: GroupProps) {
  return (
    <div className="w-[150px] tracking-normal">
      <h3 className="ml-4 font-subTitle text-lg">{title}</h3>
      <ul className="list-inside list-square">
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Opdracht() {
  return (
    <SubPage wide title="Opdracht" image="/images/bg/doorklik/opdracht.png">
      <Accordion
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="absolute h-12 w-full -translate-x-4 -translate-y-2 rounded-sm border border-dashed" />
          <h2 className="font-subTitle text-2xl tracking-normal text-primary">
            GROEPEN
          </h2>
        </AccordionSummary>

        <AccordionDetails className="-mx-8 flex flex-wrap justify-center gap-3">
          {Object.entries(groups).map(([title, names]) => (
            <Group title={title} names={names} />
          ))}
        </AccordionDetails>
      </Accordion>
    </SubPage>
  );
}
