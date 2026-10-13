import { Rocket, Terminal, UserRound, Phone } from "lucide-react";

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
    tagIcon: <Rocket className="w-3 h-3" />,
  },
  {
    company: "Servitec Group SAC",
    reference: { name: "Roberto Mendoza", role: "CEO Servitec", phone: "+51 972 252 744", href: "tel:+51972252744" },
    role: "Director de Proyectos TI",
    period: "Abr 2024 — Abr 2025",
    location: "Lima, Perú",
    description:
      "Empresa tecnológica de servicios TI y comercialización de equipos electrónicos, incluyendo portátiles, PCs y proyectores.",
    highlights: [
      "Implementación de la metodología SCRUM y capacitación del equipo en tecnologías modernas (React, Node.js, TypeScript, Firebase)",
      "Liderazgo del desarrollo de plataformas internas como Korekenke, Practice System y Servitec Sales",
      "Implementación de BigQuery y Looker Studio para el análisis de datos y la creación de reportes",
    ],
    tag: "Liderazgo",
    tagIcon: <Rocket className="w-3 h-3" />,
  },
  {
    company: "Webuild",
    reference: { name: "Bruno Schuermans", role: "IT Manager", phone: "+51 940 490 440", href: "tel:+51940490440" },
    role: "Team Leader de Proyectos",
    period: "Mar 2023 — Feb 2024",
    location: "Miraflores, Lima, Perú",
    description:
      "Liderazgo de proyectos web para clientes de diversos sectores, capacitando a nuevos integrantes del equipo y garantizando entregas de calidad.",
    highlights: [
      "Colaboración en el desarrollo de las plataformas de venta de pasajes de Cruz del Sur y Civa",
      "Liderazgo en el desarrollo de ConoceTuDelivery para la Municipalidad de Miraflores, integrando BigQuery y Looker Studio",
      "Migración de aplicaciones internas a versiones más actuales, mejorando rendimiento y funcionalidad",
      "Capacitación de nuevos empleados, fortaleciendo las capacidades técnicas del equipo",
    ],
    tag: "Ingeniería",
    tagIcon: <Terminal className="w-3 h-3" />,
  },
  {
    company: "Peru Hop",
    reference: { name: "Bruno Schuermans", role: "IT Manager", phone: "+51 940 490 440", href: "tel:+51940490440" },
    role: "Desarrollador Full Stack",
    period: "Abr 2019 — Mar 2023",
    location: "Miraflores, Lima, Perú",
    description:
      "Más de 4 años desarrollando plataformas digitales para diversos clientes, enfocándose en resultados de alta calidad y escalables.",
    highlights: [
      "Participación en el desarrollo del primer Daily Fantasy del Perú, plataforma de e-sports con módulos interactivos y rendimiento óptimo",
      "Diseño de interfaces modernas y responsivas alineadas a los objetivos de cada proyecto",
      "Implementación de correcciones y nuevas funcionalidades en aplicaciones internas y externas, priorizando la experiencia del usuario",
    ],
    tag: "Ingeniería",
    tagIcon: <Terminal className="w-3 h-3" />,
  },
];

const CVExperience = () => {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-foreground font-bold mb-7 print:mb-4">
        <span className="w-5 h-px bg-cv-accent" />
        Experiencia Profesional
      </h3>
      <div className="space-y-0 border-l-2 border-cv-border pl-7 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pb-9 print:pb-3 last:pb-0 group break-inside-avoid">
            {/* Timeline node */}
            <div className="absolute -left-[33px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-cv-accent group-hover:bg-cv-accent transition-colors duration-300" />

            <header className="flex flex-col sm:flex-row print:flex-row sm:justify-between sm:items-start mb-2.5 gap-1">
              <div>
                <h4 className="text-[17px] font-bold text-foreground leading-tight">{exp.role}</h4>
                <div className="flex flex-wrap items-center gap-2.5 mt-1">
                  <p className="text-[14px] text-cv-accent font-semibold">{exp.company}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-cv-accent bg-cv-accent/8 px-2 py-0.5 rounded-full border border-cv-accent/15">
                    {exp.tagIcon}
                    {exp.tag}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0 mt-0.5 sm:mt-0">
                <span className="text-[12px] font-mono text-cv-muted tabular-nums block">{exp.period}</span>
                <p className="text-[12px] text-cv-muted mt-0.5">{exp.location}</p>
              </div>
            </header>

            <p className="text-[13.5px] text-cv-muted leading-[1.65] mb-3 print:mb-2">{exp.description}</p>

            <ul className="space-y-1.5">
              {exp.highlights.map((item, i) => (
                <li key={i} className="text-[13px] text-cv-muted leading-relaxed print:leading-snug flex items-start gap-2.5">
                  <span className="text-cv-accent mt-[1px] shrink-0 text-[11px]">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {exp.reference && (
              <div className="mt-4 pt-3 print:mt-2 print:pt-1.5 border-t border-cv-border text-[12px] leading-relaxed text-cv-muted break-inside-avoid">
                <a
                  href={exp.reference.href}
                  className="flex items-center gap-2 hover:text-cv-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-cv-accent"
                >
                  <UserRound className="w-3.5 h-3.5 shrink-0 text-cv-accent" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-foreground">Referencia:</span> {exp.reference.name} (
                    {exp.reference.role})
                  </span>
                  <Phone className="w-3.5 h-3.5 shrink-0 text-cv-accent" aria-hidden="true" />
                  <span>Tel: {exp.reference.phone}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVExperience;
