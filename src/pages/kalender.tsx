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
            <p>PROFFENDJ&apos;S</p>
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
          href="randactiviteiten"
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
        <Event
          column={5}
          hours={[9, 10]}
          icon="pop-up"
          iconColor="#a83e1d"
          top
          popup={
            <>
              <p className="font-subTitle tracking-normal">
                locatie: Overal
                <h4 className="my-2 text-primary">
                  Let’s go for an egg-citing adventure
                </h4>
              </p>
              Met Pasen gaan we op ontdekkingstocht
              <br /> Op zoek naar eieren groot en klein
              <br /> Maar deze keer met een twist bedacht
              <br /> Architectuur zal onze gids zijn
              <br /> <br />
              We zoeken tussen zuilen en bogen
              <br /> En achter pilaren van beton
              <br /> In de schaduw van hoge torens
              <br /> En op trappen naar de horizon
              <br /> <br />
              Eieren verscholen tussen hoeken
              <br /> En verstopt achter gebogen lijnen
              <br /> We gaan op zoek, we zullen vinden
              <br /> Tussen architectonische ontworpen pleinen.
              <br /> <br />
              Maar zelfs als we ze niet allemaal vindenDan nog is het een
              avontuur zo fijn Een paaseierenzoektocht geïnspireerd Door
              architectuur, een uniek festijn.
              <br /> <br /> Credits: Chat GPT
            </>
          }
        >
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
          // popup={
          //   <>
          //     <h4 className="my-2 font-subTitle text-xl tracking-normal text-primary">
          //       Gevonden!
          //     </h4>
          //     De eerste verstopplek van Geeraard is gevonden! Casa Rosa is het
          //     Oost-Vlaams Regenbooghuis, een locatie waar holebi’s, transgender
          //     personen en hun omgeving terecht kunnen. Het is een
          //     ontmoetingsplaats die zich richt op alle individuen en groepen die
          //     interesse hebben in en werken rond seksuele oriëntatie en
          //     genderidentiteit.
          //   </>
          // }
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
          href="randactiviteiten"
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
        <Event
          column={7}
          hours={[9, 10]}
          icon="pop-up"
          iconColor="#a83e1d"
          top
          popup={
            <>
              <p className="font-subTitle tracking-normal">
                locatie: -1
                <h4 className="my-2 text-primary">
                  Shake it up met Nathan Vandenbossche: Een cha cha les vol
                  joker-plezier!
                </h4>
              </p>
              Op een ochtend in de Jokerweek,
              <br /> Staat Nathan paraat, vol vuur en gloed,
              <br /> Om ons in te wijden in de Chacha,
              <br /> Als een dansende Robin Hood.
              <br /> <br />
              Met zijn soepele heupen en sierlijke tred,
              <br /> Brengt hij ons in extase en trance,
              <br /> Met elke beweging, elke stap,
              <br /> Toont hij ons de kunst van de dans.
              <br /> <br />
              We volgen zijn instructies en zijn ritme,
              <br /> Als kleine bootjes op de deinende zee,
              <br /> We wankelen soms, verliezen evenwicht,
              <br /> Maar Nathan begeleidt ons vakkundig en geeft niet mee.
              <br /> <br />
              Maar als de les ten einde loopt,
              <br /> Zijn onze benen moe en onze geest verlicht,
              <br /> We hebben geleerd, we hebben genoten,
              <br /> En Nathan, hij is onze dansende licht.
              <br /> <br />
              Op deze ochtend in de Jokerweek,
              <br /> Heeft hij ons de Chacha bijgebracht,
              <br /> En ons hart gevuld met dans en vreugde,
              <br /> Een ervaring om nooit te vergeten, deze pracht.
              <br /> <br /> Credits: Chat GPT
            </>
          }
        >
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
          // popup={
          //   <>
          //     <h4 className="my-2 font-subTitle text-xl tracking-normal text-primary">
          //       Gevonden!
          //     </h4>
          //     Vandaag werd Geraard gevonden aan het Charles de L’Epéeplein. De
          //     Franse abt was een pionier in de behandeling van doven en
          //     slechthorenden, waarbij hij onderzoek deed naar bruikbare
          //     gebarentaal. Daarnaast pleitte hij voor de gelijke rechten van
          //     doven en slechthorenden.
          //   </>
          // }
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
          href="randactiviteiten"
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
        <Event
          column={9}
          hours={[9, 10]}
          icon="pop-up"
          iconColor="#a83e1d"
          top
          popup={
            <>
              <p className="font-subTitle tracking-normal">
                locatie: 0
                <h4 className="my-2 text-primary">
                  Verdwaal in de wereld van architectuur: Een avontuurlijke
                  voorleessessie met Ruben en Nicolas
                </h4>
              </p>
              Heb je zin in een middag vol avontuur en mysterie? Kom dan naar
              onze voorleessessie waarin we twee verhalen voorlezen die je niet
              wilt missen! Eerst gaan we met Jantje op zoeknaar de betekenis van
              architectuur. Wie weet ontdek je wel dat de beroemde Eiffeltoren
              eigenlijk een reusachtige broodrooster is. En dan hebben we nog
              een bloedstollend verhaal over een verdwenen koffietas op de
              zolder van de Plateau. Het is een echte whodunit, waarin de
              spanning om te snijden is. Wie heeft de koffietas gestolen? Was
              het de professor met de kaasschaaf in het atelier? Of toch die ene
              student die altijd zo verdacht kijkt als hij zijn koffie drinkt?
              Kom erachter tijdens onze voorleessessie en beleef een middag vol
              lachwekkende ontdekkingen en adembenemende suspense!
            </>
          }
        >
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
          // popup={
          //   <>
          //     <h4 className="my-2 font-subTitle text-xl tracking-normal text-primary">
          //       Gevonden!
          //     </h4>
          //     Als derde locatie is Geeraard terug te vinden aan de Eyüp Sultan
          //     Camii moskee. De moskee is volledig gefinancierd door giften
          //     afkomstig uit de Turkse gemeenschap van Gent en werd in 1978
          //     officieel geopend. Van meet af aan geldt de plek niet enkel als
          //     gebedshuis, maar ook als ontmoetingsplek voor de gemeenschap.
          //   </>
          // }
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
          href="randactiviteiten"
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
          // popup={
          //   <>
          //     <h4 className="my-2 font-subTitle text-xl tracking-normal text-primary">
          //       Gevonden!
          //     </h4>
          //     Voor de laatste keer heeft Geeraard zich verstopt aan Dok-Zuid. Op
          //     deze locatie is een werkplaats-kringloopcentrum gelegen, waar
          //     spullen ingezameld worden en opnieuw verkocht worden. Het is een
          //     sociaal tewerkstellingsproject waar mensen werkervaring kunnen
          //     opdoen, maar ook hulpverlening en milieu staan centraal in de
          //     visie.
          //   </>
          // }
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="h-full bg-primary bg-opacity-5 p-1">ZOEKSPEL</div>
          </div>
        </Event>
        <Event
          column={11}
          hours={[12, 15]}
          icon="link"
          iconColor="#a83e1d"
          href="randactiviteiten"
        >
          <div className="h-full bg-secondary bg-opacity-70 font-subTitle italic text-primary">
            <div className="flex h-full flex-col justify-between bg-primary bg-opacity-5 p-1 pb-[2px]">
              LUNCH
              <div className="h-4" />
              PLANTENVEILING
              <div className="h-4" />
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
