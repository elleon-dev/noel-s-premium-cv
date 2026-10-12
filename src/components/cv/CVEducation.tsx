import { GraduationCap, Clock } from "lucide-react";

const education = [
  {
    credential: "Administración de Empresas",
    institution: "Universidad Tecnológica del Perú (UTP)",
    period: "En curso",
    location: "Lima, Perú",
    status: "En curso",
    statusIcon: <Clock className="w-3 h-3" />,
    note: "Formación universitaria en gestión empresarial, complementaria a la trayectoria tecnológica y emprendedora.",
  },
  {
    credential: "Titulado",
    institution: "Instituto de Educación Superior Tecnológico Privado Libertador",
    period: "2015 — 2018",
    location: "Chorrillos — Lima, Perú",
    status: null,
    statusIcon: null,
    note: null,
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
                <div className="flex flex-wrap items-center gap-2.5 mt-1">
                  <p className="text-[14px] text-cv-accent font-semibold">
                    {item.institution}
                  </p>
                  {item.status && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-cv-accent bg-cv-accent/8 px-2 py-0.5 rounded-full border border-cv-accent/15">
                      {item.statusIcon}
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right shrink-0 mt-0.5 sm:mt-0">
                <span className="text-[12px] font-mono text-cv-muted tabular-nums block">
                  {item.period}
                </span>
                <p className="text-[12px] text-cv-muted mt-0.5">{item.location}</p>
              </div>
            </header>

            {item.note && (
              <p className="text-[13px] text-cv-muted leading-[1.65] mt-2 max-w-[52ch]">
                {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVEducation;
