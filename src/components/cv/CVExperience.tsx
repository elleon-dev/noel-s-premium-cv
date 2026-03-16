import { Rocket, Terminal } from "lucide-react";

const experiences = [
  {
    company: "Iubizon",
    role: "Socio Director",
    period: "Abr 2025 — Actualidad",
    location: "Lima, Perú",
    description:
      "Empresa especializada en la importación y comercialización de productos de tecnología multimedia. Responsable de estrategia de negocio, aprovisionamiento internacional, operaciones comerciales e iniciativas de crecimiento.",
    highlights: [
      "Liderazgo en estrategia de negocio y aprovisionamiento internacional de productos",
      "Impulso de operaciones comerciales y crecimiento de mercado en Perú",
      "Gestión de relaciones con proveedores en mercados internacionales",
    ],
    tag: "Liderazgo",
    tagIcon: <Rocket className="w-2.5 h-2.5" />,
  },
  {
    company: "Servitec Group SAC",
    role: "Director de Proyectos TI",
    period: "Abr 2024 — Abr 2025",
    location: "Lima, Perú",
    description:
      "Empresa tecnológica de servicios TI y comercialización de equipos electrónicos, incluyendo portátiles, PCs y proyectores.",
    highlights: [
      "Dirección de proyectos tecnológicos e iniciativas de transformación digital",
      "Mejoras operativas en la línea de servicios TI",
      "Gestión de la cartera de equipos electrónicos",
    ],
    tag: "Liderazgo",
    tagIcon: <Rocket className="w-2.5 h-2.5" />,
  },
  {
    company: "Webuild",
    role: "Desarrollador Full Stack",
    period: "Mar 2023 — Feb 2024",
    location: "Lima, Perú",
    description:
      "Desarrollo y mantenimiento de aplicaciones web y plataformas digitales con tecnologías full stack modernas.",
    highlights: [
      "Construcción y mantenimiento de aplicaciones web en producción",
      "Implementación de arquitecturas full stack modernas",
      "Colaboración en el desarrollo de plataformas digitales",
    ],
    tag: "Ingeniería",
    tagIcon: <Terminal className="w-2.5 h-2.5" />,
  },
  {
    company: "Peru Hop",
    role: "Desarrollador Full Stack",
    period: "Abr 2019 — Mar 2023",
    location: "Lima, Perú",
    description:
      "Desarrollo y mejora de sistemas digitales y plataformas de soporte a operaciones de negocio y servicios al cliente.",
    highlights: [
      "Desarrollo de sistemas digitales de soporte a operaciones",
      "Mejora de plataformas orientadas al cliente",
      "Mantenimiento y escalado de aplicaciones en producción durante más de 4 años",
    ],
    tag: "Ingeniería",
    tagIcon: <Terminal className="w-2.5 h-2.5" />,
  },
];

const CVExperience = () => {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-cv-muted font-semibold mb-8">
        <span className="w-5 h-px bg-cv-accent" />
        Experiencia Profesional
      </h3>
      <div className="space-y-0 border-l-2 border-cv-border pl-7 relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pb-9 last:pb-0 group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[33px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-cv-accent group-hover:bg-cv-accent transition-colors duration-300" />

            <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2.5 gap-1">
              <div>
                <div className="flex items-center gap-2.5">
                  <h4 className="text-[13px] font-bold text-foreground leading-tight">
                    {exp.role}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[8px] uppercase tracking-wider font-semibold text-cv-accent bg-cv-accent/8 px-2 py-0.5 rounded-full border border-cv-accent/15">
                    {exp.tagIcon}
                    {exp.tag}
                  </span>
                </div>
                <p className="text-[11.5px] text-cv-accent font-semibold mt-0.5">
                  {exp.company}
                </p>
              </div>
              <div className="text-right shrink-0 mt-0.5 sm:mt-0">
                <span className="text-[10px] font-mono text-cv-muted tabular-nums block">
                  {exp.period}
                </span>
                <p className="text-[9px] text-cv-muted mt-0.5">{exp.location}</p>
              </div>
            </header>

            <p className="text-[11px] text-cv-muted leading-[1.7] mb-3">
              {exp.description}
            </p>

            <ul className="space-y-1.5">
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-[10.5px] text-cv-muted leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-cv-accent mt-[1px] shrink-0 text-[9px]">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVExperience;
