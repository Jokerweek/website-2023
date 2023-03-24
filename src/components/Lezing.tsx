import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import { Button, IconButton } from "@mui/material";
import { useState } from "react";

type GuestProps = {
  name: string;
  description: React.ReactNode | string;
};

function Guest(props: GuestProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        startIcon={<PersonIcon />}
        sx={{ color: "black", opacity: "0.5" }}
      >
        <span className="font-subTitle tracking-normal">{props.name}</span>
      </Button>

      {/* popup description */}
      <div style={{ display: open ? "block" : "none" }}>
        <div className="fixed top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-black-100 bg-opacity-60">
          <div className="relative m-5 max-w-[700px] bg-secondary bg-contain bg-repeat p-3 pr-10 text-base">
            <div className="absolute top-1 right-1">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            {props.description || <p className="m-6">Come back later 😁</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

type LezingProps = {
  title: string;
  guests: GuestProps[];
  children: React.ReactNode | string;
};

export default function Lezing(props: LezingProps) {
  return (
    <>
      <h2 className="mt-5 font-subTitle text-2xl tracking-normal text-primary">
        {props.title}
      </h2>
      {props.children}
      <div className="flex flex-wrap gap-3">
        {props.guests.map((guest) => (
          <Guest key={guest.name} name={guest.name} description={guest.description} />
        ))}
      </div>
    </>
  );
}
