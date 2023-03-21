import { Calendar, Event, SubPage } from "~/components";

export default function Kalender() {
  return (
    <SubPage title="Kalender" image="/images/test_1.png" wide ml={25}>
      <Calendar>
        {/* licht grijs */}

        <Event column={2} colSpan={2} hours={[9.5, 17.5]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>VERZAMELEN !</p>
            <p>DEADLINE</p>
          </div>
        </Event>
        <Event column={4} colSpan={2} hours={[10, 17.5]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>START</p>
            <p>DEADLINE</p>
          </div>
        </Event>
        <Event column={6} colSpan={2} hours={[10, 17.5]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>START</p>
            <p>DEADLINE</p>
          </div>
        </Event>
        <Event column={8} colSpan={2} hours={[10, 17.5]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>START</p>
            <p>DEADLINE</p>
          </div>
        </Event>
        <Event column={10} colSpan={2} hours={[10, 15.5]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>START</p>
            <p>PUZZEL LEGGEN</p>
          </div>
        </Event>
        <Event column={2} colSpan={2} hours={[20, 22]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>BANDJESAVOND</p>
            <p className="text-right">THE SPLASHBACK TO SOUND-RATIO</p>
            <p className="text-right">POLAR BEAR TAXI DRIVERS</p>
            <br />
          </div>
        </Event>
        <Event column={4} colSpan={2} hours={[20, 22.5]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>FEEST</p>
            <p className="text-right">KOBE</p>
            <p className="text-right">bünzenbrander</p>
            <div className="h-9" />
          </div>
        </Event>
        <Event column={6} colSpan={2} hours={[20, 22]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>FEEST</p>
            <p className="text-right">LINX</p>
            <p className="text-right">DJ NECTAR</p>
            <br />
          </div>
        </Event>
        <Event column={8} colSpan={2} hours={[20, 22]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>PROFFENDJ'S</p>
            <p className="text-right">JOHAN</p>
            <p className="text-right">RUBEN</p>
            <p className="text-right">KAAT & ROBBY</p>
          </div>
        </Event>
        <Event column={10} colSpan={2} hours={[22, 26.5]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>EINDFEEST</p>
            <p className="text-right">la koca</p>
            <p className="text-right">JO-RIZZ</p>
            <p className="text-right">C-RIEL & FERRE</p>
            <p className="text-right">B-KE</p>
            <div className="h-14" />
            <p className="text-right">TOT 05:00</p>
          </div>
        </Event>
        <Event column={6} colSpan={2} hours={[23, 26.5]}>
          <div className="flex h-full flex-col justify-between bg-black-100 bg-opacity-10 p-1 pb-[2px] font-subTitle text-primary">
            <p>BACHFEEST</p>
            <p className="text-right">TOT 05:00</p>
          </div>
        </Event>

        {/* licht rood */}

        <Event column={3} hours={[9.5, 10]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">
              KOFFIEKOEKEN
            </div>
          </div>
        </Event>
        <Event column={3} hours={[12.5, 13.5]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">LUNCH</div>
          </div>
        </Event>
        <Event
          column={3}
          hours={[17, 18]}
          icon="link"
          iconColor="#a83e1d"
          href="jarenstrijd"
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">
              JARENSTRIJD
            </div>
          </div>
        </Event>
        <Event column={3} hours={[19.5, 20.5]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">AVONDETEN</div>
          </div>
        </Event>
        <Event column={5} hours={[9, 10]} icon="pop-up" iconColor="#a83e1d" top>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">
              OCHTEND-
              <br />
              ACTIVITEIT
            </div>
          </div>
        </Event>
        <Event
          column={5}
          hours={[11, 11.5]}
          icon="pop-up"
          iconColor="#a83e1d"
          top
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">ZOEKSPEL</div>
          </div>
        </Event>
        <Event column={5} hours={[12, 13]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">LUNCH</div>
          </div>
        </Event>
        <Event
          column={5}
          hours={[17, 18]}
          icon="link"
          iconColor="#a83e1d"
          href="jarenstrijd"
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">
              JARENSTRIJD
            </div>
          </div>
        </Event>
        <Event column={5} hours={[19.5, 20.5]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">AVONDETEN</div>
          </div>
        </Event>
        <Event column={7} hours={[9, 10]} icon="pop-up" iconColor="#a83e1d" top>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">
              OCHTEND-
              <br />
              ACTIVITEIT
            </div>
          </div>
        </Event>
        <Event
          column={7}
          hours={[11, 11.5]}
          icon="pop-up"
          iconColor="#a83e1d"
          top
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">ZOEKSPEL</div>
          </div>
        </Event>
        <Event column={7} hours={[12, 13]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">LUNCH</div>
          </div>
        </Event>
        <Event
          column={7}
          hours={[17, 18]}
          icon="link"
          iconColor="#a83e1d"
          href="jarenstrijd"
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">
              JARENSTRIJD
            </div>
          </div>
        </Event>
        <Event column={7} hours={[19.5, 20.5]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">AVONDETEN</div>
          </div>
        </Event>
        <Event column={9} hours={[9, 10]} icon="pop-up" iconColor="#a83e1d" top>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">
              OCHTEND-
              <br />
              ACTIVITEIT
            </div>
          </div>
        </Event>
        <Event
          column={9}
          hours={[11, 11.5]}
          icon="pop-up"
          iconColor="#a83e1d"
          top
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">ZOEKSPEL</div>
          </div>
        </Event>
        <Event column={9} hours={[12, 13]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">LUNCH</div>
          </div>
        </Event>
        <Event
          column={9}
          hours={[17, 18]}
          icon="link"
          iconColor="#a83e1d"
          href="jarenstrijd"
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">
              JARENSTRIJD
            </div>
          </div>
        </Event>
        <Event column={9} hours={[19.5, 20.5]}>
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">AVONDETEN</div>
          </div>
        </Event>
        <Event
          column={11}
          hours={[11, 11.5]}
          icon="pop-up"
          iconColor="#a83e1d"
          top
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">ZOEKSPEL</div>
          </div>
        </Event>
        <Event
          column={11}
          hours={[13, 15]}
          icon="link"
          iconColor="#a83e1d"
          href="jarenstrijd"
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="flex h-full flex-col justify-between bg-primary bg-opacity-5 p-1 pb-[2px]">
              LUNCH
              <p className="text-right">+ PLANTENVEILING</p>
              <p>EINDE</p>
              <p>JARENSTRIJD</p>
            </div>
          </div>
        </Event>

        {/* donker rood */}

        <Event column={1} hours={[19, 22.5]}>
          <div className="h-full bg-primary p-1 font-subTitle text-secondary">
            QUIZ
            <p className="absolute bottom-1 right-1">@ DUIVELSTEEN</p>
          </div>
        </Event>
        <Event
          column={2}
          colSpan={2}
          hours={[18, 19.5]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            LEZING
            <p className="self-center">TINA DE GENDT</p>
          </div>
        </Event>
        <Event
          column={4}
          colSpan={2}
          hours={[18, 19.5]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            LEZING
            <p className="self-center">SAMIA HENNI</p>
          </div>
        </Event>
        <Event
          column={6}
          colSpan={2}
          hours={[18, 19.5]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            LEZING
            <p className="self-center">APOLLINE VRANKEN</p>
          </div>
        </Event>
        <Event
          column={8}
          colSpan={2}
          hours={[18, 19.5]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            GESPREK
            <p className="self-center">RUTH SOENEN</p>
          </div>
        </Event>
        <Event
          column={10}
          colSpan={2}
          hours={[16, 18]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            REFLECTIE
            <p className="self-center text-right">
              ANNE KOCKELKORN
              <br />
              ANNELIES DE SMET
              <br />
              ELLY VAN EEGHEM
            </p>
          </div>
        </Event>
        <Event
          column={2}
          colSpan={2}
          hours={[11, 12.5]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            INTRO-LEZING
            <p className="self-center">CIEL GROMMEN</p>
          </div>
        </Event>
        <Event
          column={4}
          colSpan={2}
          hours={[13, 14.5]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            PANELGESPREK
            <p className="self-center text-right">
              LAURA NSENGIYUMVA
              <br />
              NATALIA SOLANO-MEZA
              <br />
              ELLY VAN EEGHEM
            </p>
          </div>
        </Event>
        <Event
          column={6}
          colSpan={2}
          hours={[13, 14.5]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            PANELGESPREK
            <p className="self-center text-right">
              SOFIE DE CAIGNY
              <br />
              LISA DE VISSCHER
              <br />
              EVELIEN PIETERS
            </p>
          </div>
        </Event>
        <Event
          column={8}
          colSpan={2}
          hours={[13, 15.5]}
          icon="link"
          iconColor="#ecdecf"
          right
        >
          <div className="flex h-full justify-between bg-primary p-1 font-subTitle text-secondary">
            PANELGESPREK
            <p className="self-center text-right">
              PARTICIPATIE
              <br />
              ROND
              <br />
              PLATEAU
            </p>
          </div>
        </Event>
      </Calendar>
    </SubPage>
  );
}
