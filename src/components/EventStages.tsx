import SectionCTA from "./SectionCTA";

const getStageGradient = (stage: string): string => {
  if (stage.includes("2")) {
    return "linear-gradient(270deg, #A006D8 0.22%, #461FC5 99.78%)";
  } else if (stage.includes("3")) {
    return "linear-gradient(270deg, #D151FF 0.02%, #A006D8 99.98%)";
  } else if (stage.includes("4")) {
    return "linear-gradient(270deg, #109AFC 0.21%, #D151FF 99.79%)";
  } else if (stage.includes("5")) {
    return "linear-gradient(271deg, #3DC0DF 0.45%, #109AFC 99.55%)";
  } else if (stage.includes("6")) {
    return "linear-gradient(270deg, #C347FC 0.07%, #3DC0DF 99.93%)";
  } else {
    return "linear-gradient(270deg, #461FC5 0.11%, #8112B3 99.89%)";
  }
};

const stageData = [
  {
    stage: "Solis Nr.1",
    title: "Izvēlies pasākumu",
    description:
      "Aizpildi īsu pieteikuma formu, kur norādi pasākuma veidu, mērķi, dalībnieku skaitu, atrašanās vietu un budžetu.",
  },
  {
    stage: "Solis Nr.2",
    title: "Saņem programmas piedāvājumu",
    description:
      "Mēs sagatavojam personalizētu piedāvājumu un iesakām uzreiz rezervēt norises vietu.",
  },
  {
    stage: "Solis Nr.3",
    title: "Avansa iemaksa 10% / Persolalizēta programma",
    description:
      "Rediģējam, pielāgojam un apstiprinām programmu – līdz tā pilnībā atbilst tavām vajadzībām.",
  },
  {
    stage: "Solis Nr.4",
    title: "Programmas saskaņošana/ Apmaksā 50%",
    description:
      "Pēc rēķina apmaksas pasākums tiek rezervēts. Ja nepieciešams – tiek sagatavots līgums.",
  },
  {
    stage: "Solis Nr.5",
    title: "Pasākums notiek!",
    description:
      "Mēs organizējam pasākumu – no A līdz Z. Ja nepieciešams, sagatavojam nodošanas aktu.",
  },
  {
    stage: "Solis Nr.6",
    title: "Dalies ar  atsauksmi",
    description:
      "Dalies ar atsauksmi un saņem līdz -10% atlaidi nākamajam pasākumam.",
  },
];
const StageCard = ({
  stage,
  title,
  description,
}: {
  stage: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        borderRadius: "20px",
        boxShadow: "7px 6px 32.7px 13px rgba(242, 243, 242, 0.50)",
        background: `var(--card-bg, ${getStageGradient(stage)})`,
      }}
      className="group min-h-[230px] text-left p-5 [&&_*]:text-white bg-cover bg-center hover:[--card-bg:white] transition-all duration-700 ease-out overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl"
    >
      <p className="text-body group-hover:text-body-xs group-hover:!text-[#B8B8B8] transition-all duration-400 ease-out">
        {stage}
      </p>
      <h3 className="text-[25px] group-hover:text-xl group-hover:!text-secondary transition-all duration-400 ease-out">
        {title}
      </h3>
      {/* Hidden description */}
      <div className="max-h-0 group-hover:max-h-48 transition-all duration-600 ease-out overflow-hidden">
        <p className="!text-text text-body pt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out transform translate-y-2 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </div>
  );
};
const EventStages = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto py-20 flex flex-col gap-6 text-center">
        <h2 className="md:max-w-[70%] mx-auto font-medium">
          Pasākuma organizēšanas posmi
        </h2>
        <p className="md:max-w-[60%] mx-auto">
          Piedzīvojums sākas jau no brīža, kad aizpildi pieteikumu. Šie ir seši
          vienkārši soļi līdz lieliskam pasākumam – mēs iesaistāmies katrā no
          tiem.
        </p>
        <div className="h-[300px] pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 items-start">
          {stageData.map((item) => (
            <StageCard
              key={`stage-${item.stage}`}
              stage={item.stage}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      {/* Call to action section */}
        <SectionCTA
          iconType="lightPurple"
          title="Ja esi jau piedalījies mūsu pasākumos, iesniedz atsauksmi un saņem <strong>BONUSU</strong> savam pasākumam jau tagad!"
          buttonText="iesniedz atsauksmi"
        />
      </div>
    </section>
  );
};

export default EventStages;
