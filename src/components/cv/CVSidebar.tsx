import { Lightbulb, Code2, Briefcase, Languages, Sparkles } from "lucide-react";

const skills = {
  core: [
    "Emprendimiento",
    "Desarrollo de Negocio",
    "Pensamiento Estratégico",
    "Resolución de Problemas",
    "Gestión de Proyectos",
  ],
  stack: [
    "Desarrollo Full Stack",
    "React / TypeScript",
    "Next.js",
    "Astro",
    "Node.js",
    "Firebase",
    "Supabase",
    "Google Cloud",
    "Resend",
    "Productos Digitales",
    "Aplicaciones Web",
  ],
  ai: [
    "Claude AI",
    "Gemini",
    "OpenAI / ChatGPT",
    "Antigravity",
    "n8n",
    "Vercel AI SDK",
  ],
  business: [
    "Importación y Comercio",
    "Negociación con Proveedores",
    "Operaciones Comerciales",
  ],
};

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Básico" },
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
        icon={<Sparkles className="w-3.5 h-3.5" />}
        title="IA & Automatización"
        items={skills.ai}
        highlight
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
            <div key={lang.name} className="flex justify-between text-[11px]">
              <span className="text-foreground font-medium">{lang.name}</span>
              <span className="text-cv-muted text-[10px] italic">{lang.level}</span>
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
  highlight,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  highlight?: boolean;
}) => (
  <section>
    <SectionTitle icon={icon}>{title}</SectionTitle>
    <div className="flex flex-wrap gap-1.5">
      {items.map((skill) => (
        <span
          key={skill}
          className={
            highlight
              ? "inline-flex items-center gap-1 px-2.5 py-1 bg-cv-accent/8 text-cv-accent text-[10px] font-semibold rounded-md border border-cv-accent/25 hover:bg-cv-accent/12 transition-colors duration-200 cursor-default"
              : "px-2.5 py-1 bg-cv-subtle text-foreground text-[10px] font-medium rounded-md border border-cv-border hover:border-cv-accent/30 hover:bg-cv-accent/5 transition-colors duration-200 cursor-default"
          }
        >
          {highlight && (
            <Sparkles className="w-2.5 h-2.5 opacity-70" />
          )}
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default CVSidebar;
