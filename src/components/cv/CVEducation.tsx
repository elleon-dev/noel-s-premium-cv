import { Clock } from "lucide-react";

const education = [
  {
    credential: "Administración de Empresas",
    institution: "Universidad Tecnológica del Perú (UTP)",
    period: "En curso",
    location: "Lima, Perú",
    ongoing: true,
  },
  {
    credential: "Titulado en Computación e Informática",
    institution: "Instituto de Educación Superior Tecnológico Privado Libertador",
    period: "2015 — 2018",
    location: "Chorrillos — Lima, Perú",
    ongoing: false,
  },
];

const CVEducation = () => {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-foreground font-bold mb-7 print:mb-5">
        <span className="w-5 h-px bg-cv-accent" />
        Formación Académica
      </h3>
      <div className="space-y-0 border-l-2 border-cv-border pl-7 relative">
        {education.map((item, index) => (
          <div
            key={index}
            className="relative pb-7 print:pb-5 last:pb-0 group break-inside-avoid"
          >
            <div className="absolute -left-[33px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-cv-accent group-hover:bg-cv-accent transition-colors duration-300" />

            <header className="flex flex-col sm:flex-row print:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <h4 className="text-[17px] font-bold text-foreground leading-tight">
                  {item.credential}
                </h4>
                <p className="text-[14px] text-cv-accent font-semibold mt-1">
                  {item.institution}
                </p>
              </div>
              <div className="text-right shrink-0 mt-0.5 sm:mt-0">
                <span className="text-[12px] font-mono text-cv-muted tabular-nums flex items-center justify-end gap-1.5">
                  {item.ongoing && <Clock className="w-3 h-3 text-cv-accent" />}
                  {item.period}
                </span>
                <p className="text-[12px] text-cv-muted mt-0.5">{item.location}</p>
              </div>
            </header>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVEducation;
