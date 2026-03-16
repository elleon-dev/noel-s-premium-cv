import { Lightbulb, Code2, Briefcase, Languages } from "lucide-react";

const skills = {
  core: [
    "Emprendimiento",
    "Desarrollo de Negocio",
    "Pensamiento Estratégico",
    "Crecimiento de Startups",
    "Gestión de Proyectos",
  ],
  stack: [
    "Desarrollo Full Stack",
    "React / TypeScript",
    "Node.js",
    "Productos Digitales",
    "Aplicaciones Web",
  ],
  business: [
    "Importación y Comercio",
    "Aprovisionamiento Internacional",
    "Operaciones Comerciales",
  ],
};

const languages = [
  { name: "Español", level: "Nativo", bar: 100 },
  { name: "Inglés", level: "Elemental", bar: 30 },
];

const CVSidebar = () => {
  return (
    <aside className="space-y-9">
      <SkillSection
        icon={<Lightbulb className="w-3.5 h-3.5" />}
        title="Competencias Clave"
        items={skills.core}
      />

      <Divider />

      <SkillSection
        icon={<Code2 className="w-3.5 h-3.5" />}
        title="Stack Técnico"
        items={skills.stack}
      />

      <Divider />

      <SkillSection
        icon={<Briefcase className="w-3.5 h-3.5" />}
        title="Negocio"
        items={skills.business}
      />

      <Divider />

      <section>
        <SectionTitle icon={<Languages className="w-3.5 h-3.5" />}>
          Idiomas
        </SectionTitle>
        <div className="space-y-3.5">
          {languages.map((lang) => (
            <div key={lang.name}>
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className="text-foreground font-medium">{lang.name}</span>
                <span className="text-cv-muted text-[10px] italic">{lang.level}</span>
              </div>
              <div className="h-[3px] bg-cv-subtle rounded-full overflow-hidden">
                <div
                  className="h-full bg-cv-accent rounded-full transition-all duration-500"
                  style={{ width: `${lang.bar}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

const Divider = () => (
  <div className="flex items-center gap-3">
    <div className="flex-1 h-px bg-cv-border" />
    <div className="w-1 h-1 rounded-full bg-cv-border" />
    <div className="flex-1 h-px bg-cv-border" />
  </div>
);

const SectionTitle = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) => (
  <h3 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-cv-muted font-semibold mb-4">
    <span className="text-cv-accent">{icon}</span>
    {children}
  </h3>
);

const SkillSection = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) => (
  <section>
    <SectionTitle icon={icon}>{title}</SectionTitle>
    <div className="flex flex-wrap gap-1.5">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-2.5 py-1 bg-cv-subtle text-foreground text-[10px] font-medium rounded-md border border-cv-border hover:border-cv-accent/30 hover:bg-cv-accent/5 transition-colors duration-200 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default CVSidebar;
