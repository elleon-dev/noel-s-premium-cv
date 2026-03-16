const experiences = [
  {
    company: "Iubizon",
    role: "Managing Partner",
    period: "Apr 2025 — Present",
    location: "Lima, Peru",
    description:
      "Company specialized in importing and commercializing multimedia technology products. Responsible for business strategy, international sourcing, sales operations, and growth initiatives.",
    highlights: [
      "Leading business strategy and international product sourcing",
      "Driving sales operations and market growth in Peru",
      "Managing supplier relationships across international markets",
    ],
    tag: "Leadership",
  },
  {
    company: "Servitec Group SAC",
    role: "IT Project Director",
    period: "Apr 2024 — Apr 2025",
    location: "Lima, Peru",
    description:
      "Technology company providing IT services and commercialization of electronic equipment including laptops, PCs and projectors.",
    highlights: [
      "Led technology projects and digital transformation initiatives",
      "Directed operational improvements across IT services",
      "Managed commercialization of electronic equipment portfolio",
    ],
    tag: "Leadership",
  },
  {
    company: "Webuild",
    role: "Full Stack Developer",
    period: "Mar 2023 — Feb 2024",
    location: "Lima, Peru",
    description:
      "Developed and maintained web applications and digital platforms using modern full stack technologies.",
    highlights: [
      "Built and maintained production web applications",
      "Implemented modern full stack architectures",
      "Collaborated on digital platform development",
    ],
    tag: "Engineering",
  },
  {
    company: "Peru Hop",
    role: "Full Stack Developer",
    period: "Apr 2019 — Mar 2023",
    location: "Lima, Peru",
    description:
      "Worked on development and improvement of digital systems and platforms supporting business operations and customer services.",
    highlights: [
      "Developed digital systems supporting business operations",
      "Improved customer-facing platforms and services",
      "Maintained and scaled production applications over 4 years",
    ],
    tag: "Engineering",
  },
];

const CVExperience = () => {
  return (
    <section>
      <h3 className="text-[10px] uppercase tracking-[0.15em] text-cv-muted font-semibold mb-6">
        Professional Experience
      </h3>
      <div className="space-y-0 border-l border-cv-border pl-6 relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pb-8 last:pb-0 group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[27px] top-1.5 w-2 h-2 rounded-full bg-cv-accent ring-4 ring-background transition-all duration-200 group-hover:scale-125" />

            <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-[13px] font-bold text-foreground">
                    {exp.role}
                  </h4>
                  <span className="text-[8px] uppercase tracking-wider font-semibold text-cv-accent bg-cv-subtle px-1.5 py-0.5 rounded">
                    {exp.tag}
                  </span>
                </div>
                <p className="text-[11px] text-cv-accent font-medium">
                  {exp.company}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] font-mono text-cv-muted tabular-nums">
                  {exp.period}
                </span>
                <p className="text-[9px] text-cv-muted">{exp.location}</p>
              </div>
            </header>

            <p className="text-[11px] text-cv-muted leading-relaxed mb-2">
              {exp.description}
            </p>

            <ul className="space-y-1">
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-[10.5px] text-cv-muted leading-relaxed flex items-start gap-2"
                >
                  <span className="text-cv-accent mt-0.5 shrink-0">→</span>
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
