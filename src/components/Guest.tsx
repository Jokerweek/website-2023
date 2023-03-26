import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

type GuestProps = {
  name: string;
  children: React.ReactNode | string;
};

export default function Guest(props: GuestProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        startIcon={<PersonIcon />}
        endIcon={<FullscreenIcon sx={{ width: "15px" }} />}
        sx={{ color: "black" }}
      >
        <span className="normal-case">{props.name}</span>
      </Button>

      {/* popup description */}
      <div style={{ display: open ? "block" : "none" }}>
        <div className="fixed top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-black-100 bg-opacity-60">
          <div className="relative m-5 flex max-h-[90vh] max-w-[700px] flex-col bg-secondary bg-contain bg-repeat p-3 text-base">
            <div className="absolute top-1 right-1">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <h2 className="font-subTitle text-lg tracking-normal text-primary ">
              {props.name}
            </h2>
            <div className="overflow-y-scroll">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
